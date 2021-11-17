FROM node:14.17-alpine
WORKDIR /home/node/backend

COPY package*.json ./
RUN npm i
COPY . .


EXPOSE 3000 9229

CMD npm run start
