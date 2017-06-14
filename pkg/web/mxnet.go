// +build !cloudfoundry

package web

import (
	"net/http"

	"google.golang.org/grpc/grpclog"

	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"github.com/labstack/echo"
	"github.com/rai-project/dlframework/mxnet/agent"
)

func mxnetRoutes(api *echo.Group) error {

	server := agent.Register()
	grpclog.SetLogger(log.WithField("subpkg", "grpclog"))
	wrappedGrpc := grpcweb.WrapServer(server)
	api.GET("/mxnet/endpoints.json", func(c echo.Context) error {
		return c.JSON(http.StatusOK, grpcweb.ListGRPCResources(server))
	})
	api.Any("/mxnet/*", StripPrefix("/api/mxnet", echo.WrapHandler(wrappedGrpc)))

	return nil
}
