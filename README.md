[![Codacy Badge](https://api.codacy.com/project/badge/Grade/009d36fb286249bd904c4f3b489d53f5)](https://www.codacy.com/app/abduld/mlmodelscope?utm_source=github.com&utm_medium=referral&utm_content=rai-project/carml&utm_campaign=badger)
[![Build Status](https://travis-ci.org/rai-project/mlmodelscope.svg?branch=master)](https://travis-ci.org/rai-project/mlmodelscope)
 [![Docker Stars](https://img.shields.io/docker/stars/carml/web.svg?style=plastic)](https://registry.hub.docker.com/v2/repositories/carml/web/stars/count/) [![Docker pulls](https://img.shields.io/docker/pulls/carml/web.svg?style=plastic)](https://registry.hub.docker.com/v2/repositories/carml/web/)
[![Docker Automated build](https://img.shields.io/docker/automated/carml/web.svg?style=plastic)](https://cloud.docker.com/app/carml/repository/docker/carml/web)
[![](https://images.microbadger.com/badges/image/carml/web:amd64.svg)](https://microbadger.com/images/carml/web:amd64 "Get your own image badge on microbadger.com")
[![](https://images.microbadger.com/badges/version/carml/web:amd64.svg)](https://microbadger.com/images/carml/web:amd64 "Get your own version badge on microbadger.com")


# [Documentation](https://docs.mlmodelscope.org/)



The current landscape of Machine Learning (ML) and Deep Learning (DL) is rife with non-uniform models, frameworks, and system stacks but lacks standard tools to evaluate and profile models or systems.
Due to the absence of such tools, the current practice for evaluating and comparing the benefits of proposed AI innovations (be it hardware or software) on end-to-end AI pipelines is both arduous and error prone --- stifling the adoption of the innovations.

MLModelScope is a hardware/software agnostic, extensible and customizable platform for evaluating and profiling ML models across datasets/frameworks/hardware, and within AI application pipelines.
MLModelScope lowers the cost and effort for performing model evaluation and profiling, making it easier for others to reproduce, evaluate, and analyze acurracy or performance claims of models and systems.

It is designed to aid in:

1. reproducing and comparing with published models, and designing models with performance and deployment in mind,
2. understanding the model performance (within realworld AI workflows) and its interaction with all levels of the hardware/software stack
3. discovering models, frameworks and hardware that are applicable to users' datasets.


To achieve this, MLModelScope:

- Provides a consistent evaluation, aggregation, and reporting system by defining
  - techniques to specify and provision workflows with HW/SW stacks
  - abstractions for evaluation and profiling using different frameworks
  - data consumption for evaluation outputs
- Enables profiling of experiments throughout the entire pipeline and at different abstraction levels (application, model, framework, layer, library and hardware, as shown on the right)
- Is framework and hardware agnostic - with current support for TensorFlow, MXNet, TensorRT, Caffe, Caffe2, CNTK running on X86, PowerPC, and ARM CPU with GPU and FPGA
- Is extensible and customizable - allowing users to extend MLModelScope by adding models, frameworks, or library and system profilers, and use
- Can run experiments on separate machines, and behind firewall (does not exposing model weights or machine specification)
- Allows parallel evaluation (multiple instantiations of the same experiment set-up across systems)
- Specifies model and framework resources as asset files which can be added easily, even at runtime


MLModelScope can be used as an application with a command line, API or web interface, or can be compiled into a standalone library. We also provide an online hub of continuously updated assets, evaluation results, and access to hardware resources — allowing users to discover and evaluate models without installing or configuring systems.
