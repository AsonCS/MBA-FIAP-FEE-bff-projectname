FROM node:24-alpine

ENV NODE_ENV=production

WORKDIR /home/node/app

COPY package*.json ./
RUN if [ -f package-lock.json ]; then npm ci --omit=dev; else npm install --omit=dev; fi

COPY server.js ./
COPY public ./public

USER node

EXPOSE 80

CMD ["node", "server.js"]
