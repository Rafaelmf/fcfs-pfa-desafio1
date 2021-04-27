CREATE A DOCKER BRIDGE NETWORK:
docker network create mynet

RUN MYSQL container:
docker run -p 8080:80 --network mynet -d rmfreitas/nginx-pfa-1

RUN MYSQL container:
docker run --name mysqldb --network mynet -d rmfreitas/mysql-pfa-1

RUN NODE container:
docker run --name backendnode --network mynet -d rmfreitas/node-pfa-1