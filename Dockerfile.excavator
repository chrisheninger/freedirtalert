FROM ubuntu

RUN apt-get update
RUN apt-get -yqq install curl git build-essential wget

RUN git config --global user.email "heninger@gmail.com"
RUN git config --global user.name "🐳 🤖 🆓 🌎 🚨"

# install node
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get -yqq install nodejs

WORKDIR /src

# install yarn and yarn install
ARG secret
RUN git clone https://${secret}@github.com/chrisheninger/freedirtalert.com.git .
RUN npm install -g yarn
RUN yarn
