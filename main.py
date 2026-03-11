import hashlib
from pathlib import Path

from fastapi import FastAPI, Query
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from gtts import gTTS

app = FastAPI()

CACHE_DIR = Path("/app/speech_cache")
CACHE_DIR.mkdir(exist_ok=True)


@app.get("/api/tts")
async def text_to_speech(text: str = Query(..., min_length=1, max_length=200)):
    safe_text = text.lower().strip()
    cache_key = hashlib.md5(safe_text.encode()).hexdigest()
    cache_file = CACHE_DIR / f"{cache_key}.mp3"

    if not cache_file.exists():
        tts = gTTS(text=safe_text, lang="en", tld="co.uk")
        tts.save(str(cache_file))

    return FileResponse(
        cache_file,
        media_type="audio/mpeg",
        headers={"Cache-Control": "public, max-age=31536000"},
    )


app.mount("/", StaticFiles(directory="/app/frontend", html=True), name="frontend")
