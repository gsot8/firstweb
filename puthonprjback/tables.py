from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import *
from sqlalchemy.orm import relationship, DeclarativeBase
import datetime


class Base(DeclarativeBase):
    pass


db = SQLAlchemy(model_class=Base)


class Room(db.Model):
    number = Column(Integer, primary_key=True)
    values = Column(Integer)


class User(db.Model):
    id = Column(Integer, primary_key=True)
    login = Column(String(30), unique=True)
    password = Column(String(30))
    name = Column(String(30))
    surname = Column(String(30))
    middle_name = Column(String(30))


class Timetable(db.Model):
    id = Column(Integer, primary_key=True)
    created_date = Column(DateTime, default=datetime.datetime.utcnow())
    id_bron = Column(Integer, ForeignKey('user.id'))
    id_room = Column(Integer, ForeignKey('room.number'))
    count = Column(Integer)
    floor = Column(Integer)
