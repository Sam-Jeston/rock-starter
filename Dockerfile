FROM node:6.3.1

RUN npm i -g pm2
COPY . /app
WORKDIR /app

RUN npm install
EXPOSE 3000
CMD pm2 start ./js/index.js --no-daemon
