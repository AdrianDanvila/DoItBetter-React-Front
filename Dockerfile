# Etapa 1: Compilación de la aplicación
FROM node:18-alpine AS build

WORKDIR /app

# Copiar package.json y pnpm-lock.yaml
COPY package.json ./

# Instalar pnpm y dependencias del proyecto
RUN npm i -g pnpm@8.15.4
RUN pnpm install

# Copiar el resto de los archivos
COPY . .

# Compilar la aplicación
RUN pnpm run build

# Etapa 2: Servir la aplicación usando Nginx
FROM nginx:stable-alpine

# Copiar los archivos compilados desde la etapa de build
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto donde Nginx servirá la aplicación
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
