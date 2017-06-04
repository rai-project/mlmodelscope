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
	api.Any("/upload", uploadHandler)

	return nil
}
