FROM oven/bun:latest

WORKDIR /usr/src/app

# Copiamos los archivos de dependencias
COPY package.json ./

# Instalamos las dependencias con bun
RUN bun install

# Copiamos el resto de los archivos
COPY . .

EXPOSE 3003