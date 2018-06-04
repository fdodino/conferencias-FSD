<img src="images/license.png"
    width="30%" height="30%">

# Curso Full Stack Developer

## Cuarta iteración: agregando el application server Node

En esta iteración agregaremos un application server en ES6 llamado **NodeJS**, que hasta ahora habíamos utilizado para descargar dependencias y construir el proyecto ReactJS (mediante el node package manager o _npm_).

## Tareas de un application server

- Provee un ambiente donde corren las aplicaciones. Este ambiente ya lo conocen: es una Virtual Machine de Javascript
- Escucha pedidos en un puerto y responde a esos pedidos. Podemos enviar pedidos GET, POST, PUT y DELETE según la terminología REST, y nos devuelve diferentes tipos de respuesta: por lo general JSON, pero también HTML o cualquier otro formato que un navegador entienda.
- Por lo general provee algún mecanismo para convertir una ruta o _URL_ en código que un objeto (en este caso Javascript) pueda responder
- Nosotros vamos a implementar esa respuesta

## Primeros pasos con NodeJS

Para tener un servidor NodeJS en un proyecto desde cero basta con crear un directorio vacío y luego ejecutar

```bash
$ cd directorioDelProyecto
$ npm init
$ sudo npm install -g nodejs express body-parser --save
```

Te dejamos [un tutorial muuuy tranquilo para que practiques en tu casa](https://www.youtube.com/watch?v=U8XF6AFGqlc)

También tenés [este proyecto](https://github.com/babel/example-node-server) que te cuenta paso a paso cómo iniciarte.

# La nueva arquitectura

A partir de esta iteración tendremos dos proyectos diferentes:

- el **Front End**, nuestro proyecto conocido hasta ahora, ubicado en el directorio _client_ y que contiene la parte de presentación (o interfaz de usuario) hecha en ReactJS
- el **Back End**, que constituye una capa de servicios que se acceden mediante una URL y se ubica en el directorio _server_

Cada uno de estos proyectos correrá en una VM separada, en este caso ambas coinciden y son ambientes de objetos javascript provistos por NodeJS:

![](images/iteracion4.png)


En el FrontEnd tenemos un cambio importante:

- el **TalkService** ya no tiene la información de las charlas, sino que cada vez que buscamos dispara un pedido hacia el servidor, donde finalmente se trae la lista de charlas en formato JSON. Este pedido no es sincrónico, sino que se lanza como una **promise** o pedido asincrónico que requiere dos pasos hasta finalmente obtener el resultado. Para disparar el pedido aprovechamos la instrucción fetch que viene con ES6:

```javascript
export default class TalksService {

    ...

    filter(value) {
        return fetch("/api/talks/" + value)
    }
```


- Como consecuencia de esto el componente **TalkSearch** necesita esperar para cambiar su estado (_state_) ya que ahora hay dos momentos: 1) el usuario escribe algo en el campo de búsqueda y se pide al server la información de las charlas posibles, 2) la información pedida llega al nodo cliente y React está listo para volver a renderizar la grilla.

```javascript
export default class TalksSearch extends Component {
    ...

    searchTalks(e) {
        const searchValue = e.target.value
        talksService.filter(searchValue)
            .then(response => response.json() )
            .then(talks => {
                this.setState({ 
                    searchValue: searchValue ,
                    talks: talks
                })
            })
            .catch(err => this.setState({ 
                searchValue: searchValue ,
                talks: []
            }))
        }
```

La sintaxis .then().then().catch() permite encadenar pedidos asincrónicos o promises de una manera elegante.

## Proyecto NodeJS

Nos basamos en este proyecto _boilerplate_, que generamos a partir de una nueva carpeta _server_

https://github.com/developit/express-es6-rest-api

Haciendo algunas adaptaciones:

- la dependencia _resource-router-middleware_ es un tanto estricta y no nos sirve para poder buscar un valor que no es el identificador de una charla. Entonces la eliminamos.
- eliminamos los punto y coma innecesarios :smile: 
- nos traemos la definición **TalkService** al server. Este servicio es el que hasta la iteración anterior estaba en la VM cliente, y es la que sabe buscar las charlas.
- en el archivo index.js del directorio api, tenemos que _rutear_ una URL con el mensaje filter(searchValue) de talkService:

```javascript
	api.get('/talks/:searchValue', (req, res) => {
			const searchValue = req.params.searchValue || ""
			res.json(talkService.filter(searchValue))
		}
	)
```

## Variantes

- Podríamos tener dos proyectos en dos repositorios github por separado. Hemos unificado ambos proyectos para facilitar el seguimiento del tutorial.
- Podríamos tener un application server en PHP, Java, .NET o cualquier otra tecnología. Eso no cambia la forma de trabajo del proyecto Front End, que dispara pedidos asincrónicos vía http.

## Demo

La demo es igual que la iteración anterior, el usuario no notará demasiados cambios en la usabilidad:

![](images/demo.gif)

