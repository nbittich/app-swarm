FROM node:20-alpine
RUN apk upgrade && apk add git
WORKDIR /home/node
RUN git clone https://github.com/meilisearch/mini-dashboard.git app
WORKDIR /home/node/app
RUN chown -R node:node /home/node/app
USER node
RUN yarn install
CMD ["yarn", "start"]
