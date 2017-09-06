# Installation

This section outlines how to install the CarML webserver. 
The steps to install CarML agents is similar.

## Installing from Binary

-   [ ] Todo: binary files are built for different platforms but are not deployed to any server accessible to users.

## Using Docker

Prebuilt Docker images are continously built from sources. The easiest way to run CarML is using [Docker compose](https://docs.docker.com/compose/). To use:

1. You need to download `docker-compose.yml`and have a `CarML` config file called `.carml_config.yml` under your home directory. An example config file is in `carml_config.yml.example`. You can move it to `~/.carml_config.yml`. 
2. Run `docker-compose run` (with docker daemon running). It might take a while to download all the docker images.
3. The website is accessible at `localhost:8088`.

## Installing from Source

### Install and Set Up Golang

Either use the [Go Version Manager](https://github.com/moovweb/gvm),
[Gimme](https://github.com/travis-ci/gimme), or 
navigate to the [Golang Site](https://golang.org/) and set it up manually.
It is preferred that you use the Go version manager.

### Install glide

Instructions on how to install Glide is available [their website](https://github.com/Masterminds/glide).

### Get Source Using the `rai-srcmanager`

First, install the `rai-srcmanager`

```.bash
go get -u -v github.com/rai-project/rai-srcmanager
```

Download the required repositories

```.bash
rai-srcmanager update
```

### Get Source Using Git

Navigate to where Go will expect to find the source for this repo. Make the path if it does not exist.

```.bash
mkdir -p $GOPATH/src/github.com/rai-project
cd $GOPATH/src/github.com/rai-project
```

Clone this repository there.

```.bash
git clone git@github.com:rai-project/carml.git
cd carml
```

## Download the Project Dependencies

Navigate to where Go will expect to find the source for this repo. Make the path if it does not exist.

```.bash
cd $GOPATH/src/github.com/rai-project/carml
glide install
```

The above will download all the project dependencies and place them into the `vendor/` directory.
You can then build a binary for `carml` using 

```.bash
go build
```

The above can be done for each agent CarML uses.
