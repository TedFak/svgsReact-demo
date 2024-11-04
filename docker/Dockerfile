FROM nginx:latest

RUN apt-get update && apt-get install -y certbot python3-certbot-nginx git && rm -rf /var/lib/apt/lists/*

COPY nginx.conf /etc/nginx/nginx.conf

COPY certbot-renew.sh /usr/local/bin/certbot-renew.sh
RUN chmod +x /usr/local/bin/certbot-renew.sh

EXPOSE 80 443

CMD ["sh", "-c", "nginx -g 'daemon off;' & /usr/local/bin/certbot-renew.sh"]
