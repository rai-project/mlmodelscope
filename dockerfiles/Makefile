buildlocalppc:
	docker build . -f Dockerfile.ppc64le_mxnet -t carml/web:mxnet-ppc64le-gpu
buildlocalamd64gpu:
	docker build . -f Dockerfile.amd64_mxnet_gpu -t carml/web:mxnet-amd64-gpu
buildlocalamd64cpu:
	docker build . -f Dockerfile.amd64_mxnet_cpu -t carml/web:mxnet-amd64-cpu

buildlocalamd64: buildlocalamd64cpu buildlocalamd64gpu
