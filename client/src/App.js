import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

// Material UI - Theme 
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// URL mapping
import Routes from './components/routes'
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  constructor() {
    super()
    console.log("GENERANDO NUEVO STATE")
    this.state = {
      user: ''
    }
  }

  login = (user) => {
    this.setState({ user: user })
    console.log("El usuario " + user + " ingreso al sistema")
  }

  render() {
    const childProps = {
      user: this.state.user,
      login: this.login
    }

    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Ciclo de Conferencias 2018</h1>
            </header>
            <Routes childProps={childProps} />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    )
  }
}

export default App