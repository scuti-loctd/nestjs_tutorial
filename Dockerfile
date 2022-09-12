FROM node:18

# Create app directory, this is in our container/in our image
WORKDIR /makita_be

RUN npm i -g @nestjs/cli

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

EXPOSE 3000
CMD [ "node", "dist/main.js" ]