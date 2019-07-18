# PHASE 1
FROM node:10.16.0-alpine as builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build:prod

# PHASE 2
FROM nginx
COPY /nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/rapi-client /usr/share/nginx/html
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'