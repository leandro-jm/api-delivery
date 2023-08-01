FROM node as base

WORKDIR /home/node/app

COPY package*.json ./

RUN npm i

COPY . .

CMD [ "npm", "npm run start:dev" ]

EXPOSE 8009