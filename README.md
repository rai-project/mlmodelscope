[![Codacy Badge](https://api.codacy.com/project/badge/Grade/009d36fb286249bd904c4f3b489d53f5)](https://www.codacy.com/app/abduld/carml?utm_source=github.com&utm_medium=referral&utm_content=rai-project/carml&utm_campaign=badger)
[![Build Status](https://travis-ci.org/rai-project/carml.svg?branch=master)](https://travis-ci.org/rai-project/carml)
 [![Docker Stars](https://img.shields.io/docker/stars/carml/web.svg?style=plastic)](https://registry.hub.docker.com/v2/repositories/carml/web/stars/count/) [![Docker pulls](https://img.shields.io/docker/pulls/carml/web.svg?style=plastic)](https://registry.hub.docker.com/v2/repositories/carml/web/)
[![Docker Automated build](https://img.shields.io/docker/automated/carml/web.svg?style=plastic)](https://cloud.docker.com/app/carml/repository/docker/carml/web)
[![](https://images.microbadger.com/badges/image/carml/web:amd64.svg)](https://microbadger.com/images/carml/web:amd64 "Get your own image badge on microbadger.com")
[![](https://images.microbadger.com/badges/version/carml/web:amd64.svg)](https://microbadger.com/images/carml/web:amd64 "Get your own version badge on microbadger.com")

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# [Documentation](https://rai-project.github.io/carml/)

## [Installation Manual](https://rai-project.github.io/carml/#/installation)


# Introduction

The recent wide spread of different open sourced machine learning (ML) software, including deep-learning (DL) frameworks, has inspired 
a great deal of innovation among different users, ranging from framework developers (who develop ML/DL software and frameworks), 
model developers (who develop ML/DL models), model users (who consumes the models for either model training or model inferencing), 
and system builders (who develop underlying hardware systems and infrastructures to support the computation of ML/DL workloads). 
A central task for all of these users experience (though some may play multiple roles) involves (1) instantiating the right 
hardware system, (2) installing the right ML/DL software packages with dependencies, (3) installing the right ML/DL models and 
related dataset, (4) configuring the system, software, and models to work together to run the expiriments, and (5) collecting and 
analyzing experiment results for the needed use case.

The current process of experimenting with different machine learning (ML) packages and deep learning (DL) frameworks as well as their corresponding ML/DL models is, however, daunting. 
Most likely, many pages of documentation (if available) must be followed to install one ML and/or DL framework, followed by a process to download and use a particular MD and/or DL model. Not to mention the complexity involved with different hardware system configurations and their interplay with any users preexisting system software installation and their complex dependencies.

The CarML (Cognitive ARtifacts for Machine Learning) is a platform allowing people to easily deploy and experiment ML/DL frameworks and models. It allows ML/DL software developers to deploy their software packages, ML model developers to publish and evaluate their models, 
users to experiment with different models and frameworks, all through a web user interface or a REST api, and system architects to capture system resource usage to inform future system and hardware configuration.

From a user's point of view, CarML simplifies this by offering a repository (also called a model zoo) of different ML models that can be readily used.
From a ML developer's point of view, CarML offers exposure of the developed model as well as informs the model developer of how the model behaves on real workloads.



## Goals

The aim is to bridge the gap between machine learning developer and user. This is done by:

1.  Allowing users to experiment with machine learning models through a simple and common interface (this can be a web interface of API endpoints)
2.  Allowing users to use machine learning models that utilize either cutting edge and/or esoteric frameworks (Tensorflow, Caffe, etc...)
3.  Making it easier for machine learning developers to advertise and deploy their models, gathering extra data (such as failure points) and calculating realistic accuracy results
4.  Informing the machine learning framework developers on what layers are common and where the difficulties of using and deploying the models are
5.  Advising the hardware vendors on the choke points (from hardware resources perspective) that are encountered when running machine learning work load

CarML, as it currently stands, is a deep learning inference paradigm allowing developers to deploy their deep learning framework and models --- making them available through a common interface. 
Information about the [architecture](architecture.md) along with the [user interface](webui.md) are discussed in their corresponding sections.


