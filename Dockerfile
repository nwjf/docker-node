
from node:12
from redis

copy . /app

workdir /app

run npm install

expose 7001

cmd ["npm", "run", "start"]
