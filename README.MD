
# nodeApp

nodeApp es un microservicio creado con distintas practicas a nivel de patrones de diseño, orden y calidad de código.

Posee Redis, Pubsub, MongoDB, consumo de api externa.


## Environment Variables

Para ejecutar este proyecto se debe crear un archivo .env con las siguientes variables de entorno.


`URL_DB`

`URL_DB_CACHE`

URL_DB: Es utilizado para la conexión con MongoDB

URL_DB_CACHE: Es utilizado para la conexión de Redis
## Deployment

Para desplegar este micro servicio se requiere MongoDB y Redis.

Si no deseas instalar estos requisitos en tu ambiente local te recomiendo usar Docker.

## Instalacion de Docker en Ubuntu

Muchas gracias a DigitalOcean por el siguiente tutorial:

https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04-es

## Comandos Docker
### MongoDB
```bash
docker run -d -p 27017:27017 --name my-mongo mongo:latest
```
```bash
docker start my-mongo
```
### Redis
```bash
  docker run -p 6379:6379 --name my-redis -d redis
```
```bash
  docker start  my-redis 
```

## Clonar Repositorio
```bash
  git clone https://github.com/mcarrenog/nodeApp.git
  cd nodeApp
```


## NPM
```bash
  npm i --legacy-peer-deps
```

## Ejecutar microservicio
```bash
  npm run dev
```

## Navegador

```bash
  http://localhost:8080/
```

## Screenshots

![Swagger ScreenShot](https://i.ibb.co/sF5Mbzh/2022-03-27-12-27.png)


## Authors

- [@mcarrenog](https://www.github.com/mcarrenog)

