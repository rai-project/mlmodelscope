package web

import (
	"net/http"

	"github.com/go-openapi/loads"

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
	handler := dlframework.ConfigureAPI(api)

	return handler, nil
}
