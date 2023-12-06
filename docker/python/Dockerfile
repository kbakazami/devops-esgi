FROM python:latest

RUN pip install mysql-connector-python

WORKDIR /usr/src/app

COPY . .

CMD [ "python", "./backend/main.py" ]