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

## Documentación del router de react

- [Primer uso básico](https://www.tutorialspoint.com/reactjs/reactjs_router.htm)
- [Explicación más detallada partiendo de un ejemplo simple](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf)
- [La guía completa del router](https://www.sitepoint.com/react-router-v4-complete-guide/)


## Demo de esta iteración

Vemos cómo queda la aplicación en ReactJS:

![](images/demo.gif)


## Diagrama de arquitectura

![](images/iteracion11.png)

En el archivo App.js cambiamos el componente raíz a MainContainer:

```javascript
class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Ciclo de Conferencias 2018</h1>
          </header>
          <MainContainer />
        </div>
      </MuiThemeProvider>
    )
  }
}
```

Y el MainContainer tiene las definiciones de las rutas: la grilla de charlas y ahora el login

```javascript
export default class MainContainer extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={TalksSearch} />
                    <Route exact path='/login' component={Login} />
                </Switch>
            </Router>
        )
    }

}
```
