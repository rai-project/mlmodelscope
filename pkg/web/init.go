package web

import (
	"github.com/rai-project/config"
	"github.com/rai-project/logger"
	"github.com/rai-project/tracer"
	"github.com/rai-project/tracer/zipkin"
	"github.com/sirupsen/logrus"
)

var (
	log *logrus.Entry
)

func init() {
	config.AfterInit(func() {
		log = logger.New().WithField("pkg", "carml/web")
		if tracer.Enabled() && tracer.Backend() == "zipkin" {
			t, err := zipkin.New("webserver")
			if err != nil {
				log.WithError(err).Error("failed to create a new zipkin tracer")
				return
			}
			tracer.SetStd(t)
		}
	})

}
