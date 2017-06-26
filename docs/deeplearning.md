# Deeplearning

## Framework

### Specification

A framework is speficied as a name, version, along with names of the containers the container can run in. 
This information is stored within a "manifest" file.
The following shows an example of a manifest file for **mxnet**

```yaml
name: MXNet # name of the framework
version: 0.1 # framework version
container: # containers used to perform model prediction
           # multiple platforms can be specified
  amd64:   # if unspecified, then the default container for the framework is used
    gpu: raiproject/carml-mxnet:amd64-cpu
    cpu: raiproject/carml-mxnet:amd64-gpu
  ppc64le:
    cpu: raiproject/carml-mxnet:ppc64le-gpu
    gpu: raiproject/carml-mxnet:ppc64le-gpu
```


### API

### Advertisements


## Model



### Specification

```yaml
name: InceptionNet # name of your model
framework: # the framework to use
  name: MXNet # framework for the model
  version: ^0.1 # framework version constraint
version: 1.0 # version information in semantic version format
container: # containers used to perform model prediction
           # multiple platforms can be specified
  amd64:   # if unspecified, then the default container for the framework is used
    gpu: raiproject/carml-mxnet:amd64-cpu
    cpu: raiproject/carml-mxnet:amd64-gpu
  ppc64le:
    cpu: raiproject/carml-mxnet:ppc64le-gpu
    gpu: raiproject/carml-mxnet:ppc64le-gpu
description: >
  An image-classification convolutional network.
  Inception achieves 21.2% top-1 and 5.6% top-5 error on the ILSVRC 2012 validation dataset.
  It consists of fewer than 25M parameters.
references: # references to papers / websites / etc.. describing the model
  - https://arxiv.org/pdf/1512.00567.pdf
# license of the model
license: MIT
# inputs to the model 
inputs:
  # first input type for the model
  - type: image
    # description of the first input
    description: the input image
    parameters: # type parameters
      dimensions: [1, 3, 224, 224]
output:
  # the type of the output
  type: feature
  # a description of the output parameter
  description: the output label
  parameters:
    # type parameters 
    features_url: http://data.dmlc.ml/mxnet/models/imagenet/synset.txt
before_preprocess: >
  code... 
preprocess: >
  code... 
after_preprocess: >
  code... 
before_postprocess: >
  code... 
postprocess: >
  code... 
after_postprocess: >
  code... 
model: # specifies model graph and weights resources
  base_url: http://data.dmlc.ml/models/imagenet/inception-bn/
  graph_path: Inception-BN-symbol.json
  weights_path: Inception-BN-0126.params
  is_archive: false # if set, then the base_url is a url to an archive
                    # the graph_path and weights_path then denote the 
                    # file names of the graph and weights within the archive
attributes: # extra network attributes 
  kind: CNN # the kind of neural network (CNN, RNN, ...)
  training_dataset: ImageNet # dataset used to for training
  manifest_author: abduld
```

### Resolving Framework


A model requires a compatible framework.
The compatible framework versions is specified in the `framework > version` field using [sematnic version](http://semver.org/) format.
CarML generates a constraint using the semantic version and uses the highest version that satisfies the constraint.
Although not advised, a model has "latest" value in the `framework > version` field, then the latest advertised framework is used to perform inference on the model.


### Input/Output Types

#### Image

An image can be in PNG, JPEG, or GIF format.
