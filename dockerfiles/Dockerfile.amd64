FROM carml/go:amd64-cpu
MAINTAINER Abdul Dakkak <dakkak@illinois.edu>

LABEL org.carml.version=0.3.9

WORKDIR $GOPATH/src/github.com/rai-project/carml
RUN git clone --depth=1 --branch=master https://github.com/rai-project/carml.git . && \
    glide install && \
    go get golang.org/x/crypto/acme/autocert && \
    go build && \
    mv carml /usr/bin && \
    rm -fr $GOPATH

ENV PORT 80
ENTRYPOINT ["carml", "web", "--debug", "--verbose"]
EXPOSE 80
