# Colour Mixer

An interactive colour mixing app for kids. Pick two colours, adjust the amounts, and see what you get. A text-to-speech backend reads colour names aloud.

## Features

- **Mix mode** — select two colours from a palette, adjust amounts (a little / some / lots), and see the blended result with its name
- **Test mode** — a 5-question quiz where you guess the mixed colour from three options (easy and hard difficulty)
- **Text-to-speech** — every colour and interaction is spoken aloud via a server-side TTS API with caching

## Running locally

Requires Python 3.12+.

```sh
uv sync
uv run uvicorn main:app --host 0.0.0.0 --port 8080
```

Then open http://localhost:8080.

## Docker

```sh
docker build -t colour-mixer .
docker run -p 8080:8080 colour-mixer
```

## CI

Pushes to `main` automatically build and push the Docker image to GHCR via GitHub Actions. The image is available at:

```
ghcr.io/marengaz/colour-mixer:latest
```
