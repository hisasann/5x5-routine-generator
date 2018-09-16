# specify the node base image with your desired version node:<version>
FROM node:8

MAINTAINER hisasann

# install dependency package
RUN apt-get update \
 && apt-get install -y \
    apt-transport-https \
    libssl-dev \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

# install yarn
# https://yarnpkg.com/en/docs/install#linux-tab
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
 && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
 && apt-get update \
 && apt-get install -y \
    yarn \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

# Bundle app source
ADD ./app /src/app/
ADD ./tests /src/tests/
ADD ./types /src/types/

# Install app dependencies
COPY package.json /src/package.json
COPY yarn.lock /src/yarn.lock
COPY tsconfig.base.json /src/tsconfig.base.json
COPY tsconfig.build.json /src/tsconfig.build.json
COPY tsconfig.json /src/tsconfig.json
COPY webpack.config.js /src/webpack.config.js
COPY .babelrc /src/.babelrc
COPY ./dist/index.html /src/dist/index.html
COPY index.js /src/index.js

RUN cd /src; yarn install

EXPOSE 3000

WORKDIR /src

CMD ["npm", "run", "watch"]
