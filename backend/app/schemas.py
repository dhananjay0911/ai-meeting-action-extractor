from pydantic import BaseModel
from typing import Optional


class TaskUpdate(BaseModel):
    assigned_to: str
    task: str
    deadline: Optional[str]


class Task(BaseModel):
    id: int
    assigned_to: str
    task: str
    deadline: Optional[str]
    confidence: float
    transcript_id: int

    class Config:
        orm_mode = True