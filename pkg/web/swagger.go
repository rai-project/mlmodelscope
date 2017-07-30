package web

import (
	"net/http"

	"github.com/labstack/echo"
	dlframework "github.com/rai-project/dlframework/httpapi/restapi"
	swaggerui "github.com/rai-project/web/swaggerui"
)

func swaggerUIAssets(e *echo.Echo) error {
	e.Any("/api/v1/swagger.json", func(c echo.Context) error {
		bts, err := dlframework.SwaggerJSON.MarshalJSON()
		if err != nil {
			return err
		}
		return c.JSONBlob(http.StatusOK, bts)
	})
	e.Any("/swagger/*", StripPrefix("/swagger", swaggerui.Handle()))
	return nil
}
