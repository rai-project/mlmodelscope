# Evaluations

The CarML platform enables easy evaluations of both performance and accuracy of models across frameworks.
The evaluation run using the CarML library, without the website components and are available as subcommands to each agent.
Utility functions are available to help run the experiments, summarize and analyize the data, and visualize the results.


?> Evaluations currently only run on datasets known by [DLDataset](https://github.com/rai-project/dldataset)

## Running Evaluations

One can run evaluations across different frameworks and models or on a single framework and model.
Both commands are similar and we will show them here.

### Running Evaluations on all Frameworks / Models

[evaluate.go](https://github.com/rai-project/dlframework/blob/master/framework/cmd/server/evaluate.go) is a wrapper tool exists to make it easier to run evaluations across frameworks and model.
One can specify the [frameworks, models, and batch sizes](https://github.com/rai-project/dlframework/blob/master/framework/cmd/server/evaluate.go#L31-L72) to use within the file.
The program can then be run


#### Example Usage

```{sh}
./tensorflow_agent dataset --debug --verbose --publish=true --fail_on_error=true --gpu=true --batch_size=320 --model_name=BVLC-Reference-CaffeNet --model_version=1.0 --database_name=tx2_carml_step_trace --database_address=minsky1-1.csl.illinois.edu --publish_predictions=false --num_file_parts=8 --trace_level=STEP_TRACE
```

- [ ]: TODO: allow one to specify the frameworks, models, and batch sizes from the command line


### Running Evaluations on a single Framework / Model

#### Example Usage

```{sh}
./tensorflow_agent dataset --debug --verbose --publish=true --fail_on_error=true --gpu=true --batch_size=320 --model_name=BVLC-Reference-CaffeNet --model_version=1.0 --database_name=tx2_carml_step_trace --database_address=minsky1-1.csl.illinois.edu --publish_predictions=false --num_file_parts=8 --trace_level=STEP_TRACE
```


### Command line options


```
  -b, --batch_size int                        the batch size to use while performing inference (default 64)
      --database_address database.endpoints   the address of the mongo database to store the results. By default the address in the config database.endpoints is used
      --database_name string                  the name of the database to publish the evaluation results to
      --dataset_category string               the dataset category to use for prediction (default "vision")
      --dataset_name ilsvrc2012_validation    the name of the dataset to perform the evaluations on. When using ilsvrc2012_validation, optimized versions of the dataset are used when the input network takes 224 or 22  (default "ilsvrc2012_validation")
      --fail_on_error                         turning on causes the process to terminate/exit upon first inference error. This is useful since some inferences will result in an error because they run out of memory
      --gpu                                   whether to enable the gpu. An error is returned if the gpu is not available
  -h, --help                                  help for dataset
      --model_name string                     the name of the model to use for prediction (default "BVLC-AlexNet")
      --model_version string                  the version of the model to use for prediction (default "1.0")
      --num_file_parts int                    the number of file parts to process. Setting file parts to a value other than -1 means that only the first num_file_parts * batch_size images are infered from the dataset. This is useful while performing performance evaluations, where only a few hundred evaluation samples are useful (default -1)
  -p, --partition_dataset_size int            the chunk size to partition the input dataset. By default this is the same as the batch size
      --publish                               whether to publish the evaluation to database. Turning this off will not publish anything to the database. This is ideal for using carml within profiling tools or performing experiments where the terminal output is sufficient. (default true)
      --publish_predictions                   whether to publish prediction results to database. This will store all the probability outputs for the evaluation in the database which would be a few gigabytes of data for one dataset
      --trace_level string                    the trace level to use while performing evaluations (default "STEP_TRACE")
```

## Model Names

```
agent info models
```


## Checking Divergence



- [ ]: TODO 

To compare a single prediction's divergence you use

```
agent  database divergence --database_address=minsky1-1.csl.illinois.edu --database_name=carml --source=5a01fc48ca60cc797e63603c --target=5a0203f8ca60ccd42aa2a706
```



## Analysing / Summarizing Results


- [ ]: TODO

```
agent info evaluation --help
```
