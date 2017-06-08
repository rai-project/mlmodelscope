#!/bin/bash

mkdir -p ./pkg/protobuf
mkdir -p ./src/proto

protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  --plugin=protoc-gen-js_service=./node_modules/.bin/protoc-gen-js_service \
  --plugin=protoc-gen-go=${GOPATH}/bin/protoc-gen-go \
  --proto_path=../../..:../:. \
  --gogoslick_out=plugins=grpc:./pkg/protobuf \
  --js_out=import_style=commonjs,binary:./src/proto \
  --js_service_out=./src/proto \
  --ts_out=service=true:./src/proto \
  ../../../github.com/gogo/protobuf/gogoproto/gogo.proto \
  ../../../github.com/rai-project/carml/proto/carml.org/inference/inference.proto \
  ../../../github.com/rai-project/dlframework/mxnet/mxnet.proto

echo "**/*js" >> ./src/proto/.eslintignore
