FROM oven/bun:1.3.8 as builder
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install

COPY . .
RUN bun run build

# ----------------------
FROM oven/bun:1.3.8-alpine as prod
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --production

COPY --from=builder /app/build ./build

EXPOSE 3000

CMD ["bun", "run", "/app/build/index.js"]
