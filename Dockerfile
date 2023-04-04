FROM node:lts AS base-frontend

RUN mkdir -p /home/app

WORKDIR /home/app

COPY package.json /home/app/package.json
COPY package-lock.json /home/app/package-lock.json

RUN npm ci
COPY . /home/app

FROM base-frontend AS build

RUN ["npm", "run", "build"]

FROM nginx:1.23-alpine

EXPOSE 80

COPY --from=build /home/app/build /usr/share/nginx/html
