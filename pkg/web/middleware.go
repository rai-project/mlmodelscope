package web

import (
	"net/http"
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
		pp.Println("res = ", strings.TrimPrefix(path, prefix))
		if p := strings.TrimPrefix(path, prefix); len(p) < len(path) {
			url.Path = p
			return h(c)
		} else {
			pp.Println("Cannot find " + path)
			return c.NoContent(http.StatusNotFound)
		}
	}
}
