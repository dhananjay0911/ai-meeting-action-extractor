from .preprocessor import clean_text
from .ner_pipeline import extract_name
from .deadline_extractor import extract_deadline
from .intent_classifier import is_task


def extract_tasks(text):

    sentences = clean_text(text)

    tasks = []

    for s in sentences:

        if is_task(s):

            name = extract_name(s)
            deadline = extract_deadline(s)

            tasks.append({
                "assigned_to": name,
                "task": s,
                "deadline": deadline,
                "confidence": 0.9
            })

    return tasks