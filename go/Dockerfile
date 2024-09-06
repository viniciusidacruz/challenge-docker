FROM golang:1.23-alpine AS builder

RUN apk --no-cache add upx

WORKDIR /usr/src/app

COPY . .

RUN CGO_ENABLED=0 GOOS=linux go build -a -ldflags="-s -w" -o fullcycle main.go

RUN upx --best fullcycle

FROM scratch

COPY --from=builder /usr/src/app/fullcycle /fullcycle

CMD ["/fullcycle"]
