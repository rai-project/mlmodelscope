package main

import (
	"github.com/rai-project/config"
)

var (
	// These fields are populated by govvv
<<<<<<< HEAD
	Version    = "0.3.7"
=======
	Version    = "0.3.5"
>>>>>>> 49e971621d5f36ebcbcba4bcae344be2e6492f17
	BuildDate  string
	GitCommit  string
	GitBranch  string
	GitState   string
	GitSummary string
)

func init() {
	config.App.Version = config.VersionInfo{
		Version:    Version,
		BuildDate:  BuildDate,
		GitCommit:  GitCommit,
		GitBranch:  GitBranch,
		GitState:   GitState,
		GitSummary: GitSummary,
	}
}
