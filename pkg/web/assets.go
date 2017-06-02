package web

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/elazarl/go-bindata-assetfs"
	"github.com/k0kubun/pp"
	"github.com/labstack/echo"
)

type assetsManifestTy struct {
	MainCSS               string `json:"main.css"`
	MainCSSMap            string `json:"main.css.map"`
	MainJs                string `json:"main.js"`
	MainJsMap             string `json:"main.js.map"`
	StaticMediaFlagsPng   string `json:"static/media/flags.png"`
	StaticMediaIconsEot   string `json:"static/media/icons.eot"`
	StaticMediaIconsSvg   string `json:"static/media/icons.svg"`
	StaticMediaIconsTtf   string `json:"static/media/icons.ttf"`
	StaticMediaIconsWoff  string `json:"static/media/icons.woff"`
	StaticMediaIconsWoff2 string `json:"static/media/icons.woff2"`
	StaticMediaLogoSvg    string `json:"static/media/logo.svg"`
}

var assetsManifest assetsManifestTy

func getAssetFS() *assetfs.AssetFS {
	return &assetfs.AssetFS{
		Asset:     Asset,
		AssetDir:  AssetDir,
		AssetInfo: AssetInfo,
		Prefix:    "build",
	}
}

func assetsRoutes(e *echo.Echo) {
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

	e.GET("/", index)
	e.GET("/index.html", index)
	e.GET("/favicon.ico", favicon)
	e.GET("/uiversion", uiversion)
	e.GET("/service-worker.js", serviceWorker)
	e.GET("/vendor/*", echo.WrapHandler(http.FileServer(getAssetFS())))
	e.GET("/static/*", echo.WrapHandler(http.FileServer(getAssetFS())))

}

func init() {
	data, err := buildAssetManifestJsonBytes()
	if err != nil {
		panic(fmt.Sprintf("failed to get assetsManifest %v", err))
	}
	if err := json.Unmarshal(data, &assetsManifest); err != nil {
		pp.Println(err)
		panic(fmt.Sprintf("failed to unmarshal assetsManifest %v", err))
	}
}
