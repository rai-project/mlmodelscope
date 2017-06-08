package web

import (
	"context"
	"fmt"
	"os"
	"os/signal"
	"strings"
	"time"

	"github.com/k0kubun/pp"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"github.com/rai-project/tracer"
	tracermiddleware "github.com/rai-project/tracer/middleware"
	"github.com/rai-project/uuid"
)

func Start(addr string) {
	e := echo.New()

	e.Logger = &echoLogger{
		Entry: log,
	}

	e.Use(middleware.LoggerWithConfig(middleware.LoggerConfig{
		Skipper: middleware.DefaultSkipper,
		Format:  middleware.DefaultLoggerConfig.Format,
		Output:  log.Writer(),
	}))
	e.Use(middleware.Recover())
	// e.Use(middleware.GzipWithConfig(middleware.GzipConfig{
	// 	Level: 5,
	// }))
	e.Use(middleware.RequestIDWithConfig(middleware.RequestIDConfig{
		Generator: func() string {
			return uuid.NewV4()
		},
	}))
	e.Use(tracermiddleware.FromHTTPRequest(tracer.Std(), "web"))

	if err := assetsRoutes(e); err != nil {
		panic(err)
	}
	if err := apiRoutes(e); err != nil {
		panic(err)
	}

	fmt.Println("🌎  Webserver started at address", pprintAddr(addr))
	defer func() {
		fmt.Println("🌀  Webserver stopped.")
	}()
	defer func() {
		if r := recover(); r != nil {
			fmt.Println("Recovered in webserver runner", pp.Sprint(r))
		}
	}()

	// Start server
	go func() {
		// Setting up the termination timeout to 30 seconds.
		err := e.Start(addr)
		if err != nil {
			log.WithError(err).Fatal("✗ Failed to start web server")
			return
		}
	}()

	// Wait for interrupt signal to gracefully shutdown the server with
	// a timeout of 10 seconds.
	quit := make(chan os.Signal)
	signal.Notify(quit, os.Interrupt)
	<-quit
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	if err := e.Shutdown(ctx); err != nil {
		log.WithError(err).Fatal("✗ Failed to gracefully shutdown server")
	}
}

// Used for pretty printing addresses.
func pprintAddr(addr string) string {
	parts := strings.Split(addr, ":")
	if len(parts) == 1 {
		if strings.HasPrefix(addr, ":") {
			parts = append([]string{"localhost"}, parts[0])
		} else {
			parts = append(parts, "80")
		}
	}
	return strings.Join(parts, ":")
}
