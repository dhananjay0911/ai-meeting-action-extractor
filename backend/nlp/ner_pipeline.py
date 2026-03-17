import re


def extract_name(sentence):

    match = re.search(r"([A-Z][a-z]+)", sentence)

    if match:
        return match.group(1)

    return "Unknown"