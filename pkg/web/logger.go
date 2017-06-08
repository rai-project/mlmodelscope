package web

import (
	"io"

	"github.com/sirupsen/logrus"
	"github.com/davecgh/go-spew/spew"
	glog "github.com/labstack/gommon/log"
)

type echoLogger struct {
	*logrus.Entry
}

func (l *echoLogger) SetPrefix(string) {
}
func (l *echoLogger) Prefix() string {
	return ""
}
func (l *echoLogger) SetLevel(level glog.Lvl) {
	l.Entry.Level = logrus.Level(level)
}
func (l *echoLogger) Level() glog.Lvl {
	return glog.Lvl(l.Entry.Level)
}
func (l *echoLogger) Output() io.Writer {
	return l.Entry.Writer()
}
func (l *echoLogger) SetOutput(w io.Writer) {
	l.Entry.Logger.Out = w
}
func (l *echoLogger) Printj(msg glog.JSON) {
	l.Entry.Print(spew.Sprint(msg))
}
func (l *echoLogger) Debugj(msg glog.JSON) {
	l.Entry.Debug(spew.Sprint(msg))
}
func (l *echoLogger) Infoj(msg glog.JSON) {
	l.Entry.Info(spew.Sprint(msg))
}
func (l *echoLogger) Errorj(msg glog.JSON) {
	l.Entry.Error(spew.Sprint(msg))
}
func (l *echoLogger) Warnj(msg glog.JSON) {
	l.Entry.Warn(spew.Sprint(msg))
}
func (l *echoLogger) Fatalj(msg glog.JSON) {
	l.Entry.Fatal(spew.Sprint(msg))
}
func (l *echoLogger) Panicj(msg glog.JSON) {
	l.Entry.Panic(spew.Sprint(msg))
}
