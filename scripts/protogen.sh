#!/bin/bash

mkdir -p ./pkg/protobuf
mkdir -p ./src/proto/carml.org/inference

protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  --plugin=protoc-gen-js=./node_modules/.bin/protoc-gen-js_service \
  --plugin=protoc-gen-go=${GOPATH}/bin/protoc-gen-go \
  --proto_path=../../../:../../../github.com:. \
  --gogoslick_out=plugins=grpc:./pkg/protobuf \
  --js_out=import_style=closure,library=inference_pb,binary:./src/proto/carml.org/inference \
  --js_service_out=./src \
  --ts_out=service=true:./src \
  ./proto/carml.org/inference/inference.proto
