package web

import (
	"github.com/labstack/echo"
	"github.com/rai-project/web/jaegerui"
)

func jaegerAssets2(e *echo.Echo) error {
	return jaegerui.Routes(e, "jaeger")
}

func jaegerAssets(e *echo.Echo) error {
	e.Any("/jaeger/*", jaegerui.Handle())
	return nil
}
