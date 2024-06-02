FROM node:18 as builder

# setting workdir
WORKDIR /app

COPY package.json ./

# npm install
RUN npm install

# copy build resources to workdir
COPY . ./

# npm build
RUN npm run build


# use nginx alpine version as base image
FROM nginx:alpine

# user docker builder 
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]