# Web Server

## Grpc

### Proxy

![grpc-rest-gateway](<assets/images/grpc-rest-gateway.png|height=250, width=400, align=center>)

### Web

## Middleware

!> The list of middleware run should be a configurable options. Currently the list is hardcoded. Profiling should not be enabled in non-debug mode, for example.

### Trace

### Recover

### Logger

### GZip

### PProf

The webserver exposes [`pprof`](https://golang.org/pkg/net/http/pprof/) endpoints.
This allows the developer to perform profiles on the webserver as described [here](https://blog.golang.org/profiling-go-programs).

## Routes

### API

All interactions with the webserver happen on the `/api/*` route.

!> We should probably move this route to `/api/v1/*`

### Upload

An upload handler is configured to listen on the `/api/upload` route.
The upload handler accepts requests from the [upload area](webui.md#upload-area) component.
This is further discussed in the [upload manager backend section](backend.md#upload-manager).

### Version

It is sometimes useful to know when the deployed webserver was built and what version of the code is being used.
`/api/version` allows you to get this information.

!> We should probably move this route to `/api/buildinfo`

### Swagger

![Swagger UI](<assets/images/swaggerui.png|height=150, width=125, align=floated> "Swagger UI")

As discussed in the [API section](api.md), the CarML webserver exposes it's API in OpenAPI format.
The `/swagger/*` route is proxied to the swagger user interface (shown on the right).
The `swagger.json` itself is accessible from the `/api/v1/swagger.json` endpoint.

### Registry

The keys in distributed key-value store is accessible from the `/registry/keys` route.
It is not a good idea to access this route directly.

!> Think about removing it.

## Bundling Assets

The [Webpack](https://webpack.js.org/) builds the javascript code and bundles it for production use.
This is done using the `yarn build` command. 
We then want to include the generated static files as strings within the web server.
We do this via the `yarn build:assets` command.
This generates the `bindata_assetfs.go` file which includes compressed strings of the javascript, html, fonts, ... needed by the UI.

?> `yarn bundle` is a helper command that runs both `yarn build` and `yarn build:assets`.

It is sometimes useful to know when the bundle was created. 
This can be done by accessing the `/uiversion` endpoints.
The web manifest is accessible via the `/manifest.json` endpoint.

?> In production, the CarML UI uses [service workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) to speedup and cache the UI processing.
