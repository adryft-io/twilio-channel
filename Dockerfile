FROM node:argon
RUN mkdir -p /usr/src/twilioapi
WORKDIR /usr/src/twilioapi
COPY package.json /usr/src/twilioapi/
RUN npm install
COPY . /usr/src/twilioapi
CMD [ "npm", "start" ]
