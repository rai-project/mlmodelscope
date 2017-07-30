package web

import (
	"net/http"

	openapierrors "github.com/go-openapi/errors"
	"github.com/go-openapi/loads"
	runtime "github.com/go-openapi/runtime"

	dlframework "github.com/rai-project/dlframework/http"
	"github.com/rai-project/dlframework/httpapi/restapi"
	"github.com/rai-project/dlframework/httpapi/restapi/operations"
)

func getDlframeworkHandler() (http.Handler, error) {
	swaggerSpec, err := loads.Analyzed(restapi.SwaggerJSON, "")
	if err != nil {
		return nil, err
	}

	api := operations.NewDlframeworkAPI(swaggerSpec)

	api.ServeError = openapierrors.ServeError
	api.JSONConsumer = runtime.JSONConsumer()
	api.JSONProducer = runtime.JSONProducer()
	api.ServerShutdown = func() {}
	api.Logger = log.Debugf

	handler := dlframework.ConfigureAPI(api)

	return handler, nil
}
