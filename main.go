package main

import (
	"github.com/pkg/profile"
	"github.com/rai-project/carml/cmd"
)

func pprof() {
	profile.Start(
		profile.MemProfile,
		// profile.CPUProfile,
		// profile.TraceProfile,
		profile.ProfilePath("."),
	)
}

func main() {
	if false {
		pprof()
	}
	cmd.Execute()
}
