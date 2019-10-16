buildlocalppc:
	docker build . -f Dockerfile.ppc64le -t carml/web:ppc64le
buildlocalamd64:
	docker build . -f Dockerfile.amd64 -t carml/web:amd64
pushlocalamd64:
	docker tag carml/web:amd64 carml/web:amd64-latest
	docker push carml/web:amd64
	docker push carml/web:amd64-latest
