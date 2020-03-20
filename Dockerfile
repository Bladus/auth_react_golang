FROM golang:1.13.8-alpine

WORKDIR /go/src/application

COPY ./conf /go/conf
COPY ./src/application .

WORKDIR /go
RUN apk add --no-cache git
RUN export GOPATH=`pwd`
RUN go get /go/src/application/...
RUN go build -o ./bin/rospatent application

WORKDIR /go
CMD ./bin/rospatent

EXPOSE 9090
