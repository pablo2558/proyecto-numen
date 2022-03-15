import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Body from './Body'
import NavBar from './Header/NavBar'
import Porductos from './Productos/Porductos'
import Contacto from './Main/Contacto'


const Ruter = () => {
  return (
    <div>
      <Router>
          <NavBar/>
          <Routes>
              <Route path='/' element={<Body/>}/>
              <Route path='Productos' element={<Porductos/>}/>
              <Route path='Contacto' element={<Contacto/>}/>
          </Routes>
      </Router>
    </div>
  )
}

export default Ruter