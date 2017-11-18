<img src="images/license.png"
    width="30%" height="30%">

# Curso Full Stack Developer

## Décima iteración: grilla de horarios - Parte III

En esta oportunidad vamos a mejorar el look & feel del lado del cliente, para lo cual tenemos que reestructurar nuestro front-end. Ya no podemos mostrar una lista de elementos, sino que tendremos una Table, o grilla con las charlas. Como hemos contado anteriormente:

- el encabezado de las columnas se genera en base a la lista _rooms_ que viene dentro del json que el servicio REST devuelve
- cada fila se forma con una primera línea de encabezado: _schedule_ dentro de _scheduleDTO_, y luego tenemos n columnas adicionales que se forma en base a la lista de charlas (_talks_ dentro de _scheduleDTO_). Hay que permitir que haya valores no definidos en la lista (huecos) para dejar en blanco esa posición en la grilla.

## Nueva jerarquía de componentes en ReactJS

La nueva jerarquía propuesta es:

* **TalkSearch (modificado)**: guarda en el estado el valor a buscar, el mensaje de error y el grilla con los resultados
    - ErrorMessage: muestra el mensaje de error por un tiempo
    - **TalkList (modificado)**: arma la tabla
        - **RoomComponent (nuevo)**: sabe mostrar una sala, ahora aprovechando el color definido para cada sala
        - **ScheduleComponent (nuevo)**: sabe mostrar el horario, con un ícono descriptivo y el rango horario previsto
        - **TalksColumn (nuevo)**: sabe mostrar la lista de charlas, tantas como vengan en scheduleDTO.talks. Delega a TalkCard
            - **TalkCard (modificado)**: sabe mostrar una charla, ahora no con un Card, sino con un Paper con borde redondeado y una Toolbar.

## Demo de esta iteración

La aplicación en React tiene ese pequeño cambio:

![](images/demo2.gif)

## Diagrama de arquitectura

![](images/iteracion8.png)


