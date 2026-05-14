FROM oven/bun:latest AS builder

WORKDIR /app

COPY package.json ./

RUN bun install

COPY . .

RUN bunx sourcey build -o dist

RUN cp -r static/* dist/ 2>/dev/null || :

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
