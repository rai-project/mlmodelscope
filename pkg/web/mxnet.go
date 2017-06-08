package web

import (
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"github.com/k0kubun/pp"
	"github.com/labstack/echo"
	"github.com/rai-project/dlframework/mxnet/agent"
	"google.golang.org/grpc/grpclog"
)

func wrappedMxnetGrpc() (echo.HandlerFunc, error) {
	server := agent.Register()
	grpclog.SetLogger(log.WithField("subpkg", "grpclog"))
	wrappedGrpc := grpcweb.WrapServer(server)
	pp.Println(grpcweb.ListGRPCResources(server))
	return echo.WrapHandler(wrappedGrpc), nil
}
