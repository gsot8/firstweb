from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase
from tables import db


def create_app():
    app = Flask(__name__)
    # configure the SQLite database, relative to the app instance folder
    # app.config["SQLALCHEMY_DATABASE_URI"] = "mysql://gsot8:20072006@84.38.180.130:3306/gsot8_db"
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///metanit.db"
    # initialize the app with the extension
    db.init_app(app)

    with app.app_context():
        db.create_all()
    app.db = db
    return app
