<img src="images/license.png"
    width="30%" height="30%">

# Curso Full Stack Developer

## Cuarta iteración: agregando el application server Node

```bash
$ sudo npm install -g nodejs express body-parser --save
```

Lamentablemente, no todos los proyectos tienen todo lo que necesitamos. En este caso la dependencia _resource-router-middleware_ es un tanto estricta y no permite pasarle un valor a buscar en lugar de un id de un elemento existente (en nuestro caso una charla). Tampoco queremos trabajar con un middleware, por lo tanto simplificamos un poco las definiciones y eliminamos los punto y coma innecesarios :smile:.

## Servidor Node

https://github.com/developit/express-es6-rest-api

## Demo

![](images/demo.gif)

## Diagrama de la arquitectura

![](images/iteracion3.png)
