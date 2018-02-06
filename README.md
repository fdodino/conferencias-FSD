<img src="images/license.png"
    width="30%" height="30%">

# Curso Full Stack Developer

## 12° iteración: login

La pantalla de login ahora tendrá

- una application bar, que también se agrega al caso de uso "Grilla de charlas" para poder orientar al usuario en qué lugar está ubicado
- un texto para ingresar el usuario
- otro texto para ingresar la clave
- y un botón de submit

La lógica del botón está incompleta (si presionan verán un mensaje de error), pero la pantalla de login ya tiene un estado. Cada vez que ingresa un caracter en el usuario o contraseña se genera un nuevo estado con la vista actualizada.

## Documentación para profundizar

-  https://medium.com/technoetics/create-basic-login-forms-using-create-react-app-module-in-reactjs-511b9790dede
-  https://serverless-stack.com/chapters/create-a-login-page.html
-  https://vladimirponomarev.com/blog/authentication-in-react-apps-creating-components
-  https://medium.com/the-many/adding-login-and-authentication-sections-to-your-react-or-react-native-app-7767fd251bd1


## Demo de esta iteración

Vemos cómo queda la aplicación en ReactJS:

![](images/demo.gif)


## Diagrama de arquitectura

![](images/iteracion12.png)

Solo agregamos la app bar en TalkSearch.js y generamos la ventana de login bastante simple

```javascript
export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        return (
            <div>
                <AppBar
                    title="Login"
                />
                <TextField
                    hintText="Ingrese su usuario"
                    floatingLabelText="Usuario"
                    onChange={(event, newValue) => this.setState({ username: newValue })}
                />
                <br />
                <TextField
                    type="password"
                    hintText="Ingrese su clave"
                    floatingLabelText="Clave"
                    onChange={(event, newValue) => this.setState({ password: newValue })}
                />
                <br />
                <RaisedButton label="Login" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
            </div>
        )
    }

}
```