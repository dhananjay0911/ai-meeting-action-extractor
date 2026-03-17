def clean_text(text):
    
    lines = text.split("\n")

    cleaned = [l.strip() for l in lines if l.strip()]

    return cleaned