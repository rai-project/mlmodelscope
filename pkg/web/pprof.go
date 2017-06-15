package web

import (
	"net/http"
	"net/http/pprof"

	"github.com/labstack/echo"
)

func pprofRoutes(e *echo.Echo) error {
	e.GET("/debug/pprof/", echo.WrapHandler(http.HandlerFunc(pprof.Index)))
	e.GET("/debug/pprof/heap", echo.WrapHandler(pprof.Handler("heap")))
	e.GET("/debug/pprof/goroutine", echo.WrapHandler(pprof.Handler("goroutine")))
	e.GET("/debug/pprof/block", echo.WrapHandler(pprof.Handler("block")))
	e.GET("/debug/pprof/threadcreate", echo.WrapHandler(pprof.Handler("threadcreate")))
	e.GET("/debug/pprof/cmdline", echo.WrapHandler(http.HandlerFunc(pprof.Cmdline)))
	e.GET("/debug/pprof/profile", echo.WrapHandler(http.HandlerFunc(pprof.Profile)))
	e.GET("/debug/pprof/symbol", echo.WrapHandler(http.HandlerFunc(pprof.Symbol)))
	return nil
}
