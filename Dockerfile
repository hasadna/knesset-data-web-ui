FROM node:10 as build-stage
COPY package.json package-lock.json /app/
RUN cd /app && npm install
COPY ./ /app/
RUN cd /app && npm run build

FROM nginx
COPY --from=build-stage /app/build/ /usr/share/nginx/html
COPY nginx-default.conf /etc/nginx/conf.d/default.conf
