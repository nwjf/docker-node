
from node:12

copy . /app

workdir /app

run npm install

expose 7001

cmd ["npm", "run", "start"]