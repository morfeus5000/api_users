FROM node:7
COPY index.js /app
COPY package.json /app
WORKDIR /app
RUN npm install
EXPOSE 5800
CMD node index.js
