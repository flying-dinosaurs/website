FROM tiangolo/meinheld-gunicorn-flask:python3.7

#needed for gunicorn to work, also set secret key for app in website.__init__.py
ENV APP_MODULE website:app

ADD . ./app
WORKDIR ./app
RUN pip install --no-cache-dir -U pip
RUN pip install --no-cache-dir -r requirements.txt
