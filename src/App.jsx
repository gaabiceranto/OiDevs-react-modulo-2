import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar } from './components/navbar'
import { Title } from './components/Title'
import { NavItem } from './components/Nav-item'

function App() {
  const itens = [
    "Página Inicial",
    "Pesquisa",
    "Explorar",
    "Reels",
    "mensagens",
    "Notificações",
    "Criar",
    "Perfil",
  ]
  
  return(
    <>
    <Navbar>
      <Title/>
      {itens.map((item) => (
        <NavItem key= {item} text={item} />
      ))}
    </Navbar>

    </>
  )
}

export default App
