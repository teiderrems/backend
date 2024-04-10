compile:
	$(shell `docker build -t backend:dev .;docker container rm backend;docker run -it --name backend --mount type=bind,source=./src,target=/app/src -p 5000:80 --network=host  backend:dev`)