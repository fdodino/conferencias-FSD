# Curso Full Stack Developer

En la segunda iteración, nos dimos cuenta de algunas cosas

- la lista se ve horrible (jeje). Para eso agregamos Material UI Design que nos ayudará a maquetar la aplicación.

```bash
npm install -save material-ui
```

- ListView es un nombre muy genérico, está mostrando siempre charlas. Debemos cambiar ese nombre para adaptarlo a un componente menos general. Después de todo es nuestra primera incursión en React, no es justo que nos obliguen a modelar componentes genéricos.

# Cómo mejorar el look & feel

Una vez instalado material-ui tenemos una página que nos cuenta muy bien cómo usarlo:

http://www.material-ui.com

* Para que funcione debemos definir un _Theme_ ([acá te cuenta cómo definirlo](http://www.material-ui.com/#/customization/themes))

* En particular cada película la queremos mostrar como una _Card_, eso se puede ver en [esta página](http://www.material-ui.com/#/components/card) (hay que hacer click sobre los símbolos ```<>``` para ver el código)

