FROM node:22.16.0
WORKDIR /app
RUN apt-get update && apt-get install -y
RUN addgroup --gid 2001 dev && adduser --disabled-password --gecos '' --uid 2001 --ingroup dev dev
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npx prisma generate && echo "Prisma client successfully generated!" || echo "Failed to generate Prisma client."
RUN npm run build
RUN ls -ls build
EXPOSE 3333
USER dev
ENTRYPOINT ["node", "build/server.js"]