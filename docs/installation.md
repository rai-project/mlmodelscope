# Installation

This section outlines how to install CarML. 

## Carml Configuration

You must have a `CarML` config file called `.carml_config.yml` under your home directory. An example config file `carml_config.yml.example` is in [github.com/rai-project/carml](https://github.com/rai-project/carml) . You can move it to `~/.carml_config.yml`. Then you can install CarML either through docker or from source.

## Using Docker (to be updated)

Prebuilt Docker images are continously built from sources. The easiest way to run CarML is using [Docker compose](https://docs.docker.com/compose/). To use:

1. You need to download `docker-compose.yml` and have a `CarML` config file called `.carml_config.yml` under your home directory. An example config file is in `carml_config.yml.example`. You can move it to `~/.carml_config.yml`. 
2. Run `docker-compose run` (with docker daemon running). It might take a while to download all the docker images.
3. The website is accessible at `localhost:8088`.

## Installing from Source

### Install and Set Up Golang (version >= 1.8)

Either use the [Go Version Manager](https://github.com/moovweb/gvm) or 
navigate to the [Golang Site](https://golang.org/) and set it up manually.
Below probvides the instruction to install Go 1.8 through Go version manager.

First install [GVM](https://github.com/moovweb/gvm) by

```
bash < <(curl -s -S -L https://raw.githubusercontent.com/moovweb/gvm/master/binscripts/gvm-installer)
```

Add the following line to your `.bashrc`(or `.zshrc` if using zsh) to set up the GVM environment.

```
[[ -s "$HOME/.gvm/scripts/gvm" ]] && source "$HOME/.gvm/scripts/gvm"
```

Then install Go 1.8 and set it as the default by 

```
gvm install go1.8 -B
gvm use go1.8 --default
```

### Get Sources Using the `rai-srcmanager`

First, install the `rai-srcmanager` by

```.bash
go get -u -v github.com/rai-project/rai-srcmanager
```

Download the required repositories by

```.bash
rai-srcmanager update --public
```

Now all the relevant repositories are under `$GOPATH/src/github.com/rai-project`.

### Install Backend

This section outlines how to install the CarML backend. 

#### Note

Whenever you run into `... cannot find package "pack" in any of: ...`, install the missing pacakge `pack` by

```
go get -v pack
```

#### Installing Docker

[Install Docker](https://docs.docker.com/engine/installation/)

#### Starting Tracer Server

Start [jaeger](http://jaeger.readthedocs.io/en/latest/getting_started/) by 

```
docker run -d -e COLLECTOR_ZIPKIN_HTTP_PORT=9411 -p5775:5775/udp -p6831:6831/udp -p6832:6832/udp \
  -p5778:5778 -p16686:16686 -p14268:14268 -p9411:9411 jaegertracing/all-in-one:latest
```

The trace server runs on http://localhost:16686

#### Starting Registry Server

Start [consul](https://hub.docker.com/_/consul/) by 

```
docker run -p 8500:8500 -p 8600:8600 -d consul
```
The registry server runs on http://localhost:16686

#### Installing Jaeger Client Package

The `github.com/uber/jaeger-client-go` package requires a specific version of thrift to be used.
The following installs the specific thirft version. You need to install glide for that.
Instructions on how to install Glide is available [their website](https://github.com/Masterminds/glide).

```
go get -v github.com/uber/jaeger-client-go
cd $GOPATH/src/github.com/uber/jaeger-client-go
glide install && cd vendor && rm -rf golang.org/ go.uber.org/ github.com/[b-z]*
```

#### Installing the MXNet

You can follow the instructions on [Installing MXNet](https://mxnet.incubator.apache.org/get_started/install.html) to install MXNet to your preferred location(e.g. `/opt/mxnet`). You can refer to the build scripts under [go-mxnet-predictor/scirpts](https://github.com/rai-project/go-mxnet-predictor/tree/master/scripts) for configuration and dependences.

#### Installing the MXNet Go Binding

The MXNet Go binding is in [go-mxnet-predictor](https://github.com/rai-project/go-mxnet-predictor). It assumes MXNet is installed at `/opt/mxnet`. You can modify the library location in `$GOPATH/src/github.com/rai-project/go-mxnet-predictor/mxnet/lib.go`. 

Install the dependences by

```
cd $GOPATH/src/github.com/rai-project/go-mxnet-predictor
go get -u -v ./...
```

Check if the binding is correctly installed by doing a `go build` in the  `$GOPATH/src/github.com/rai-project/go-mxnet-predictor/mxnet` directory. And run the single image prediction by

```
cd $GOPATH/src/github.com/rai-project/go-mxnet-predictor/examples/single
go run single.go
```

#### Starting MXNet Agent

The CarML MXNet agent is in [mxnet](https://github.com/rai-project/mxnet).

Install the dependences by

```
cd $GOPATH/src/github.com/rai-project/mxnet
go get -u -v ./...
```

Start the MXNet agent by 

```
cd $GOPATH/src/github.com/rai-project/mxnet/mxnet-agent/
go run main.go -d -l -v
```

### Install Webserver

This section outlines how to install the CarML webserver. 

The carml webserver is in [carml](https://github.com/rai-project/carml).

Install the dependences by

```
cd $GOPATH/src/github.com/rai-project/carml
go get -u -v ./...
```

Start the webserver by

```
cd $GOPATH/src/github.com/rai-project/carml
go run main.go web -d -v
```
The webserver runs on http://localhost:8088

<!-- ### Get Sources Using Git

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

## Install glide

Instructions on how to install Glide is available [their website](https://github.com/Masterminds/glide).


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

The above can be done for each agent CarML uses. -->
