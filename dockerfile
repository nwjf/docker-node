FROM node:12
RUN npm install
CMD ["npm", "run", "start"]
EXPOSE 8080