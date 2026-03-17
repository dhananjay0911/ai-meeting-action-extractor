from sqlalchemy import Column, Integer, String, Float, ForeignKey
from sqlalchemy.orm import relationship
from .database import Base


class Transcript(Base):
    __tablename__ = "transcripts"

    id = Column(Integer, primary_key=True)
    filename = Column(String)
    content = Column(String)

    tasks = relationship("Task", back_populates="transcript")


class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True)
    assigned_to = Column(String)
    task = Column(String)
    deadline = Column(String)
    confidence = Column(Float)

    transcript_id = Column(Integer, ForeignKey("transcripts.id"))
    transcript = relationship("Transcript", back_populates="tasks")