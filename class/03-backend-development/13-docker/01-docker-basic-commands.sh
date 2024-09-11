// Check Docker Version
docker version

// Check Docker Image List
docker image ls

// Pull Image from Docker Registry
docker image pull image_name:version

// Remove Image
docker image rm image_name:version
// Incase conflict use --force flag
docker image rm --force image_name:version 

// Check Container List
docker container ls
docker container ls -a

// Make a Container
docker container create --name container_name image_name:version

// Start a Container
docker container start container_id/container_name

// Stop Container
docker container stop container_name

// Delete Container
docker container rm container_name

// Logs Container Log
docker container logs container_name
docker container logs -f container_name

// Execute Command Inside a Container
docker image pull redis:latest
docker container create --name redis-first redis:latest
docker container start redis-first
docker container exec -i -t redis-first /bin/bash
docker container exec -i -t redis-first bash
-- redis-cli
docker container exec -i -t redis-first redis-cli

// Port Forwarding
docker image pull nginx:latest
docker container create --name nginx-second --publish 8080:80 nginx:latest
docker container start nginx-second
docker container stop nginx-second

// Environment Variable
docker image pull mongo:latest
docker container create --name mongo-example --publish 27017:27017 --env MONGO_INITDB_ROOT_USERNAME=nadhif --env  MONGO_INITDB_ROOT_PASSWORD=mongopass mongo:latest
docker container start mongo-example
docker exec -it mongo-example mongosh -u nadhif -p mongopass --authenticationDatabase admin

// Resource Limit
docker stats
docker container create --name nginx-small --memory 100m --cpus 0.1 --publish 8080:80 nginx:latest

# ------------------------------- Docker Volume ------------------------------ #
docker volume ls

docker volume create mongo-data

docker container create --name mongo-volume --publish 27018:27017 --mount "type=volume,source=mongo-data,destination=/data/db" --env MONGO_INITDB_ROOT_USERNAME=nadhif --env MONGO_INITDB_ROOT_PASSWORD=mongopass mongo:latest

docker container start mongo-volume

docker exec -it mongo-volume mongosh -u nadhif -p mongopass --authenticationDatabase admin

// MongoDB Commands
use mongo_docker
db.user.insertOne({name: "Nadhif"})
db.user.find()

docker container stop mongo-volume

docker container rm mongo-volume

docker container create --name mongo-volume --publish 27018:27017 --mount "type=volume,source=mongo-data,destination=/data/db" --env MONGO_INITDB_ROOT_USERNAME=nadhif --env MONGO_INITDB_ROOT_PASSWORD=mongopass mongo:latest

docker exec -it mongo-volume mongosh -u nadhif -p mongopass --authenticationDatabase admin

// MongoDB Commands
use mongo_docker
db.user.find()