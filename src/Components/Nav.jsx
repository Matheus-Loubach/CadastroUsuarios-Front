import React from 'react'
import { NavLink } from 'react-router-dom'
import '../ComponetsCSS/Nav.css'

const Nav = () => {
  return (
    <div className='container_nav'>
      <header>
        <h1>Cadastro de Funcionários</h1>
      </header>
      <nav>
        <ul>
          <li><NavLink to="/" activeclassname="active">Cadastrar</NavLink></li>
          <li><NavLink to="/Users" activeclassname="active">Listar Usuarios</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav