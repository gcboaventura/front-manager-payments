FROM node:18.12

WORKDIR /usr/src/front-manager-payments

COPY ./package.json .

RUN yarn install --only=prod

COPY . /usr/src/front-manager-payments

RUN yarn build

EXPOSE 3000

CMD yarn start
