FROM ubuntu

RUN apt-get update
RUN apt-get -yqq install curl git build-essential wget

# install node
RUN curl -sL https://deb.nodesource.com/setup_6.x | bash -
RUN apt-get -yqq install nodejs

WORKDIR /src

ARG GITHUB_USER
ARG GITHUB_TOKEN
RUN git clone https://${GITHUB_USER}:${GITHUB_TOKEN}@github.com/chrisheninger/freedirtalert.com.git .
RUN npm install -g yarn
RUN yarn

CMD [ "yarn", "run", "excavator" ]
