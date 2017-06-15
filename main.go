package main

import (
	"github.com/pkg/profile"
	"github.com/rai-project/carml/cmd"
)

func main() {
	p := profile.Start(
		profile.MemProfile,
		// profile.CPUProfile,
		// profile.TraceProfile,
		profile.ProfilePath("."),
		profile.NoShutdownHook,
	)
	defer p.Stop()
	cmd.Execute()
}
