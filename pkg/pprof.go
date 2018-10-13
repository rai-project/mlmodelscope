package web

import (
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	"net/http"
	"net/http/pprof"
	"os"
	"runtime"
	"runtime/debug"
	rpprof "runtime/pprof"
	"time"

	"github.com/bugsnag/osext"
	"github.com/labstack/echo"
	"github.com/rai-project/config"
)

func pprofRoutes(e *echo.Echo) error {
	e.GET("/debug/pprof/", echo.WrapHandler(http.HandlerFunc(pprof.Index)))
	e.GET("/debug/pprof/heap", echo.WrapHandler(pprof.Handler("heap")))
	e.GET("/debug/pprof/goroutine", echo.WrapHandler(pprof.Handler("goroutine")))
	e.GET("/debug/pprof/block", echo.WrapHandler(pprof.Handler("block")))
	e.GET("/debug/pprof/threadcreate", echo.WrapHandler(pprof.Handler("threadcreate")))
	e.GET("/debug/pprof/cmdline", echo.WrapHandler(http.HandlerFunc(pprof.Cmdline)))
	e.GET("/debug/pprof/profile", echo.WrapHandler(http.HandlerFunc(pprof.Profile)))
	e.GET("/debug/pprof/trace", echo.WrapHandler(http.HandlerFunc(pprof.Trace)))
	e.GET("/debug/pprof/symbol", echo.WrapHandler(http.HandlerFunc(pprof.Symbol)))
	e.GET("/debug/pprof/memprofile", echo.WrapHandler(http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
		w.Header().Set("Content-Type", "application/octet-stream")
		rpprof.WriteHeapProfile(w)
	})))
	e.GET("/debug/pprof/heapdump", echo.WrapHandler(http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
		w.Header().Set("Content-Type", "application/octet-stream")

		// we can not write the heap-dump directly to the network socket,
		// so write it down to disk first.
		file, err := ioutil.TempFile(config.App.TempDir, "heapdump")
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		// cleanup after ourselves
		defer os.Remove(file.Name())
		defer file.Close()

		// write the dump to a file
		debug.WriteHeapDump(file.Fd())

		// looks good, serve the file.
		filename := fmt.Sprintf("heapdump-%s.heap", time.Now().Format("20060102-150405"))
		w.Header().Set("Content-Disposition", "attachment; filename="+filename)

		file.Seek(0, os.SEEK_SET)
		io.Copy(w, file)
	})))

	// also expose the currently used binary - this simplifies profiling.
	if exe, err := osext.Executable(); err == nil {
		e.GET("/debug/pprof/exe", echo.WrapHandler(http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
			http.ServeFile(w, req, exe)
		})))
	}

	e.GET("/debug/gc/run", echo.WrapHandler(http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
		start := time.Now()

		// do a gc now.
		runtime.GC()

		w.WriteHeader(http.StatusOK)
		w.Write([]byte(fmt.Sprintf("gc took %s", time.Since(start))))
	})))

	e.GET("/debug/gc/stats", echo.WrapHandler(http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
		var stats struct {
			GarbageCollectorStats debug.GCStats
			MemStats              runtime.MemStats
		}

		debug.ReadGCStats(&stats.GarbageCollectorStats)
		runtime.ReadMemStats(&stats.MemStats)

		writeJSON(w, http.StatusOK, stats)
	})))

	return nil
}

// marshals the given value to json and writes the result to the response.
func writeJSON(w http.ResponseWriter, status int, value interface{}) {
	body, err := json.Marshal(value)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	w.Write(body)
}
