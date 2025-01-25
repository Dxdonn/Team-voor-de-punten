podman build -t iuw-webshop:latest ./
podman run -d -v ./src:/var/www/html -p 3030:80 iuw-webshop:latest 