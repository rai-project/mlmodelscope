[![Codacy Badge](https://api.codacy.com/project/badge/Grade/009d36fb286249bd904c4f3b489d53f5)](https://www.codacy.com/app/abduld/carml?utm_source=github.com&utm_medium=referral&utm_content=rai-project/carml&utm_campaign=badger)
[![Build Status](https://travis-ci.org/rai-project/carml.svg?branch=master)](https://travis-ci.org/rai-project/carml)
 [![Docker Stars](https://img.shields.io/docker/stars/carml/web.svg?style=plastic)](https://registry.hub.docker.com/v2/repositories/carml/web/stars/count/) [![Docker pulls](https://img.shields.io/docker/pulls/carml/web.svg?style=plastic)](https://registry.hub.docker.com/v2/repositories/carml/web/)
[![Docker Automated build](https://img.shields.io/docker/automated/carml/web.svg?style=plastic)](https://cloud.docker.com/app/carml/repository/docker/carml/web)
[![](https://images.microbadger.com/badges/image/carml/web:amd64.svg)](https://microbadger.com/images/carml/web:amd64 "Get your own image badge on microbadger.com")
[![](https://images.microbadger.com/badges/version/carml/web:amd64.svg)](https://microbadger.com/images/carml/web:amd64 "Get your own version badge on microbadger.com")

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## How to run CarML from the `docker-compose.yml`

1.  You need to download `docker-compose.yml`and have a carml config file called `.carml_config.yml` under your home directory. An example config file is in `carml_config.yml.example`. You can rename it and use that. 
2.  Do `docker-compose run` (with docker daemon running). It might take a while to download all the docker images.
3.  The website is up on `localhost:8088`.

The `docker-compose` file also sets up the following containers:

-   Jaeger (tracing) `http://<host-ip>:16686`
-   Consul (kv) `http://<host-ip>:8500`
-   Minio (store) `http://<host-ip>:9030`
-   Graylog (logging) `http://<host-ip>:9010`
-   Prometheus (metrics database) `http://<host-ip>:9090`
-   AlertManager (alerts management) `http://<host-ip>:9093`
-   Grafana (visualize metrics) `http://<host-ip>:6000`
-   NodeExporter (host metrics collector)
-   cAdvisor (containers metrics collector)

### Setup Grafana

Navigate to `http://<host-ip>:6000` and login with user **_admin_** password **_changeme_**. You can change the password from Grafana UI or 
 by modifying the environment variables.

From the Grafana menu, choose **_Data Sources_** and click on **_Add Data Source_**. 
Use the following values to add the Prometheus container as data source:

-   Name: Prometheus
-   Type: Prometheus
-   Url: <http://prometheus:9090>
-   Access: proxy

Now you can import the dashboard temples from the [grafana](https://github.com/stefanprodan/dockprom/tree/master/grafana) directory. 
From the Grafana menu, choose **_Dashboards_** and click on **_Import_**.

### Docker Host Dashboard

![Host](https://raw.githubusercontent.com/stefanprodan/dockprom/master/screens/Grafana_Docker_Host.png)

The Docker Host Dashboard shows key metrics for monitoring the resource usage of your server:

-   Server uptime, CPU idle percent, number of CPU cores, available memory, swap and storage
-   System load average graph, running and blocked by IO processes graph, interrupts graph
-   CPU usage graph by mode (guest, idle, iowait, irq, nice, softirq, steal, system, user)
-   Memory usage graph by distribution (used, free, buffers, cached)
-   IO usage graph (read Bps, read Bps and IO time)
-   Network usage graph by device (inbound Bps, Outbound Bps)
-   Swap usage and activity graphs

### Docker Containers Dashboard

![Containers](https://raw.githubusercontent.com/stefanprodan/dockprom/master/screens/Grafana_Docker_Containers.png)

The Docker Containers Dashboard shows key metrics for monitoring running containers:

-   Total containers CPU load, memory and storage usage
-   Running containers graph, system load graph, IO usage graph
-   Container CPU usage graph
-   Container memory usage graph
-   Container cached memory usage graph
-   Container network inbound usage graph
-   Container network outbound usage graph

Note that this dashboard doesn't show the containers that are part of the monitoring stack.

### Monitor Services Dashboard

![Monitor Services](https://raw.githubusercontent.com/stefanprodan/dockprom/master/screens/Grafana_Prometheus.png)

The Monitor Services Dashboard shows key metrics for monitoring the containers that make up the monitoring stack:

-   Prometheus container uptime, monitoring stack total memory usage, Prometheus local storage memory chunks and series
-   Container CPU usage graph
-   Container memory usage graph
-   Prometheus chunks to persist and persistence urgency graphs
-   Prometheus chunks ops and checkpoint duration graphs
-   Prometheus samples ingested rate, target scrapes and scrape duration graphs
-   Prometheus HTTP requests graph
-   Prometheus alerts graph

Prometheus memory usage can be controlled by adjusting the local storage memory chunks.
You can modify the max chunks value in [docker-compose.yml](https://github.com/stefanprodan/dockprom/blob/master/docker-compose.yml). 
I've set the `storage.local.memory-chunks` value to 100000, if you monitor 10 containers, then Prometheus will use around 1GB of RAM.

## Notes:

If any agent crashes, you can stop the containers by running `docker-compose stop` and restart.

## Acknowledgement:

This work is supported by [IBM-ILLINOIS Center for Cognitive Computing Systems Research (C3SR)](http://c3sr.hwu.crhc.illinois.edu/) - a research collaboration
as part of the [IBM Cognitive Horizon Network](http://research.ibm.com/cognitive-computing/cognitive-horizons-network/).
