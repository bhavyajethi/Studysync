import os
import json

class Config:
        SECRET_KEY = os.getenv("SECRET_KEY", "supersecret")
        SQLALCHEMY_DATABASE_URI = "postgresql://postgres:password@localhost:5432/studysync"
        SQLALCHEMY_TRACK_MODIFICATIONS = False
        JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY", "jwt-secret")

with open("credentials.json") as f:
        google_creds = json.load(f)

GOOGLE_CLIENT_ID = google_creds["web"]["client_id"]