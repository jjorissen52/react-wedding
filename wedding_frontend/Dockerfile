# base image
FROM node:9.6.1

# install npm's server
RUN npm install -g serve

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json

# create node_modules from package.json
RUN npm install --silent
# create build from node_modules
# RUN npm run build

# start app
CMD ["serve", "-s", "./build"]
