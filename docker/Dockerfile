FROM nginx:latest

RUN apt-get update && apt-get install -y certbot python3-certbot-nginx git openssl && rm -rf /var/lib/apt/lists/*

COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./site.conf /etc/nginx/conf.d/site.conf

COPY ./certbot-renew.sh /usr/local/bin/certbot-renew.sh
RUN chmod +x /usr/local/bin/certbot-renew.sh

EXPOSE 80 443

CMD ["sh", "-c", "nginx -g 'daemon off;'"]
