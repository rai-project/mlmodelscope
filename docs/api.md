# API

![Swagger UI](<assets/images/swaggerui.png|height=300, width=250, align=floated> "Swagger UI")

The CarML web-server exposes REST API endpoints.
These are the same endpoints used by the JavaScript client to interact with the system.
This section describes the different REST API endpoints along with their purpose.

!> An OpenAPI specification is available and can be used in conjunction with tools such [postman](https://www.getpostman.com/) to create requests. The Swagger UI (shown on the left) can also be used to make REST requests.

## Protobuf

The [dlframework.proto](https://github.com/rai-project/dlframework/blob/master/dlframework.proto) file defines the data-structures along with the API endpoints.

-   [ ] ...TODO...FILL ME

## Registry API

The registries api endpoints allows one to query the frameworks and models known to CarML.
This is how CarML advertises the frameworks and models.

-   [ ] ...TODO...FILL ME

## Predictor API

The predictor api only offers one endpoints --- `predict`.
It allows one to perform inference given a model, mode-version, and inputs.
CarML attempts to find an agent that can provide such service.
An error occurs if CarML is unable to find such agent.

## OpenAPI --- Swagger

!> If the web-server is started, then `swagger.json` file is accessible from `/api/v1/swagger.json`. The swagger user interface is accessible at the `/swagger/index.html` endpoint.

### Generating the Swagger Definition

![grpc-rest-gateway](<assets/images/grpc-rest-gateway.png|height=250, width=400, align=floated>)

To regenerate the swagger definition file, navigate to the `rai-project/dlframework` directory and type

```.bash
make generate-proto
```

This will output a `dlframework.swagger.json` file.

To generate the swagger client and server files from the `swagger.json` definition type

```.bash
make generate
```

The generated client and server projects are placed within the `web` folder in `rai-project/dlframework`.
