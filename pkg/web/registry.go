package web

import (
	"net/http"

	"github.com/labstack/echo"
	"github.com/rai-project/config"
	"github.com/rai-project/libkv/store"
	"github.com/rai-project/registry"
)

func registryRoutes(e *echo.Echo) error {
	e.GET("/registry/keys", func(c echo.Context) error {
		rgs, err := registry.New()
		if err != nil {
			return err
		}
		defer rgs.Close()

		kvs := []*store.KVPair{}
		keys := []string{}
		dirs := []string{config.App.Name}
		for {
			if len(dirs) == 0 {
				break
			}
			var dir string
			dir, dirs = dirs[0], dirs[1:]
			lst, err := rgs.List(dir)
			if err != nil {
				continue
			}
			for _, e := range lst {
				if e.Value == nil || len(e.Value) == 0 {
					dirs = append(dirs, e.Key)
					continue
				}
				keys = append(keys, e.Key)
				kvs = append(kvs, e)
			}
		}
		_ = kvs
		return c.JSONPretty(http.StatusOK, keys, "  ")
	})
	return nil
}
