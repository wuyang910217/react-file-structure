FROM node:7.7.3

RUN mkdir -p /var/www/node

COPY build/ /var/www/node/

WORKDIR /var/www/node

EXPOSE 3400

RUN npm install -g serve
CMD serve -p 3400 .