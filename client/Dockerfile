FROM node:14-alpine3.14 as builder
WORKDIR /usr/app
COPY ./package.json ./
RUN npm install -g @angular/cli @angular-devkit/build-angular
RUN npm install
COPY . .
RUN npm run build


FROM nginx
EXPOSE 4200
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/app/dist/blueprint /usr/share/nginx/html