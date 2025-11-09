# Imagen base de Nginx ligera
FROM nginx:alpine

# Copiamos todos los archivos al directorio de Nginx
COPY . /usr/share/nginx/html

# Exponemos el puerto 80
EXPOSE 80

# Ejecutamos Nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
