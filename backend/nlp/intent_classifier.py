task_keywords = [
    "prepare",
    "send",
    "review",
    "create",
    "finish",
    "update",
    "setup"
]


def is_task(sentence):

    for k in task_keywords:
        if k in sentence.lower():
            return True

    return False