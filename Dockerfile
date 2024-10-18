# Etapa 1: Compilar la aplicación
FROM node:18-alpine AS build

WORKDIR /app

COPY package.json  ./

RUN npm i -g pnpm@8.15.4
RUN pnpm install

COPY . .

# Compilar la aplicación
RUN pnpm run build

# Etapa 2: Servir la aplicación con Nginx
FROM nginx:stable-alpine

# Copiar los archivos compilados
COPY --from=build /app/dist /usr/share/nginx/html

# Copiar la configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto que se leerá desde la variable de entorno
EXPOSE 8080

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
