# Backend

CarML is a distributed application with backend borrowing many components from RAI.



## Download Manager


## Grpc

CarML uses [Grpc](http://www.grpc.io/) along with [Protobuf](https://developers.google.com/protocol-buffers/) as the communication protocol.


### Configuration

- [ ] TODO This is currently hardcoded

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

| Calls                 |   Consul   |  Etcd  |  Zookeeper  |  BoltDB  |
|-----------------------|:----------:|:------:|:-----------:|:--------:|
| Put                   |     X      |   X    |      X      |    X     |
| Get                   |     X      |   X    |      X      |    X     |
| Delete                |     X      |   X    |      X      |    X     |
| Exists                |     X      |   X    |      X      |    X     |
| Watch                 |     X      |   X    |      X      |          |
| WatchTree             |     X      |   X    |      X      |          |
| NewLock (Lock/Unlock) |     X      |   X    |      X      |          |
| List                  |     X      |   X    |      X      |    X     |
| DeleteTree            |     X      |   X    |      X      |    X     |
| AtomicPut             |     X      |   X    |      X      |    X     |
| Close                 |     X      |   X    |      X      |    X     |

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

- [ ] Todo: Look at how [etcd performs grpc naming](https://coreos.com/etcd/docs/latest/dev-guide/grpc_naming.html)

### Todo

- [ ] The 

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
