# Installation

This section outlines how to install CarML. 

## Carml Configuration

You must have a `CarML` config file called `.carml_config.yml` under your home directory. An example config file `carml_config.yml.example` is in [github.com/rai-project/carml](https://github.com/rai-project/carml) . You can move it to `~/.carml_config.yml`. Then you can install CarML either through docker or from source.

## Using Docker (to be updated)

Prebuilt Docker images are continously built from sources. The easiest way to run CarML is using [Docker compose](https://docs.docker.com/compose/). To use:

1. You need to download `docker-compose.yml` and have a `CarML` config file called `.carml_config.yml` under your home directory. An example config file is in `carml_config.yml.example`. You can move it to `~/.carml_config.yml`. 
2. Run `docker-compose run` (with docker daemon running). It might take a while to download all the docker images.
3. The website is accessible at http://localhost:8088.

## Installing from Source

RAI is developed using [golang](https://golang.org/) which needs to be installed for code to be compiled from source.
You can install Golang either through [Go Version Manager](https://github.com/moovweb/gvm)(recommended) or from the instructions on the [golang site](https://golang.org/). We recommend the Go Version Manager.


The following are instruction on how to install Go 1.8 through Go version manager.
Go version 1.8+ is required to compile RAI.

Download the [GVM](https://github.com/moovweb/gvm) using

```
bash < <(curl -s -S -L https://raw.githubusercontent.com/moovweb/gvm/master/binscripts/gvm-installer)
```

Add the following line to your `.bashrc`(or `.zshrc` if using zsh) to set up the GVM environment.
This is sometimes done for you by default.

```
[[ -s "$HOME/.gvm/scripts/gvm" ]] && source "$HOME/.gvm/scripts/gvm"
```

You can then install the Go 1.8 binary and set it as the default

```
gvm install go1.8 -B
gvm use go1.8 --default
```

`gvm` will setup both your `$GOPATH` and `$GOROOT` and you can validate that the installation completed by invoking

```sh
$ go env
GOARCH="amd64"
GOBIN=""
GOEXE=""
GOHOSTARCH="amd64"
GOHOSTOS="linux"
GOOS="linux"
GOPATH="/home/abduld/.gvm/pkgsets/go1.8/global"
GORACE=""
GOROOT="/home/abduld/.gvm/gos/go1.8"
GOTOOLDIR="/home/abduld/.gvm/gos/go1.8/pkg/tool/linux_amd64"
GCCGO="gccgo"
CC="gcc"
GOGCCFLAGS="-fPIC -m64 -pthread -fmessage-length=0 -fdebug-prefix-map=/tmp/go-build917072201=/tmp/go-build -gno-record-gcc-switches"
CXX="g++"
CGO_ENABLED="1"
PKG_CONFIG="pkg-config"
CGO_CFLAGS="-g -O2"
CGO_CPPFLAGS=""
CGO_CXXFLAGS="-g -O2"
CGO_FFLAGS="-g -O2"
CGO_LDFLAGS="-g -O2"
```

### Installing using `rai-srcmanager`


First, install the `rai-srcmanager` by

```sh
go get -u -v github.com/rai-project/rai-srcmanager
```

Download the required public repositories by

```sh
rai-srcmanager update --public
```

Now all the relevant repositories should now be in `$GOPATH/src/github.com/rai-project`.

### Installing the Backend

This section outlines how to install the CarML backend. 

> **Note**: Whenever you run into the error `... cannot find package "package_name" in any of: ...`, install the missing pacakge `pack` then you may have to install the missing package using `go get -v package_name`

#### Installing Docker

[Install Docker](https://docs.docker.com/engine/installation/). An easy way is using

```
curl -fsSL get.docker.com -o get-docker.sh | sudo sh
sudo usermod -aG docker $USER
```

#### Starting Tracer Server

Start [jaeger](http://jaeger.readthedocs.io/en/latest/getting_started/) on a x86(e.g. intel) machine by 

```
docker run -d -e COLLECTOR_ZIPKIN_HTTP_PORT=9411 -p5775:5775/udp -p6831:6831/udp -p6832:6832/udp \
  -p5778:5778 -p16686:16686 -p14268:14268 -p9411:9411 jaegertracing/all-in-one:latest
```

Start [jaeger](http://jaeger.readthedocs.io/en/latest/getting_started/) on a ppc64le(e.g. minsky) machine by 

```
docker run -d -e COLLECTOR_ZIPKIN_HTTP_PORT=9411 -p5775:5775/udp -p6831:6831/udp -p6832:6832/udp \
  -p5778:5778 -p16686:16686 -p14268:14268 -p9411:9411 carml/jaeger:ppc64le-latest
```

The trace server runs on http://localhost:16686

#### Starting Registry Server

Start [consul](https://hub.docker.com/_/consul/) on a x86 machine(e.g. intel) by 

```
docker run -p 8500:8500 -p 8600:8600 -d consul
```

Start [consul](https://hub.docker.com/_/consul/) on a ppc64le machine(e.g. minsky) by 

```
docker run -p 8500:8500 -p 8600:8600 -d carml/consul:ppc64le-latest
```

The registry server runs on http://localhost:8500


#### Starting Database Server

Start [mongodb](https://hub.docker.com/_/mongo/) on a x86 machine(e.g. intel) by

```
docker run -p 27017:27017 --restart always -d mongo:3.0
```

You can also mount the database volume to a local directory using

```
docker run -p 27017:27017 --restart always -d  -v $HOME/data/carml/mongo:/data/db mongo:3.0
```

On PPC64LE (e.g. Minsky), use the `c3sr/mongodb:latest` image inplace of `mongo:3.0`

```
docker run -p 27017:27017 --restart always -d  -v $HOME/data/carml/mongo:/data/db c3sr/mongodb:latest
```

The database server runs on localhost:27017


#### Installing Jaeger Client Package

The `github.com/uber/jaeger-client-go` package requires a specific version of thrift to be used.
The following installs the specific thirft version. You need to install glide for that.
Instructions on how to install Glide is available [their website](https://github.com/Masterminds/glide) using `go get github.com/Masterminds/glide`.

```
go get -v github.com/uber/jaeger-client-go
cd $GOPATH/src/github.com/uber/jaeger-client-go
glide install && cd vendor && rm -rf golang.org/ go.uber.org/ github.com/[b-z]*
```

#### Installing the MXNet

You can follow the instructions on [Installing MXNet](https://mxnet.incubator.apache.org/get_started/install.html) to install MXNet to your preferred location(e.g. `/opt/mxnet`). You can refer to the build scripts under [go-mxnet-predictor/scirpts](https://github.com/rai-project/go-mxnet-predictor/tree/master/scripts) for configuration and dependences.

#### Installing the MXNet Go Binding

The MXNet Go binding is in [go-mxnet-predictor](https://github.com/rai-project/go-mxnet-predictor). It assumes MXNet is installed at `/opt/mxnet`. You can modify the library location in `$GOPATH/src/github.com/rai-project/go-mxnet-predictor/mxnet/lib.go` and or use the CGO_CFLAGS, CGO_CPPFLAGS, CGO_CXXFLAGS, CGO_FFLAGS and CGO_LDFLAGS  environment flags (prefered). 

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



## Increasing Max Open File Limit

Edit `/etc/security/limits.conf` and add 

```
*         hard    nofile      500000
*         soft    nofile      500000
root      hard    nofile      500000
root      soft    nofile      500000
```

You should now reboot the computer. You can check to see if the new limits are observed by running

```
ulimit -Sn
```

See [1](https://www.tecmint.com/increase-set-open-file-limits-in-linux/) or [2](https://cs.uwaterloo.ca/~brecht/servers/openfiles.html) for details.
