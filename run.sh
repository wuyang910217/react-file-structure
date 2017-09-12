#!/bin/sh

docker build -t="wuyang/react" .

docker rm -f react

docker run -d -p 3400:3400 --restart=always --name react wuyang/react