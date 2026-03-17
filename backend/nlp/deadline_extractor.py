import re

deadlines = [
    "monday","tuesday","wednesday","thursday","friday",
    "tomorrow","today"
]


def extract_deadline(sentence):

    for d in deadlines:
        if d in sentence.lower():
            return d.capitalize()

    return None