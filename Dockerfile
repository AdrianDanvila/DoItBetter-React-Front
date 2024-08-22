FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm i -g pnpm@8.15.4

RUN pnpm install

COPY . .

RUN pnpm run build

EXPOSE 5173:8080

CMD [ "pnpm","run","dev" ]
