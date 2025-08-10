# See https://docs.docker.com/samples/nodejs/
FROM node:20-alpine

# Directorio de trabajo
WORKDIR /app

# Copiar dependencias primero para aprovechar el cache
COPY package.json package-lock.json* ./

RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto de desarrollo
EXPOSE 3000

# Comando por defecto
CMD ["npm", "run", "dev", "--", "--host"]
