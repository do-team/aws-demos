FROM alpine
RUN apk update && apk upgrade
RUN apk add nodejs
WORKDIR /
COPY . .
EXPOSE 1234
CMD ["node", "little.js"]
