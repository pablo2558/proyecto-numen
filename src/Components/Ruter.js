import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Body from './Body'
import CartMap from './Carrito/CartMap'
import RedragonMap from './Carrito/RedragonMap'
import NavBar from './Header/NavBar'
import Porductos from './Productos/Porductos'
import Contacto from './Main/Contacto'
import PreguntasF from './Main/PreguntasF'


const Ruter = () => {
  return (
    <div className=''>
      <Router>
          <NavBar />
          <Routes>
              <Route path='/' element={<Body/>}/>
              <Route path='Productos' element={<Porductos/>}/>
              <Route path='Contacto' element={<Contacto/>}/>
              <Route path='PreguntasF' element={<PreguntasF/>}/>
              <Route path='Redragon' element={<RedragonMap/>}/>
              <Route path='Carrito' element={<CartMap/>}/>
          </Routes>
          
      </Router>
    </div>
  )
}

export default Ruter