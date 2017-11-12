import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import ListView from "./components/listView"
import TalksService from "./services/talksService"

// https://daveceddia.com/create-react-app-express-production/
class App extends Component {

  
  render() {
    const talksService = new TalksService()
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ciclo de Conferencias 2018</h1>
        </header>
        <ListView items={talksService.findAll()}/>
      </div>
    )
  }
}

export default App
