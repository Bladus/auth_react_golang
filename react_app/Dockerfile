FROM node:10 as react_front
WORKDIR /usr/app/front
COPY ./app ./app
COPY ./build ./build
COPY ./static ./static
COPY ./package.json ./
RUN yarn install && yarn run build

FROM nginx:1.17.3-alpine
WORKDIR /rospatent_fe
COPY ./nginx/rospatent_fe.conf ./
ENV UPSTREAM_SERVICE 'api:9090'
RUN envsubst '${UPSTREAM_SERVICE}' < /rospatent_fe/rospatent_fe.conf > /etc/nginx/conf.d/default.conf
COPY --from=react_front /usr/app/front/dist /rospatent_fe

EXPOSE 80