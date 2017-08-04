package web

import (
	glog "log"
	"net/http"
	"os"
	"path/filepath"

	"github.com/Unknwon/com"
	"github.com/labstack/echo"
	"github.com/rai-project/config"
	"github.com/rai-project/store/tus/localstore"
	"github.com/tus/tusd"
	"github.com/tus/tusd/memorylocker"
)

func makeUploadHandler() (echo.HandlerFunc, error) {
	uploadDir := filepath.Join(config.App.TempDir, "carml_uploads")
	log.Info("using " + uploadDir + " as the upload directory")

	if !com.IsDir(uploadDir) {
		os.MkdirAll(uploadDir, os.FileMode(0755))
	}

	// Create a new FileStore instance which is responsible for
	// storing the uploaded file on disk in the specified directory.
	// This path _must_ exist before tusd will store uploads in it.
	// If you want to save them on a different medium, for example
	// a remote FTP server, you can implement your own storage backend
	// by implementing the tusd.DataStore interface.
	store := localstore.New(uploadDir)

	// A storage backend for tusd may consist of multiple different parts which
	// handle upload creation, locking, termination and so on. The composer is a
	// place where all those seperated pieces are joined together. In this example
	// we only use the file store but you may plug in multiple.
	composer := tusd.NewStoreComposer()
	locker := memorylocker.New()
	locker.UseIn(composer)
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
