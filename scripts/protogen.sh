#!/bin/bash

mkdir -p ./pkg/protobuf
mkdir -p ./src/proto

protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  --plugin=protoc-gen-go=${GOPATH}/bin/protoc-gen-go \
  --proto_path=../../../:../../../github.com:. \
  -I . \
  --gogoslick_out=plugins=grpc:./pkg/protobuf \
  --js_out=import_style=commonjs,binary:./src \
  --js_service_out=./src \
  --ts_out=service=true:./src \
  ./proto/carml.org/inference/inference.proto
