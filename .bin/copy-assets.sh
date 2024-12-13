#!/bin/bash

echo "removing static files"
rm -rf static
rm -rfv static
rm -rfv static/*

mkdir -p static
mkdir -p static/css
mkdir -p static/js
mkdir -p static/js/vendor
mkdir -p static/webfonts
mkdir -p static/images


cp -rvf src/images/* static/images
cp -rvf src/css/* static/css
