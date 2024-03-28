FROM python:3.8-alpine

ENV PYTHONDONTWRITEBYTECODE 1

ENV PYTHONBUFFERED=1

RUN mkdir /backend

WORKDIR /backend

COPY . /backend/

RUN pip install -r requirements.txt

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]