# Architecture

CarML is structured as a distributed load balanced framework with many components.
Different servers run on (possibly) different machines. 
Each server has a different purpose, called role.

The following diagram shows a common setup of CarML.

## Roles

-   **DL Agent**: a deep learning agent is fixed to one deep learning framework and (possibly) many models.
    An agent advertises itself within the registry.
    Multiple agents may run the same framework and/or model.
    It is up to the agent resolver to lookup the agent given a request and (possibly) load balance multiple requests across agents.

-   **DL Provisioner**: agents are run by a provisioner most likely within a container.

-   **Web server**: the 

## Hierarchy

![architecture](<assets/images/architecture.png|height=400, width=309, align=center> "System Architecture")
