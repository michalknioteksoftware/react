# == Build stage ==
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .
RUN npm run build

# == Runtime stage (development via vite dev server) ==
FROM node:20-alpine AS dev

WORKDIR /app

ENV NODE_ENV=development

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
