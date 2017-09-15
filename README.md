[![Build Status](https://travis-ci.org/rai-project/carml.svg?branch=master)](https://travis-ci.org/rai-project/carml)
 [![Docker Stars](https://img.shields.io/docker/stars/carml/web.svg?style=plastic)](https://registry.hub.docker.com/v2/repositories/carml/web/stars/count/) [![Docker pulls](https://img.shields.io/docker/pulls/carml/web.svg?style=plastic)](https://registry.hub.docker.com/v2/repositories/carml/web/)
[![Docker Automated build](https://img.shields.io/docker/automated/carml/web.svg?style=plastic)](https://cloud.docker.com/app/carml/repository/docker/carml/web)
[![](https://images.microbadger.com/badges/image/carml/web:amd64.svg)](https://microbadger.com/images/carml/web:amd64 "Get your own image badge on microbadger.com")
[![](https://images.microbadger.com/badges/version/carml/web:amd64.svg)](https://microbadger.com/images/carml/web:amd64 "Get your own version badge on microbadger.com")


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## How to run CarML from the `docker-compose.yml`
1. You need to download `docker-compose.yml`and have a carml config file called `.carml_config.yml` under your home directory. An example config file is in `carml_config.yml.example`. You can rename it and use that. 
2. Do `docker-compose run` (with docker daemon running). It might take a while to download all the docker images.
3. The website is up on `localhost:8088`.

### Known Issues:
1. `upload` feature currently is not working
2. If any agent crashes, you can stop the containers by running `docker-compose stop` and restart.

### Acknowledgement:
This work is supported by [IBM-ILLINOIS Center for Cognitive Computing Systems Research (C3SR)](http://c3sr.hwu.crhc.illinois.edu/) - a research collaboration
as part of the [IBM Cognitive Horizon Network](http://research.ibm.com/cognitive-computing/cognitive-horizons-network/).

