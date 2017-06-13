package web

import (
	"net/http"

	"github.com/labstack/echo"
	"github.com/rai-project/config"
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

	// server := agent.Register()
	// grpclog.SetLogger(log.WithField("subpkg", "grpclog"))
	// wrappedGrpc := grpcweb.WrapServer(server)
	// api.GET("/mxnet/endpoints.json", func(c echo.Context) error {
	// 	return c.JSON(http.StatusOK, grpcweb.ListGRPCResources(server))
	// })
	// api.Any("/mxnet/*", StripPrefix("/api/mxnet", echo.WrapHandler(wrappedGrpc)))

	return nil
}
