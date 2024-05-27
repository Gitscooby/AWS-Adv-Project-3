#choosing the base image as the build stage:
FROM node:14-alpine 

#choosing working directory for the application:
WORKDIR /app

#copying the package.json file to app directory and installing packages:
COPY package.json .
RUN npm install

#copying the rest of application code to the working directory:
COPY . .

#building the application:
RUN npm run build 

EXPOSE 3000
CMD ["npm", "start"]
