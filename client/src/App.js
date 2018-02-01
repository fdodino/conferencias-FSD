import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

// Material UI - Theme 
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import MainContainer from './components/mainContainer'

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

export default App
