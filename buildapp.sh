SERVER_APP_ASSET=/e/app/server/
SERVER_MOUNT=//e/app/server/
SERVER_APP_NAME=serverapp
SERVER_APP_LINK=mongodb

docker stop ${SERVER_APP_NAME}
docker rm ${SERVER_APP_NAME}

docker build ${SERVER_APP_ASSET} -t serverapp --build-arg env=dev
docker run -p 3000:3000 --name ${SERVER_APP_NAME} -v ${SERVER_MOUNT}://usr/src/serverapp -e "NODE_ENV=development" --link ${SERVER_APP_LINK} -d serverapp

CLIENT_APP_ASSET=/e/app/client/
CLIENT_MOUNT=//e/app/client/
CLIENT_APP_NAME=clientapp
CLIENT_APP_LINK=${SERVER_APP_NAME}

docker stop ${CLIENT_APP_NAME}
docker rm ${CLIENT_APP_NAME}

docker build ${CLIENT_APP_ASSET} -t clientapp --build-arg env=dev
docker run -p 4200:4200 --name ${CLIENT_APP_NAME} -v ${CLIENT_MOUNT}://ng-app -e "NODE_ENV=development" --link ${CLIENT_APP_LINK} -d clientapp

WATCHTOWER_NAME=watchtower

docker stop ${WATCHTOWER_NAME}
docker rm ${WATCHTOWER_NAME}

docker run -d --name ${WATCHTOWER_NAME} -v //var/run/docker.sock://var/run/docker.sock v2tec/watchtower