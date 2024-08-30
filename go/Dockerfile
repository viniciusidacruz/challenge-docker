FROM golang:1.23 AS builder

WORKDIR /usr/src/app

COPY . .

RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o fullcycle main.go

FROM scratch

COPY --from=builder /usr/src/app/fullcycle /fullcycle

CMD ["/fullcycle"]
