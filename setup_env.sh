#!/bin/bash
env=$1

TAG_IMAGE=TAG_IMAGE_$env
PORT=PORT_$env

VITE_API_URL=VITE_API_URL_$env
VITE_API_KEY=VITE_API_KEY_$env

echo TAG_IMAGE=${!TAG_IMAGE} >> .env
echo PORT=${!PORT} >> .env

echo VITE_API_URL=${!VITE_API_URL} >> .env
echo VITE_API_KEY=${!VITE_API_KEY} >> .env