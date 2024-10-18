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

# Copiar el archivo de configuración de Nginx con la variable ${PORT}
COPY nginx.conf /etc/nginx/templates/default.conf.template

# Instalar gettext para usar envsubst
RUN apk add --no-cache gettext

# Exponer el puerto que Render establece (Render usará PORT=8080 por defecto)
EXPOSE 8080

# Reemplazar las variables de entorno en la plantilla de Nginx y luego iniciar Nginx
CMD ["/bin/sh", "-c", "envsubst < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
