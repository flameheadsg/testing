FROM node:8.11.1

WORKDIR /usr/src/testing

COPY ./ ./

RUN npm install

CMD ["/bin/bash"]
