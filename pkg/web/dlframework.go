package web

import (
	"net/http"

	errors "github.com/go-openapi/errors"
	"github.com/go-openapi/loads"
	runtime "github.com/go-openapi/runtime"
	"github.com/go-openapi/runtime/middleware"

	"github.com/labstack/echo"
	dlframework "github.com/rai-project/dlframework/web/restapi"
	"github.com/rai-project/dlframework/web/restapi/operations"
	"github.com/rai-project/dlframework/web/restapi/operations/predictor"
	"github.com/rai-project/dlframework/web/restapi/operations/registry"
)

func dlframeworkRoutes(e *echo.Echo) error {
	swaggerSpec, err := loads.Analyzed(dlframework.SwaggerJSON, "")
	if err != nil {
		return err
	}
	api := operations.NewDlframeworkAPI(swaggerSpec)

	api.ServeError = errors.ServeError
	api.JSONConsumer = runtime.JSONConsumer()
	api.JSONProducer = runtime.JSONProducer()

	api.RegistryGetFrameworkManifestHandler = registry.GetFrameworkManifestHandlerFunc(func(params registry.GetFrameworkManifestParams) middleware.Responder {
		return middleware.NotImplemented("operation registry.GetFrameworkManifest has not yet been implemented")
	})
	api.RegistryGetFrameworkManifestsHandler = registry.GetFrameworkManifestsHandlerFunc(func(params registry.GetFrameworkManifestsParams) middleware.Responder {
		return middleware.ResponderFunc(func(rw http.ResponseWriter, producer runtime.Producer) {
			for k, v := range make(http.Header) {
				for _, val := range v {
					rw.Header().Add(k, val)
				}
			}

			rw.WriteHeader(http.StatusOK)

			if err := producer.Produce(rw, "test"); err != nil {
				return
			}
		})
	})
	api.RegistryGetFrameworkModelManifestHandler = registry.GetFrameworkModelManifestHandlerFunc(func(params registry.GetFrameworkModelManifestParams) middleware.Responder {
		return middleware.NotImplemented("operation registry.GetFrameworkModelManifest has not yet been implemented")
	})
	api.RegistryGetFrameworkModelsHandler = registry.GetFrameworkModelsHandlerFunc(func(params registry.GetFrameworkModelsParams) middleware.Responder {
		return middleware.NotImplemented("operation registry.GetFrameworkModels has not yet been implemented")
	})
	api.RegistryGetModelManifestHandler = registry.GetModelManifestHandlerFunc(func(params registry.GetModelManifestParams) middleware.Responder {
		return middleware.NotImplemented("operation registry.GetModelManifest has not yet been implemented")
	})
	api.RegistryGetModelManifestsHandler = registry.GetModelManifestsHandlerFunc(func(params registry.GetModelManifestsParams) middleware.Responder {
		return middleware.NotImplemented("operation registry.GetModelManifests has not yet been implemented")
	})
	api.PredictorPredictHandler = predictor.PredictHandlerFunc(func(params predictor.PredictParams) middleware.Responder {
		return middleware.NotImplemented("operation predictor.Predict has not yet been implemented")
	})

	api.ServerShutdown = func() {}
	api.Logger = log.Debugf

	handler := api.Serve(nil)

	e.Any("/dlframework/*", StripPrefix("/dlframework", echo.WrapHandler(handler)))
	return nil
}
