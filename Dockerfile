FROM node
RUN mkdir -p /usr/src/twilio-channel
WORKDIR /usr/src/twilio-channel
COPY package.json /usr/src/twilio-channel/
RUN npm install
COPY . /usr/src/twilio-channel
CMD [ "npm", "start" ]
