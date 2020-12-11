FROM nginx:alpine
COPY . /usr/share/nginx/html
LABEL maintainer = "benson.domingo@outlook.com"
