#!/bin/sh
while :; do
    certbot renew --nginx --quiet
    sleep 12h
done
