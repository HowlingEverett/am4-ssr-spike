FROM node:22-alpine3.21
LABEL authors="justinmarrington"

ENTRYPOINT ["top", "-b"]