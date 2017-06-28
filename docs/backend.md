# Backend Components

CarML is a distributed application with backend borrowing many components from RAI.
This sections describes the components used within the project.

!> As with **RAI** CarML's components each have their own repository which is located on [the github website](http://github.com/rai-project).

## Download Manager

The download manager handles file downloads from a variety of sources (HTTP, FTP, S3, etc...).

The download manager utilizes the [go-getter](https://github.com/hashicorp/go-getter) package which has support to the following protocols:

-   Local files
-   Git
-   Mercurial
-   HTTP
-   Amazon S3

If the downloaded file is an archive, then the download manager will un-archive the file for you.
The download manager supports the following archive formats:

-   `tar.gz` and `tgz`
-   `tar.bz2` and `tbz2`
-   `zip`
-   `gz`
-   `bz2`

The package exports the following main function:

```.go
Download(url, targetDir string) (string, error)
```

The download manager caches with a default expiry of 5 minutes.
Downloads within the cache are not re-downloaded.
TODO: Should be an option.

-   [ ] TODO: options and configuration need to be added to the download manager.
-   [ ] TODO: Make the behavior of auto-un-archiving be an option, since in some cases you may wish not to un-archive the downloaded file. 

### Examples

The following will download the `test.tar.gz` file.
If no error occurs during the download then the file is un-archived into the `/tmp` directory.
If no errors occur, `trgt` is the directory of the un-archived file.

```.go
trgt, err := downloadmanager.Download("http://www.example.org/test.tar.gz", "/tmp")
```

## Grpc

CarML uses [Grpc](http://www.grpc.io/) along with [Protobuf](https://developers.google.com/protocol-buffers/) as the communication protocol.

### Configuration

-   [ ] TODO This is currently hardcoded

```.yaml
grpc:
  client:
    middleware:
      - recover
      - logging
      - tracing
  server:
    middleware:
      - recover
      - logging
      - tracing
      - max_message_size: 500mb
```

## Store

## Key/Value Store

### Supported Backends

| Calls                 | Consul | Etcd | Zookeeper | BoltDB |
| --------------------- | :----: | :--: | :-------: | :----: |
| Put                   |    X   |   X  |     X     |    X   |
| Get                   |    X   |   X  |     X     |    X   |
| Delete                |    X   |   X  |     X     |    X   |
| Exists                |    X   |   X  |     X     |    X   |
| Watch                 |    X   |   X  |     X     |        |
| WatchTree             |    X   |   X  |     X     |        |
| NewLock (Lock/Unlock) |    X   |   X  |     X     |        |
| List                  |    X   |   X  |     X     |    X   |
| DeleteTree            |    X   |   X  |     X     |    X   |
| AtomicPut             |    X   |   X  |     X     |    X   |
| Close                 |    X   |   X  |     X     |    X   |

### Configuration

```.yaml
registry:
  provider: etcd
  endpoints:
    - 127.0.0.1
  username: root
  password: foo
  timeout: 5s
  certificate: XXX
  bucket: name_of_bucket
  header_timeout_per_request: 1m
  auto_sync: true
```

### Keys

-   [ ] Todo: Look at how [etcd performs grpc naming](https://coreos.com/etcd/docs/latest/dev-guide/grpc_naming.html)

### Todo

-   [ ] The 

## Health

### Configuration

```.yaml
health:
  endpoints:
    - example.org
```

## Logger

### Configuration

```.yaml
logger:
  hooks:
    - syslog
    - elastic_search
  elastic_search:
    username: admin
    password: PASSWORD
    endpoints:
      - elastic_cache.website.com:28124
    ca_cert: BASE64XXXXXXXX
```

## Tracer

### Configuration

```.yaml
tracer:
  enabled: true
  provider: zipkin
  endpoints:
    - trace.website.com:9411
```
