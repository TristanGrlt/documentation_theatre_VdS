FROM oven/bun:latest AS builder

WORKDIR /app

COPY package.json ./

RUN bun install

COPY . .

RUN bunx sourcey build -o dist

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
COPY static /usr/share/nginx/html/static

EXPOSE 80