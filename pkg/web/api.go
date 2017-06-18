package web

import (
	"net/http"
	"strings"

	"golang.org/x/net/context"

	"google.golang.org/grpc"

	"github.com/grpc-ecosystem/grpc-gateway/runtime"
	"github.com/labstack/echo"
	"github.com/rai-project/config"
	"github.com/rai-project/dlframework"
)

func apiRoutes(e *echo.Echo) error {
	api := e.Group("/api")

	api.GET("/version", func(c echo.Context) error {
		return c.JSON(http.StatusOK, config.App.Version)
	})
	uploadHandler, err := makeUploadHandler()
	if err != nil {
		return err
	}
	api.Any("/upload/*", uploadHandler)

	mux := runtime.NewServeMux()
	opts := []grpc.DialOption{grpc.WithInsecure()}

	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()
	err = dlframework.RegisterRegistryHandlerFromEndpoint(ctx, mux, "localhost", opts)
	if err != nil {
		return err
	}

	api.Any("/*", StripPrefix("/api", echo.WrapHandler(mux)))
	return nil
}

// grpcHandlerFunc returns an http.Handler that delegates to grpcServer on incoming gRPC
// connections or otherHandler otherwise. Copied from cockroachdb.
func grpcHandlerFunc(grpcServer *grpc.Server, otherHandler http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// TODO(tamird): point to merged gRPC code rather than a PR.
		// This is a partial recreation of gRPC's internal checks https://github.com/grpc/grpc-go/pull/514/files#diff-95e9a25b738459a2d3030e1e6fa2a718R61
		if r.ProtoMajor == 2 && strings.Contains(r.Header.Get("Content-Type"), "application/grpc") {
			grpcServer.ServeHTTP(w, r)
		} else {
			otherHandler.ServeHTTP(w, r)
		}
	})
}
