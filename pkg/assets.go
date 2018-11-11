package web

import (
	"net/http"

	"github.com/elazarl/go-bindata-assetfs"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

func getAssetFS() *assetfs.AssetFS {
	return &assetfs.AssetFS{
		Asset:     Asset,
		AssetDir:  AssetDir,
		AssetInfo: AssetInfo,
		Prefix:    "/build/",
	}
}

func assetsRoutes(e *echo.Echo) error {
	index := func(c echo.Context) error {
		html, err := buildIndexHtmlBytes()
		if err != nil {
			return err
		}
		return c.HTML(http.StatusOK, string(html))
	}
	serviceWorker := func(c echo.Context) error {
		js, err := buildServiceWorkerJsBytes()
		if err != nil {
			return err
		}
		return c.Blob(http.StatusOK, "application/javascript", js)
	}
	uiversion := func(c echo.Context) error {
		return c.JSON(http.StatusOK, map[string]string{
			"release_tag": UIReleaseTag,
			"build_type":  UIBuildType,
			"commit_id":   UICommitID,
			"version":     UIVersion,
		})
	}
	favicon := func(c echo.Context) error {
		ico, err := buildFaviconIcoBytes()
		if err != nil {
			return err
		}
		return c.Blob(http.StatusOK, "image/x-icon", ico)
	}
	assetManifest := func(c echo.Context) error {
		js, err := buildAssetManifestJsonBytes()
		if err != nil {
			return err
		}
		return c.Blob(http.StatusOK, "application/javascript", js)
	}
	manifest := func(c echo.Context) error {
		js, err := buildManifestJsonBytes()
		if err != nil {
			return err
		}
		return c.Blob(http.StatusOK, "application/javascript", js)
	}

	assetGroup := e.Group("",
		middleware.GzipWithConfig(middleware.GzipConfig{
			Level: 5,
		}),
	)
	assetGroup.GET("/", index)
	assetGroup.GET("/*", index)
	assetGroup.GET("/index.html", index)
	assetGroup.GET("/favicon.ico", favicon)
	assetGroup.HEAD("/favicon.ico", favicon)
	assetGroup.GET("/uiversion", uiversion)
	assetGroup.GET("/manifest.json", manifest)
	assetGroup.GET("/asset-manifest.json", assetManifest)
	assetGroup.GET("/service-worker.js", serviceWorker)
	assetGroup.GET("/sw.js", serviceWorker)
	assetGroup.GET("/vendor/*", echo.WrapHandler(http.FileServer(getAssetFS())))
	assetGroup.GET("/static/*", echo.WrapHandler(http.FileServer(getAssetFS())))

	return nil
}
