package web

import (
	"strings"

	"github.com/k0kubun/pp"
	"github.com/labstack/echo"
)

//  Allow cross-origin
func AllowCrossOrigin() echo.MiddlewareFunc {
	return func(next echo.HandlerFunc) echo.HandlerFunc {
		return func(c echo.Context) error {
			res := c.Response()
			res.Header().Set(echo.HeaderAccessControlAllowOrigin, "*")

			return next(c)
		}
	}
}

//  Allow traced requests
func AllowTracedHeaders() echo.MiddlewareFunc {
	extra := strings.Join(
		[]string{
			"Origin",
			"Accept",
			"X-Requested-With",
			"X-B3-TraceId",
			"X-B3-ParentSpanId",
			"X-B3-SpanId",
			"X-B3-Sampled",
			"trace.traceid",
			"trace.spanid",
		},
		", ",
	)
	return func(next echo.HandlerFunc) echo.HandlerFunc {
		return func(c echo.Context) error {
			req := c.Request()
			res := c.Response()
			rid := req.Header.Get(echo.HeaderAccessControlAllowHeaders)
			rid += extra
			res.Header().Set(echo.HeaderAccessControlAllowHeaders, rid)

			return next(c)
		}
	}
}

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
		pp.Println(req.Method + "::" + url.Path)
		return h(c)
	}
}

func PrintResponseID(h echo.HandlerFunc) echo.HandlerFunc {
	return func(c echo.Context) error {
		pp.Println("ResponseID ", c.Response().Header().Get(echo.HeaderXRequestID))
		return h(c)
	}
}
