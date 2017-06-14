#!/bin/sh
set -ex
wget https://github.com/google/protobuf/releases/download/v$PROTOBUF_VER/protoc-$PROTOBUF_VER-linux-x86_64.zip
mkdir -p $HOME/protobuf/
unzip protoc-$PROTOBUF_VER-linux-x86_64.zip -o -d $HOME/protobuf/
