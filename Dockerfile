# Use an official Node.js LTS (Long Term Support) image as the base image
FROM node:17-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.25.1-alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/build /usr/share/nginx/html

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
