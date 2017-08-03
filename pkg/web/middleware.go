package web

import (
	"strings"

	"github.com/k0kubun/pp"
	"github.com/labstack/echo"
)

func StripPrefix(prefix string, h echo.HandlerFunc) echo.HandlerFunc {
	if prefix == "" {
		return h
	}
	return func(c echo.Context) error {
		req := c.Request()
		url := req.URL
		path := url.Path
		if p := strings.TrimPrefix(path, prefix); len(p) < len(path) {
			url.Path = p
		}
		pp.Println(url.Path)
		return h(c)
	}
}

func PrintResponseID(h echo.HandlerFunc) echo.HandlerFunc {
	return func(c echo.Context) error {
		pp.Println("ResponseID ", c.Response().Header().Get(echo.HeaderXRequestID))
		return h(c)
	}
}
