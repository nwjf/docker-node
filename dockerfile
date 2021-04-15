# FROM node:12
# RUN npm install
# CMD ["npm", "run", "start"]
# EXPOSE 8080

from node:12

add . /app

workdir /app

run npm install

run npm run build

expose 7001

volume ["/app"]

cmd ["npm", "run", "fg-start"]