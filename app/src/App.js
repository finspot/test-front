import React, { Component } from 'react'
import styled from 'styled-components'
import logo from './assets/logo.png'

class App extends Component {
  render() {
    return (
      <Main>
        <div>
          <Header>
            <Logo src={logo} alt="logo" />
            <Title>Bienvenue sur le test front-end de Pretto</Title>
          </Header>
          <p>Vous trouverez toutes les instructions dans le README.md</p>
        </div>
      </Main>
    )
  }
}

export default App

const Main = styled.main`
  font-family: sans-serif;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
const Header = styled.header`
  height: 150px;
  padding: 24px;
`
const Logo = styled.img`
  height: 80px;
`
const Title = styled.h1`
  margin-top: 24px;
  font-size: 32px;
`
