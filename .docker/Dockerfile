FROM node:14-alpine AS builder
RUN apk add --no-cache git openssh
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY packege-lock.json .

RUN npm install
# Copy app files
COPY . .
# Build the app
RUN npm run build


# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as build
# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]