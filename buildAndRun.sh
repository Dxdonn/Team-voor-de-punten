podman build -t iuw-webshop:latest ./
podman run -d -v ./www:/var/www/html -p 3030:80 iuw-webshop:latest 