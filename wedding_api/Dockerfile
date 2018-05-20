FROM python:3.6
ENV PYTHONUNBUFFERED 1
RUN mkdir /config
ADD requirements.txt /config/
RUN pip install --quiet -r /config/requirements.txt
RUN mkdir /src;
WORKDIR /src
ADD . /src/
