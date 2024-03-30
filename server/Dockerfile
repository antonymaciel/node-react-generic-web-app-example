# syntax=docker/dockerfile:1

FROM node:18.7.0-alpine
WORKDIR /app
COPY . . 
RUN npm install --omit=dev
CMD ["npm", "start"]
EXPOSE 3000