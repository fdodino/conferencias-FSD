import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

const style = {
    margin: 15,
}

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    // https://medium.com/technoetics/create-basic-login-forms-using-create-react-app-module-in-reactjs-511b9790dede
    // https://serverless-stack.com/chapters/create-a-login-page.html
    // https://vladimirponomarev.com/blog/authentication-in-react-apps-creating-components
    // https://medium.com/the-many/adding-login-and-authentication-sections-to-your-react-or-react-native-app-7767fd251bd1
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