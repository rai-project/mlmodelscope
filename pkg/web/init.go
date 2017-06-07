package web

import (
	"github.com/Sirupsen/logrus"
	"github.com/rai-project/config"
	"github.com/rai-project/logger"
	"github.com/rai-project/tracer"
	"github.com/rai-project/tracer/zipkin"
)

var (
	log *logrus.Entry
)

func init() {
	config.AfterInit(func() {
		log = logger.New().WithField("pkg", "carml/web")
		if tracer.Enabled() && tracer.Backend() == "zipkin" {
			tracer.SetGlobal(zipkin.NewTracer("webserver"))
		}
	})

}
