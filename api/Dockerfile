FROM node:20-alpine3.18
WORKDIR /app
COPY . .
RUN npm install && npm run build
CMD ["node", "./build/index.js"]