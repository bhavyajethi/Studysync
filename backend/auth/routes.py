from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from .utils import generate_password, hash_password, verify_google_token
from models.user_model import db, User

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    google_token = data.get('google_token')

    google_user = verify_google_token(google_token)
    if not google_user:
        return jsonify({"error": "Invalid Google token"}), 401
    
    email = google_user["email"]
    name = google_user.get("name", "New user")

    user = User.query.filter_by(email=email).first()
    if user:
        return jsonify({"error": "User already exists"}), 200
    
    password = generate_password()
    password_hash = hash_password(password)

    new_user = User(name=name, email=email, password_hash=password_hash)
    db.session.add(new_user)
    db.session.commit()

    token = create_access_token(identity=email)

    return jsonify({"message":"User registered successfully", "token": token, "generated_password": password})

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    google_token = data.get('google_token')

    google_user = verify_google_token(google_token)
    if not google_user:
        return jsonify({"error": "Invalid Google token"}), 401
    
    email = google_user["email"]
    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({"error": "User not found"}), 404
    
    token = create_access_token(identity=email)
    return jsonify({"message":"User logged in successfully", "token": token})