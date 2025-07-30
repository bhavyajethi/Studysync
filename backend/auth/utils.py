import string, random
from werkzeug.security import generate_password_hash
from google.oauth2 import id_token
from google.auth.transport.requests import Request
from config import GOOGLE_CLIENT_ID

def generate_password(length=12):
    chars = string.ascii_letters + string.digits + string.punctuation
    return ''.join(random.choice(chars) for _ in range(length))

def hash_password(password):
    return generate_password_hash(password)

def verify_google_token(token):
    try:
        idinfo = id_token.verify_oauth2_token(token, Request(), GOOGLE_CLIENT_ID)
        return idinfo
    except Exception as e:
        return None