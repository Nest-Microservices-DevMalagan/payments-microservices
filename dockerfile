FROM node:21-alpine3.19

WORKDIR /usr/src/app

# Instala pnpm globalmente
RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

EXPOSE 3003