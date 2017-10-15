FROM ubuntu

RUN apt-get update
RUN apt-get -yqq install curl git build-essential wget

# install node
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get -yqq install nodejs

ADD . /src
WORKDIR /src

ARG GITHUB_USER
ARG GITHUB_TOKEN
# RUN git config --global user.name 🚜 🤖
# RUN git config --global user.email dirt-excavator@no-reply.github.com
# RUN git init
# RUN git remote add origin https://${GITHUB_USER}:${GITHUB_TOKEN}@github.com/chrisheninger/freedirtalert.com.git

RUN npm install -g yarn
RUN yarn
