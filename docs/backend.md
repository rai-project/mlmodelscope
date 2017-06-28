# Backend Components

CarML is a distributed application with backend borrowing many components from RAI.
This sections describes the components used within the project.

?> As with **RAI** CarML's components each have their own repository which is located on [the github website](http://github.com/rai-project).

## Upload Manager

Files uploaded to CarML are currently managed by [tusd](github.com/tus/tusd). 
Tusd is an implementation of the [tus](http://tus.io/) protocol which offers resumable file uploads.

?> Tusd supports different upload targets including: **file** and **s3**.

### Usage

The upload manager is mainly used to handle uploads done by the user through the web interface. 
As such, it's primarily a web api endpoints (currently set to `/api/upload`). 

The upload [components](https://github.com/rai-project/carml/blob/master/src/components/UploadArea/index.js) (CarML uses [uppy](https://uppy.io/)) interfaces with this api endpoint.

### Configuration

!> The upload manager currently takes no configuration. The following is an example of the proposed configuration fields.

```.yaml
uploadmanager:
  - target: default # defaults to config.App.TempDir + "/" + "uploads"
  - expiration: 5m # 5 minutes
  - purge: 10m # 10 minutes
  - unarchive: true
```

The target can also be of the form `s3://website.com/bucket_name`. 
In this case the s3 upload target for `tusd` is used.

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

### Configuration

!> The download manager currently takes no configuration. The following is an example of the proposed configuration fields.

```.yaml
downloadmanager:
  - expiration: 5m # 5 minutes
  - purge: 10m # 10 minutes
  - unarchive: true
```

### Usage

The following will download the `test.tar.gz` file.
If no error occurs during the download then the file is un-archived into the `config.App.TempDir` directory.
If no errors occur, `trgt` is the directory of the un-archived file.

```.go
import downloadmanager "github.com/rai-project/downloadmanager"
... 
trgt, err := downloadmanager.Download("http://www.example.org/test.tar.gz", config.App.TempDir)
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

### Load Balancing

!> This is not implemented

### Hooks

### Code Generation

## File Store

For files that are to be stored 

!> Since the upload manager is targets user uploads (which tend to be short-lived) it does not interact with the file store. If we do end up supporting user uploaded models and/or datasets, then we'd have to interact the upload manager with the file storage to offer more long term and distributed storage.

-   [ ] TODO: the S3 credententials should be shared with the download and upload managers.

## Key/Value (Registry) Store

The key/value store offers a simple interface to interact with distributed key/value servers.
The supported backends are:

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

!> BoltDB is not a distributed key/value store.

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

### Todo

-   [ ] Todo: Look at how [etcd performs grpc naming](https://coreos.com/etcd/docs/latest/dev-guide/grpc_naming.html)
-   [ ] Todo: The key/value store can be used to resolve the agent to dial for Grpc requests as well as offer a form of load balancing.

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
