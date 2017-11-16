<img src="images/license.png"
    width="30%" height="30%">

# Curso Full Stack Developer

## Octava iteración: grilla de horarios

## "Esto a mí no me sirve"

El usuario ve la aplicación y nos recibe con su tan trillada frase: "Pero ¿y cómo veo yo los horarios de las charlas y las salas en una grilla?"

Ups, bueno, todos nos equivocamos.

"Igual está lindo", nos dice guiñándonos un ojo.

Bueno, tenemos trabajo

## Cambios en el modelo

Nos pide "una grilla" con el horario. No está hablando de la grilla como control sino como concepto del negocio. Para eso tenemos que agregar un concepto nuevo: el horario, y tenemos que pensar en ubicar cada charla dentro de una fila / columna. 

Podemos tener como columnas las salas y como filas los horarios. 

### Atributos de calidad de nuestro diseño

Ahora hay que tomar otra decisión: ¿cómo modelar un horario? y ¿necesitamos generar la sala como abstracción? Otra pregunta que aparece es "¿todas las charlas tienen la misma duración?", pregunta que no podemos contestar nosotros, sino **el usuario**, quien nos contesta "en principio sí, eso por ahora no me interesa". Esto da pie para numerosos comentarios: no creerle al usuario, hacerlo flexible de entrada tiene un costo y eso implica resignar otras cosas que el usuario valoraría más. Como además no es sencillo mostrar una grilla considerando horarios diferentes, vamos a elegir simplificar nuestro modelo y decir que cada charla tiene un horario asignado.

Es decir, poniendo en la balanza muchos atributos de calidad de nuestro diseño elegimos

- simplicidad
- velocidad de construcción

por sobre la 

- flexibilidad
- mantenibilidad

### Horarios

El horario vamos a mantenerlo como:

- una entidad separada (una colección más en Firebase), para facilitar la construcción de la grilla sin tener que recorrer las charlas
- pero también vamos a embeber el valor dentro de la charla, porque también evita tener que hacer JOINs para obtener el dato del horario de una charla particular.  

## Salones

Lo mismo haremos con los salones. Tendremos:

- una entidad separada para facilitar la construcción de las columnas
- y vamos a embeber los datos del salón

## Diagrama de arquitectura

![](images/iteracion7.png)

En el lado cliente no hay modificaciones. 

Del lado del server tenemos algunos cambios: 

- talksService ahora permite dar de alta una charla, para lo cual queremos agregar validaciones: deben ingresarse título, autor y sala donde se realiza la conferencia. Esto nos lleva a modelar un objeto de dominio que llamamos Talk, que sabe validarse, si está ok la validación (una propiedad de lectura) y completar su información en base a un JSON. 

```javascript
export default class Talk {

    ...

    validate() {
        if (this.title == "") {
            this.errors.push("Debe ingresar título")
        }
        if (this.author == "") {
            this.errors.push("Debe ingresar autor")
        }
        if (this.room == "") {
            this.errors.push("Debe ingresar sala")
        }
    }

    get ok() {
        return this.errors.length == 0
    }

    fromJSON(talkJSON) {
        this.author = talkJSON.author
        this.title = talkJSON.title
        this.room = talkJSON.room
    }
} 
```

La aparición del objeto Talk simplifica la sincronización con Firebase (se minimiza la cantidad de líneas).

```javascript
export default class TalksService {
    
        constructor() {
            this.talks = []
            this.db = db.collection("talks")
            this.db.on("value", snap => {
                this.talks = []
                snap.forEach(snapTalk => {
                    const talk = new Talk(snapTalk.val())
                    talk.id = snapTalk.key
                    this.talks.push(talk)
                })
            })
        }

        insert(talkJSON) {
            const talk = new Talk(talkJSON)
            talk.validate()
            if (talk.ok) {
                this.db.push(talk)
            }
            return talk
        }
```

- a su vez, aparece un nuevo endpoint: un método POST a la URL /api/talks donde recibimos en el body un JSON. El procesamiento en sí lo delegamos a talkService, pero además devolvemos un JSON con la respuesta (se dio de alta ok o se produjeron los siguientes errores)

```javascript
	api.post('/talks', (req, res) => {
		const processedTalk = talkService.insert(req.body)
		console.log("Processed talk", processedTalk)
		res.json(processResultFor(processedTalk))
	})
```

Pero ¿quién entiende processResultFor? No hay objeto , lo que refuerza la naturaleza híbrida de ECMA Script:

```javascript
function processResultFor(element) {
	return {
		"status": "processed",
		"statusOk": element.ok,
		"statusMessage": element.errors 
	}
}
```

es una función "sin dueño".


## Prueba desde un cliente REST

En nuestro caso utilizamos [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop), pero pueden usar Advanced REST Client o cualquier otra aplicación que dispare pedidos REST hacia nuestro server node. Es importante respetar:

- que el método sea POST
- la URL http://localhost:3001/api/talks
- en el BODY deben configurar el content-type como JSON (de otra manera no va a reconocerlo el body-parser que es el componente en node) y escribir el JSON con los valores para title, author y room

## Demo

En la demo vemos cómo al disparar la actualización desde Postman nos aparece mensajes de error o un ok y se visualiza en la aplicación React así como en Firebase:

![](images/demo.gif)

