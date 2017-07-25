package web

import (
	"net/http"
	"path"

	errors "github.com/go-openapi/errors"
	"github.com/go-openapi/loads"
	runtime "github.com/go-openapi/runtime"
	"github.com/go-openapi/runtime/middleware"

	"github.com/rai-project/config"
	dlframework "github.com/rai-project/dlframework"
	"github.com/rai-project/dlframework/web/models"
	restapi "github.com/rai-project/dlframework/web/restapi"
	"github.com/rai-project/dlframework/web/restapi/operations"
	"github.com/rai-project/dlframework/web/restapi/operations/predictor"
	"github.com/rai-project/dlframework/web/restapi/operations/registry"
	kv "github.com/rai-project/registry"
)

func getDlframeworkHandler() (http.Handler, error) {
	swaggerSpec, err := loads.Analyzed(restapi.SwaggerJSON, "")
	if err != nil {
		return nil, err
	}
	api := operations.NewDlframeworkAPI(swaggerSpec)

	api.ServeError = errors.ServeError
	api.JSONConsumer = runtime.JSONConsumer()
	api.JSONProducer = runtime.JSONProducer()

	api.RegistryGetFrameworkManifestHandler = registry.GetFrameworkManifestHandlerFunc(func(params registry.GetFrameworkManifestParams) middleware.Responder {
		return middleware.ResponderFunc(func(rw http.ResponseWriter, producer runtime.Producer) {
			fn := params.FrameworkName
			fv := params.FrameworkVersion

			if fv == nil {
				return
			}

			rgs, err := kv.New()
			if err != nil {
				return
			}
			defer rgs.Close()

			key := path.Join(config.App.Name, "registry", fn, *fv, "info")
			if ok, err := rgs.Exists(key); err != nil || !ok {
				return
			}
			e, err := rgs.Get(key)
			if err != nil {
				return
			}
			framework := new(dlframework.FrameworkManifest)
			if err := framework.Unmarshal(e.Value); err != nil {
				return
			}

			rw.WriteHeader(http.StatusOK)

			if err := producer.Produce(rw, framework); err != nil {
				return
			}
		})
	})
	api.RegistryGetFrameworkManifestsHandler = registry.GetFrameworkManifestsHandlerFunc(func(params registry.GetFrameworkManifestsParams) middleware.Responder {

		return middleware.ResponderFunc(func(rw http.ResponseWriter, producer runtime.Producer) {
			rgs, err := kv.New()
			if err != nil {
				panic(err)
			}
			defer rgs.Close()

			manifests := []*models.DlframeworkFrameworkManifest{}

			dirs := []string{path.Join(config.App.Name, "registry")}
			for {
				if len(dirs) == 0 {
					break
				}
				var dir string
				dir, dirs = dirs[0], dirs[1:]
				lst, err := rgs.List(dir)
				if err != nil {
					continue
				}
				for _, e := range lst {
					if e.Value == nil || len(e.Value) == 0 {
						dirs = append(dirs, e.Key)
						continue
					}
					framework := new(dlframework.FrameworkManifest)
					if err := framework.Unmarshal(e.Value); err != nil {
						continue
					}
					container := map[string]models.DlframeworkContainerHardware{}
					for k, v := range framework.GetContainer() {
						if v == nil {
							continue
						}
						container[k] = models.DlframeworkContainerHardware{
							CPU: v.GetCpu(),
							Gpu: v.GetGpu(),
						}
					}
					manifests = append(manifests, &models.DlframeworkFrameworkManifest{
						Container: container,
						Name:      framework.GetName(),
						Version:   framework.GetVersion(),
					})
				}
			}

			registry.NewGetFrameworkManifestsOK().
				WithPayload(&models.DlframeworkGetFrameworkManifestsResponse{
					Manifests: manifests,
				}).
				WriteResponse(rw, producer)
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

	return handler, nil
}
