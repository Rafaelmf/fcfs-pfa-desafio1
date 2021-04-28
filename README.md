> Provendo dados de um banco mysql através de uma API node e expondo o serviço atrvés de um proxy reverso (nginx)

<p align="center">
  <img align="center" src="./.git/isoflow.png" width="600" border="0">
</p>

# 📘 Infos

**O desafio** 

```
Crie um programa utilizando sua linguagem de programação favorita que faça uma listagem simples do nome de alguns módulos do curso Full Cycle os trazendo de um banco de dados MySQL. Gere a imagem desse container e a publique no DockerHub.

Gere uma imagem do nginx que seja capaz que receber as solicitações http e encaminhá-las para o container.

Crie um repositório no github com todo o fonte do programa e das imagens geradas.

Crie um arquivo README.md especificando quais comandos precisamos executar para que a aplicação funcione recebendo as solicitações na porta 8080 de nosso computador. Lembrando que NÃO utilizaremos Docker-compose nesse desafio.
```


**Como rodar**

Executar os comandos listados abaixo:

1. Criando uma network do tipo bridge:
```bash
docker network create mynet
```
2. Executando o container MYSQL:
```bash
docker run --name mysqldb --network mynet -d rmfreitas/mysql-pfa-1
```
3. Executando o container Node Js:
```bash
docker run --name backendnode --network mynet -d rmfreitas/node-pfa-1
```
4. Executando o container Nginx:
```bash
docker run -p 8080:80 --network mynet -d rmfreitas/nginx-pfa-1
```



# 💻 Expected result