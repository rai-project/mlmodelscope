package web

import (
	"net/http"
	"path/filepath"

	"github.com/labstack/echo"
	"github.com/rai-project/config"
	"github.com/tus/tusd"
	"github.com/tus/tusd/filestore"
	"github.com/tus/tusd/memorylocker"
)

func makeUploadHandler() (echo.HandlerFunc, error) {
	// Create a new FileStore instance which is responsible for
	// storing the uploaded file on disk in the specified directory.
	// This path _must_ exist before tusd will store uploads in it.
	// If you want to save them on a different medium, for example
	// a remote FTP server, you can implement your own storage backend
	// by implementing the tusd.DataStore interface.
	store := filestore.FileStore{
		Path: filepath.Join(config.App.TempDir, "carml_uploads"),
	}

	// A storage backend for tusd may consist of multiple different parts which
	// handle upload creation, locking, termination and so on. The composer is a
	// place where all those seperated pieces are joined together. In this example
	// we only use the file store but you may plug in multiple.
	composer := tusd.NewStoreComposer()
	composer.UseLocker(memorylocker.New())
	store.UseIn(composer)

	// Create a new HTTP handler for the tusd server by providing a configuration.
	// The StoreComposer property must be set to allow the handler to function.
	handler, err := tusd.NewHandler(tusd.Config{
		BasePath:      "/upload/",
		StoreComposer: composer,
		Logger:        log,
	})
	if err != nil {
		log.WithError(err).Error("Unable to create handler")
		return nil, err
	}
	return echo.WrapHandler(http.StripPrefix("/upload/", handler)), nil
}
