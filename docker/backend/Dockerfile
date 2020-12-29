FROM python:3.8.3-alpine

WORKDIR /app
ADD ./backend/requirements.txt /app/backend/


RUN apk update && apk add gcc libc-dev libffi-dev openssl-dev python3-dev

RUN pip install --upgrade pip
RUN pip install gunicorn
RUN pip install -r backend/requirements.txt

ADD ./docker /app/docker
ADD ./backend /app/backend