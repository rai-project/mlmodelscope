package web

import (
	"bytes"
	"encoding/base64"
	"encoding/json"
	"net/http"
	"path"
	"strings"

	openapierrors "github.com/go-openapi/errors"
	"github.com/go-openapi/loads"
	runtime "github.com/go-openapi/runtime"
	"github.com/go-openapi/runtime/middleware"
	"github.com/gogo/protobuf/jsonpb"
	"github.com/k0kubun/pp"
	"github.com/pkg/errors"

	"fmt"

	"github.com/rai-project/config"
	dlframework "github.com/rai-project/dlframework"
	"github.com/rai-project/dlframework/web/models"
	restapi "github.com/rai-project/dlframework/web/restapi"
	"github.com/rai-project/dlframework/web/restapi/operations"
	"github.com/rai-project/dlframework/web/restapi/operations/predictor"
	"github.com/rai-project/dlframework/web/restapi/operations/registry"
	kv "github.com/rai-project/registry"
)

var (
	DefaultUnmarshaler = &jsonpb.Unmarshaler{AllowUnknownFields: false}
)

type apiError struct {
	Name    string
	Message error
	Code    int
}

func (e apiError) Error() string {
	return e.Message.Error()
}

func (e apiError) MarshalJSON() ([]byte, error) {
	var stack string
	name := fmt.Sprintf("\"name\": \"%s\"", e.Name)
	message := fmt.Sprintf("\"message\": \"%s\"", e.Message.Error())
	code := fmt.Sprintf("\"code\": %d", e.Code)
	stackData := strings.Split(fmt.Sprintf("%+v", e.Message), "\n")
	bts, err := json.Marshal(stackData)
	if err != nil {
		stack = fmt.Sprintf("\"stack\": []")
	} else {
		stack = fmt.Sprintf("\"stack\": %s", string(bts))
	}
	res := fmt.Sprintf("{%s, %s, %s, %s}", name, message, code, stack)
	return []byte(res), nil
}

func decodeRegistry0(src []byte) []byte {
	enc := base64.StdEncoding
	buf := make([]byte, enc.DecodedLen(len(src)))
	enc.Decode(buf, src)
	return buf
}

func decodeRegistry(src []byte) []byte {
	return src
}

func getDlframeworkHandler() (http.Handler, error) {
	swaggerSpec, err := loads.Analyzed(restapi.SwaggerJSON, "")
	if err != nil {
		return nil, err
	}
	api := operations.NewDlframeworkAPI(swaggerSpec)

	api.ServeError = openapierrors.ServeError
	api.JSONConsumer = runtime.JSONConsumer()
	api.JSONProducer = runtime.JSONProducer()

	makeError := func(code int, name string, message error) error {
		return apiError{Code: code, Name: name, Message: message}
	}

	unmarshaler := DefaultUnmarshaler

	api.RegistryGetFrameworkManifestHandler = registry.GetFrameworkManifestHandlerFunc(func(params registry.GetFrameworkManifestParams) middleware.Responder {
		return middleware.ResponderFunc(func(rw http.ResponseWriter, producer runtime.Producer) {
			fn := strings.ToLower(params.FrameworkName)
			fv := params.FrameworkVersion

			if fv == nil {
				rw.WriteHeader(http.StatusBadRequest)
				producer.Produce(rw,
					makeError(
						http.StatusBadRequest,
						"GetFrameworkManifest",
						errors.New("invalid RegistryGetFrameworkManifestHandler framework version cannot be empty"),
					),
				)
				return
			}

			rgs, err := kv.New()
			if err != nil {
				producer.Produce(rw,
					makeError(
						http.StatusBadRequest,
						"GetFrameworkManifest",
						err,
					),
				)
				rw.WriteHeader(http.StatusBadRequest)
				return
			}
			defer rgs.Close()

			key := path.Join(config.App.Name, "registry", fn, strings.ToLower(*fv), "info")
			ok, err := rgs.Exists(key)
			if err != nil {
				rw.WriteHeader(http.StatusBadRequest)
				producer.Produce(rw,
					makeError(
						http.StatusBadRequest,
						"GetFrameworkManifest",
						err,
					),
				)
				return
			}
			if !ok {
				registry.NewGetFrameworkManifestOK().
					WithPayload(&models.DlframeworkFrameworkManifest{}).
					WriteResponse(rw, producer)
				return
			}
			e, err := rgs.Get(key)
			if err != nil {
				rw.WriteHeader(http.StatusBadRequest)
				producer.Produce(rw,
					makeError(
						http.StatusBadRequest,
						"GetFrameworkManifest",
						err,
					),
				)
				return
			}
			framework := new(dlframework.FrameworkManifest)
			registryValue := decodeRegistry(e.Value)
			if err := unmarshaler.Unmarshal(bytes.NewBuffer(registryValue), framework); err != nil {
				rw.WriteHeader(http.StatusBadRequest)
				producer.Produce(rw,
					makeError(
						http.StatusBadRequest,
						"GetFrameworkManifest",
						err,
					),
				)
				return
			}

			container := map[string]models.DlframeworkContainerHardware{}
			for k, v := range framework.GetContainer() {
				container[k] = models.DlframeworkContainerHardware{
					CPU: v.GetCpu(),
					Gpu: v.GetGpu(),
				}
			}

			res := &models.DlframeworkFrameworkManifest{
				Container: container,
				Name:      framework.GetName(),
				Version:   framework.GetVersion(),
			}

			pp.Println(res)

			registry.NewGetFrameworkManifestOK().
				WithPayload(res).
				WriteResponse(rw, producer)
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
					if e.Value == nil || len(decodeRegistry(e.Value)) == 0 {
						dirs = append(dirs, e.Key)
						continue
					}
					registryValue := decodeRegistry(e.Value)
					framework := new(dlframework.FrameworkManifest)
					if err := unmarshaler.Unmarshal(bytes.NewBuffer(registryValue), framework); err != nil {
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
		return middleware.ResponderFunc(func(rw http.ResponseWriter, producer runtime.Producer) {
			fn := strings.ToLower(params.FrameworkName)
			fv := "latest"
			if params.FrameworkVersion != nil {
				fv = strings.ToLower(*params.FrameworkVersion)
			}
			mn := strings.ToLower(params.ModelName)
			mv := "latest"
			if params.ModelVersion != nil {
				mv = strings.ToLower(*params.ModelVersion)
			}

			if fv == "" {
				rw.WriteHeader(http.StatusBadRequest)
				producer.Produce(rw,
					makeError(
						http.StatusBadRequest,
						"GetFrameworkModelManifest",
						errors.New("invalid RegistryGetFrameworkModelManifestHandler framework version cannot be empty"),
					),
				)
				return
			}
			if mv == "" {
				rw.WriteHeader(http.StatusBadRequest)
				producer.Produce(rw,
					makeError(
						http.StatusBadRequest,
						"GetFrameworkModelManifest",
						errors.New("invalid RegistryGetFrameworkModelManifestHandler model version cannot be empty"),
					),
				)
				return
			}

			rgs, err := kv.New()
			if err != nil {
				producer.Produce(rw,
					makeError(
						http.StatusBadRequest,
						"GetFrameworkModelManifest",
						err,
					),
				)
				rw.WriteHeader(http.StatusBadRequest)
				return
			}
			defer rgs.Close()

			key := path.Join(config.App.Name, "registry", fn, fv, mn, mv, "info")
			ok, err := rgs.Exists(key)
			if err != nil {
				rw.WriteHeader(http.StatusBadRequest)
				producer.Produce(rw,
					makeError(
						http.StatusBadRequest,
						"GetFrameworkModelManifest",
						err,
					),
				)
				return
			}
			if !ok {
				registry.NewGetFrameworkModelManifestOK().
					WithPayload(&models.DlframeworkModelManifest{}).
					WriteResponse(rw, producer)
				return
			}
			e, err := rgs.Get(key)
			if err != nil {
				rw.WriteHeader(http.StatusBadRequest)
				producer.Produce(rw,
					makeError(
						http.StatusBadRequest,
						"GetFrameworkModelManifest",
						err,
					),
				)
				return
			}
			registryValue := decodeRegistry(e.Value)
			model := &dlframework.ModelManifest{}
			if err := unmarshaler.Unmarshal(bytes.NewBuffer(registryValue), model); err != nil {
				rw.WriteHeader(http.StatusBadRequest)
				producer.Produce(rw,
					makeError(
						http.StatusBadRequest,
						"GetFrameworkModelManifest",
						err,
					),
				)
				return
			}

			bts, err := json.Marshal(model)
			if err != nil {
				rw.WriteHeader(http.StatusBadRequest)
				producer.Produce(rw,
					makeError(
						http.StatusBadRequest,
						"GetFrameworkModelManifest",
						err,
					),
				)
				return
			}

			res := &models.DlframeworkModelManifest{}
			if err := json.Unmarshal(bts, res); err != nil {
				rw.WriteHeader(http.StatusBadRequest)
				producer.Produce(rw,
					makeError(
						http.StatusBadRequest,
						"GetFrameworkModelManifest",
						err,
					),
				)
				return
			}

			registry.NewGetFrameworkModelManifestOK().
				WithPayload(res).
				WriteResponse(rw, producer)
		})
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
