FROM node:11.6.0-alpine AS builder
COPY . ./app
WORKDIR /app

RUN apt-get update
RUN apt-get install -y gnupg2
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y build-essential nodejs
RUN apt-get install -y npm
ENV ASPNETCORE_URLS http://*:5000
EXPOSE 5000
EXPOSE 5001

RUN npm install
RUN $(npm bin)/ng build --prod

FROM nginx:1.15.8-alpine
COPY --from=builder /app/dist /usr/share/nginx/html