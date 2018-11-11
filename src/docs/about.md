The current landscape of Machine Learning(ML) and Deep Learning(DL) is rife with non-uniform frameworks, models, and system stacks but lacks standard tools to facilitate the evaluation and measurement of model.
Due to the absence of such tools, the current practice for evaluating and comparing the benefits of proposed AI innovations (be it hardware or software) on end-to-end AI pipelines is both arduous and error prone --- stifling the adoption of the innovations.

We propose MLModelScope — a hardware/software agnostic platform to facilitate the evaluation, measurement, and introspection
of ML models within AI pipelines. MLModelScope aids application developers in discovering and experimenting with models, data scientists developers in replicating and evaluating for publishing models, and system architects in understanding the performance of AI workloads.

## INTRODUCTION

Machine Learning (ML) and Deep Learning (DL) models are being
introduced at a faster pace than researchers are able to analyze and
study them. Application builders — who may have limited ML
knowledge — struggle to discover and experiment with state-of-the-
art models within their application pipelines. Data scientists find it
difficult to reproduce, reuse, or gather unbiased comparison between
published models. And, finally, system developers often fail to keep
up with current trends, and lag behind in measuring and optimizing
frameworks, libraries, and hardware.

We propose MLModelScope, an open source(available on Github at [here](https://github.com/rai-project/mlmodelscope)), extensible, and
customizable platform to facilitate evaluation and measurements of
ML models within AI pipelines. It is a batteries-included platform
for evaluating and profiling ML models across datasets, frameworks,
and systems. These evaluations can be used to assess model accuracy and performance across different stacks. We provide an online
hub of continuously updated assets, evaluation results, and access
to hardware resources — allowing users to test and evaluate models without installing or configuring systems. It is framework and
hardware agnostic — with current support for Caffe, Caffe2,
CNTK, MXNet, Tensorflow, and TensorRT running on ARM, PowerPC, and X86 with CPU, GPU, and FPGA.
MLModelScopecan be used as an application with a web, command line, or API interface or can be compiled into a standalone library.

More specifically, MLModelScope:

- Requires no familiarity with the framework APIs, instead provides a common abstractions that allows programmers to use models.
- No coding is needed to publish models, and enables testing of custom software and hardware stacks.
- Lowers the cost and effort for performing model analysis and evaluation, making it easier for others to reproduce, evaluate, and
  analyze the model author’s claims.
- Makes it simple for system designers to profile and introspect the model and its interaction with the software and hardware stack.

