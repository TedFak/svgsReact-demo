#!/bin/sh
while :; do
    sudo certbot renew --dns-cloudflare --dns-cloudflare-credentials cloudflare.ini
    sleep 12h
done
