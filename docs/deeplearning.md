# Deep Learning

![architecture](assets/images/architecture.png|height=200, width=153, align=floated "System Architecture" )


As shown in the figure on the right, and discussed in the [architecture](architecture.md) section, Deep learning (DL) is one of the components of CarML.
Deep learning is a class of machine learning neural network algorithms that uses many hidden layers.

!>  Currently CarML only has the DL component, although other ML components such as SVM, Decision Trees, etc... will follow.

In the past few years quite a few DL _**frameworks**_ have been developed such as Caffe, Tensorflow, MXNet, Torch, and CNTK.
At the same time, some DL developers have published pre-trained models targeting these frameworks.

The objective of CarML is to make it easier to use DL frameworks and their corresponding models.
DL developers publish their framework and models through CarML, a user can then browse through the different frameworks and models.


Different frameworks and models exhibit different design points --- some being more flexible and/or more low level than others.
At the user interface level, CarML hides these complexity providing a more holistic view of frameworks.


## DL Framework

A DL framework is a library, DSL, and (possibly) programming paradigm that allows one to develop, train, and infer DL models.

### Specification (Manifest)

A framework is specified as a name, version, along with names of the containers the container can run in. 
This information is stored within a "manifest" file.
The following shows an example of a manifest file for (**MXNet**)[mxnet.io]

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

### Advertising


## Model

A DL model is ...

### Specification

```yaml
name: InceptionNet # name of your model
version: 1.0 # version information in semantic version format
framework: # the framework to use
  name: MXNet # framework for the model
  version: ^0.1 # framework version constraint
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

### Meta Information

A model manifest contains some metainformation to identify the model such as: name, description, model version, references, and licence.
Extra meta-information can be specified as a key-value map withing the `attributes` fields.

### Framework

Each neural network model is associated with a framework.
The combination of framework name and [semantic version](http://www.semver.org) form a constraint which is solved by the CarML framework (more information is found in the [Resolving Framework](deeplearning.md#resolving-framework) section).
This allows models to be vendored for each framework version. 
This is specifically important to support framework versions which break backward compatibility.
An error occurs if CarML cannot resolve the framework.

!> **Note** the model version is unrelated to the framework version. 

### Docker Containers

A user may wish to run a model within a different container than the one defined for the framework.
This can be because the model requires extra pieces of software and/or custom layers.
If a docker container is not specified, then the container defined for the resolved framework is used, otherwise the container specified supersedes the one defined by the framework.

The containers currently must be published on the Dockerhub registry.
An error is returned if no container is found.

- [ ] Allow one to specify custom docker files and/or registeries.

### Pre- and Post-Processing Code

A model manifest author can specify operations to occur before or after model inference.
Defining code in the preprocess or postprocess fields nullifies the automatic pre- and post-processing steps that CarML does --- images are not auto-resized for example.
This allows the manifest author to perform custom operations that are required by the model, without making mondifcations to the inference engine.
The pre-processing code gets executed on the input code before it's fed into the model inference engine (the same is for the post-processing code).


- [ ] This is not currently supported
- [ ] The language can be inferred using [linguist](https://github.com/rai-project/linguist). See [for example](https://github.com/rai-project/plini/blob/master/pkg/language/detect.go).

### Model Resources

### Input and Output Types

A model's inputs and output are defined within the manifest.

#### Image

An image can be encoded in PNG, JPEG, or GIF format.

An image type can have one or more of the following attributes:

1. **`dimensions`** specifies the dimensions of the image. The image is auto-resized to the specified dimensions if no pre- or post-processing code is set.
1. **`mean`** specifies the mean value (or vector) to be subtracted from each pixel to normalize the image. Zero is used if unspecified.
1. **`color_space`** TODO

#### Feature


#### Coordinate


### Resolving Framework


A model requires a compatible framework.
The compatible framework versions is specified in the `framework > version` field using [sematnic version](http://semver.org/) format.
CarML generates a constraint using the semantic version and uses the highest version that satisfies the constraint.
Although not advised, a model has "latest" value in the `framework > version` field, then the latest advertised framework is used to perform inference on the model.



## Dataset

!> This is not currently implemented. The following is an example manifest however.


```yaml
name: ImageNet # name of the dataset
version: 0.1 # dataset version
license: MIT # license of the dataset
url: http://example.org/data.tar.gz # url to the dataset
description: >
  A description to the dataset
references: # references to papers / websites / etc.. describing the dataset
  - https://example.org
attributes: # extra network attributes 
  manifest_author: abduld
``` 

- [ ] A dataset can be mounted within a container by name and version. This would require developing a docker-volume plugin that can mound datasets. See [azurefile-dockervolumedriver](https://github.com/Azure/azurefile-dockervolumedriver) for an example of how to define a docker volume to mount remote data.
