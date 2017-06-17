package web

import (
	"net/http"

	"github.com/labstack/echo"
	swaggerui "github.com/rai-project/web/swaggerui"
)

func swaggerUIAssets(e *echo.Echo) error {
	e.Any("/swagger/*", StripPrefix("/swagger", swaggerui.Handle()))
	return nil
}

func swaggerUIAssets2(e *echo.Echo) error {
	swaggerui.Routes("/swagger", e)
	e.GET("/swagger", func(ctx echo.Context) error {
		bts, err := swaggerui.Asset("index.html")
		if err != nil {
			return err
		}
		return ctx.HTMLBlob(http.StatusOK, bts)
	})
	return nil
}
