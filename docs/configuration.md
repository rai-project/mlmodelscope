# Configuration

The following configuration file can be placed in `$HOME/.carml_config.yml` or can be specified via the `--config="path"` option.

```.yaml
app:
  name: carml
  debug: true
  verbose: true
  tempdir: /tmp/carml
registry:
  provider: etcd
  endpoints:
    - https://etcd1.website.com:23070
    - https://etcd1.website.com:23070
  username: root
  password: PASSWORD
  timeout: 10s
  header_timeout_per_request: 2m
  auto_sync: false
  certificate: BASE64XXXXXXXX
tracer:
  enabled: true
  provider: zipkin
  endpoints:
    - trace.website.com:9411
logger:
  hooks:
    - syslog
  elastic_search:
    username: admin
    password: PASSWORD
    endpoints:
      - elastic_cache.website.com:28124
    ca_cert: BASE64XXXXXXXX
```
