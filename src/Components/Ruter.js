import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Body from './Body'
import CartMap from './Carrito/CartMap'
import RedragonMap from './Carrito/RedragonMap'
import NavBar from './Header/NavBar'
import Productos from './Productos/Productos'
import Contacto from './Main/Contacto'
import PreguntasF from './Main/PreguntasF'
import Footer from './Footer/Footer'


const Ruter = () => {
  return (
    <div className=''>
      <Router>
          <NavBar />
          <Routes>
              <Route path='/' element={<Body/>}/>
              <Route path='Productos' element={<Productos/>}/>
              <Route path='Contacto' element={<Contacto/>}/>
              <Route path='ComoComprar' element={<PreguntasF/>}/>
              <Route path='Redragon' element={<RedragonMap/>}/>
              <Route path='Carrito' element={<CartMap/>}/>
          </Routes>
          <Footer/>
      </Router>
    </div>
  )
}

export default Ruter