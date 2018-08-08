import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenue sur le test front-end de Pretto</h1>
        </header>
        <p className="App-intro">Vous trouverez toutes les instructions dans le README.md</p>
      </div>
    )
  }
}

export default App
