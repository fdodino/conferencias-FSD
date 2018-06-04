import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

// Material UI - Theme 
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// Custom UI Components
import TalksList from "./components/talksList"

// Custom Services
import TalksService from "./services/talksService"

// https://daveceddia.com/create-react-app-express-production/
class App extends Component {

  
  render() {
    const talksService = new TalksService()
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Ciclo de Conferencias 2018</h1>
          </header>
          <TalksList items={talksService.findAll()}/>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
