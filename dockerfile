
from node:12

copy . /app

workdir /app

run npm install

cmd ["npm", "run", "start"]

expose 7001
