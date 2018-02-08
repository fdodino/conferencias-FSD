// Base React Components
import React, { Component } from 'react'

// UI components
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import CharlasAppBar from './charlasAppBar'

// URL Mapping
import { withRouter } from "react-router-dom"

const style = {
    margin: 15,
}

class Login extends Component {

    state = {
        username: '',
        password: ''
    }

    login() {
        this.props.childProps.login(this.state.username)
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <CharlasAppBar
                    title="Login"
                    username={this.props.user}
                    page="login"
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
                <RaisedButton label="Login" primary={true} style={style} onClick={(event) =>
                    this.login()} />
            </div>
        )
    }

}

export default withRouter(Login)
