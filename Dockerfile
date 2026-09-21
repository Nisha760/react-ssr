# ---- Stage 1: build ----
    FROM node:22-alpine AS build
    WORKDIR /app
    
    COPY package*.json ./
    RUN npm ci
    
    COPY .babelrc webpack.client.js webpack.server.js ./
    COPY src ./src
    RUN npm run build
    
    # ---- Stage 2: runtime ----
    FROM node:22-alpine
    WORKDIR /app
    ENV NODE_ENV=production
    
    COPY package*.json ./
    RUN npm ci --omit=dev
    
    COPY --from=build /app/dist ./dist
    
    USER node
    EXPOSE 3000
    CMD ["node", "dist/server.js"]