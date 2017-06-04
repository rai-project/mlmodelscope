package web

import (
	glog "log"
	"net/http"
	"os"
	"path/filepath"
	"strings"

	"github.com/Unknwon/com"
	"github.com/k0kubun/pp"
	"github.com/labstack/echo"
	"github.com/rai-project/config"
	"github.com/tus/tusd"
	"github.com/tus/tusd/filestore"
)

func StripPrefix(prefix string, h echo.HandlerFunc) echo.HandlerFunc {
	if prefix == "" {
		return h
	}
	return func(c echo.Context) error {
		path := c.Path()
		if p := strings.TrimPrefix(path, prefix); len(p) < len(path) {
			c.SetPath(p)
			return h(c)
		} else {
			pp.Println("Cannot find " + path)
			return c.NoContent(http.StatusNotFound)
		}
	}
}

func makeUploadHandler2() (echo.HandlerFunc, error) {
	h := func(c echo.Context) error {
		return c.JSON(http.StatusOK, map[string]string{"status": "ok"})
	}
	return StripPrefix("/api/upload/", h), nil
}

func makeUploadHandler() (echo.HandlerFunc, error) {
	uploadDir := filepath.Join(config.App.TempDir, "carml_uploads")

	if !com.IsDir(uploadDir) {
		os.MkdirAll(uploadDir, os.FileMode(0755))
	}

	// Create a new FileStore instance which is responsible for
	// storing the uploaded file on disk in the specified directory.
	// This path _must_ exist before tusd will store uploads in it.
	// If you want to save them on a different medium, for example
	// a remote FTP server, you can implement your own storage backend
	// by implementing the tusd.DataStore interface.
	store := filestore.New(uploadDir)

	// A storage backend for tusd may consist of multiple different parts which
	// handle upload creation, locking, termination and so on. The composer is a
	// place where all those seperated pieces are joined together. In this example
	// we only use the file store but you may plug in multiple.
	composer := tusd.NewStoreComposer()
	// composer.UseLocker(memorylocker.New())
	store.UseIn(composer)

	// Create a new HTTP handler for the tusd server by providing a configuration.
	// The StoreComposer property must be set to allow the handler to function.
	handler, err := tusd.NewHandler(tusd.Config{
		BasePath:      "/api/upload/",
		StoreComposer: composer,
		Logger: glog.New(
			log.Writer(),
			"tusd",
			glog.LstdFlags,
		),
	})
	if err != nil {
		log.WithError(err).Error("Unable to create handler")
		return nil, err
	}
	return echo.WrapHandler(http.StripPrefix("/api/upload/", handler)), nil
}
