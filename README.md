Executar os comandos listados abaixo:

1. CREATE A DOCKER BRIDGE NETWORK:
```bash
docker network create mynet
```
1. RUN MYSQL container:
```bash
docker run --name mysqldb --network mynet -d rmfreitas/mysql-pfa-1
```
3. RUN NODE container:
```bash
docker run --name backendnode --network mynet -d rmfreitas/node-pfa-1
```
4. RUN MYSQL container:
```bash
docker run -p 8080:80 --network mynet -d rmfreitas/nginx-pfa-1
```