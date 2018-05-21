MONGO_CONTAINER=mongodb

docker stop ${MONGO_CONTAINER}
docker rm ${MONGO_CONTAINER}
docker run --name ${MONGO_CONTAINER} -d mongo