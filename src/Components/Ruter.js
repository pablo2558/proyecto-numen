import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Body from './Body'
import ShoppingCart from './Carrito/ShoppingCart'
import NavBar from './Header/NavBar'
import Porductos from './Productos/Porductos'

const Ruter = () => {
  return (
    <div>
      <Router>
          <NavBar/>
          <Routes>
              <Route path='/' element={<Body/>}/>
              <Route path='Productos' element={<Porductos/>}/>
              <Route path='Carrito' element={<ShoppingCart/>}/>
          </Routes>
      </Router>
    </div>
  )
}

export default Ruter