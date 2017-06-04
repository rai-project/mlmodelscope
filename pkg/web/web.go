package web

import (
	"fmt"
	"strings"

	"github.com/k0kubun/pp"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
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
	e.Use(middleware.GzipWithConfig(middleware.GzipConfig{
		Level: 5,
	}))
	e.Use(middleware.RequestIDWithConfig(middleware.RequestIDConfig{
		Generator: func() string {
			return uuid.NewV4()
		},
	}))
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

	// Setting up the termination timeout to 30 seconds.
	err := e.Start(addr)
	if err != nil {
		log.WithError(err).Errorln("✗ Failed to start web server")
		return
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
