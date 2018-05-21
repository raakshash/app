FROM node:8.9-alpine
#ENV NODE_ENV production
WORKDIR /usr/src/serverapp
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --development --silent && mv node_modules ../
ARG env=prod
COPY . .
EXPOSE 3000
CMD [ "node", "app.js" ]