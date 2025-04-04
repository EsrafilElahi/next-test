# برای محیط توسعه Next.js
FROM node:16.13.2-buster

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
