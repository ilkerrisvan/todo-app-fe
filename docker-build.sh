#!/usr/bin/env bash

IMAGE_VERSION=1.0

docker build . \
  -f ./Dockerfile \
  -t modanisa-case:dev
