package web

import (
	"github.com/labstack/echo"
	"github.com/rai-project/web/jaegerui"
)

func jaegerAssets(e *echo.Echo) error {
	e.Any("/jaeger/*", StripPrefix("/jaeger", jaegerui.Handle()))
	return nil
}
