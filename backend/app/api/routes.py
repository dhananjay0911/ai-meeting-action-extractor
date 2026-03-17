from fastapi import APIRouter, UploadFile, File, Depends
from sqlalchemy.orm import Session

from ..database import Base, engine
from ..models import Transcript, Task
from ..schemas import TaskUpdate
from .dependencies import get_db

from nlp.extractor import extract_tasks

router = APIRouter()

Base.metadata.create_all(bind=engine)


@router.post("/upload")
async def upload(file: UploadFile = File(...), db: Session = Depends(get_db)):

    content = await file.read()
    text = content.decode()

    transcript = Transcript(
        filename=file.filename,
        content=text
    )

    db.add(transcript)
    db.commit()
    db.refresh(transcript)

    extracted = extract_tasks(text)

    tasks = []

    for t in extracted:

        task = Task(
            assigned_to=t["assigned_to"],
            task=t["task"],
            deadline=t["deadline"],
            confidence=t["confidence"],
            transcript_id=transcript.id
        )

        db.add(task)
        db.commit()
        db.refresh(task)

        tasks.append(task)

    return {
        "transcript_id": transcript.id,
        "tasks": tasks
    }


@router.get("/tasks/{transcript_id}")
def get_tasks(transcript_id: int, db: Session = Depends(get_db)):
    return db.query(Task).filter(Task.transcript_id == transcript_id).all()


@router.put("/tasks/{task_id}")
def update_task(task_id: int, update: TaskUpdate, db: Session = Depends(get_db)):

    task = db.query(Task).filter(Task.id == task_id).first()

    task.assigned_to = update.assigned_to
    task.task = update.task
    task.deadline = update.deadline

    db.commit()
    db.refresh(task)

    return task