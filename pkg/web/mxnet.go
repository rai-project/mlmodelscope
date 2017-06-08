package web

import (
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"github.com/labstack/echo"
	"github.com/rai-project/dlframework/mxnet/agent"
	"google.golang.org/grpc/grpclog"
)

func wrappedMxnetGrpc() (echo.HandlerFunc, error) {
	server := agent.Register()
	wrappedGrpc := grpcweb.WrapServer(server)
	grpclog.SetLogger(log.WithField("subpkg", "grpclog"))
	return echo.WrapHandler(wrappedGrpc), nil
}
