# FROM define base docker image
FROM alpine:3

# RUN will be executed only during the build time
RUN mkdir docker-starter
RUN echo "Hello Docker!" > "docker-starter/README.md"

# CMD will be run in the container stage
CMD cat "docker-starter/README.md"


