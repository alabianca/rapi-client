# PHASE 1
FROM node:10.16.0-alpine as builder

WORKDIR '/app'

COPY package.json .

RUN npm install

COPY . .

CMD [ "npm", "run", "build", ]

# PHASE 2
FROM nginx
EXPOSE 80
COPY --from=builder /app/dist/rapi-client /usr/share/nginx/html