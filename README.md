<img src="images/license.png"
    width="30%" height="30%">

# Curso Full Stack Developer

## Undécima iteración: login

Para poder incorporar el login vamos a necesitar definir un **esquema de routing (ruteo)**

```bash
$ npm install react-router-dom --save-dev
```

El routing permite transformar una dirección (path o URI) ingresado en el browser en un componente React.

## Definición del ruteo de la aplicación

Ahora queremos tener dos páginas:

- la raíz ("/") mostrará la lista de charlas (componente TalksSearch)
- el login (path "/login") me lleva a la ventana de login, la primera vez, para luego visualizar las charlas del usuario en forma específica.

Ambas direcciones son **exactas**, porque no nos interesa pasarle parámetros dentro de la URI:

- http://localhost:3000/
- http://localhost:3000/login

En otros casos podríamos querer tener una URI para visualizar el detalle de una charla:

- http://localhost:3000/talk/2


## Demo de esta iteración

Vemos cómo queda la aplicación en ReactJS:

![](images/demo.gif)


## Diagrama de arquitectura

![](images/iteracion10.png)


