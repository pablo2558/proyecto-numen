import React from 'react'
import ProductMap from '../Carrito/ProductMap'
import { Barrita } from './style'

const Productos = () => {
  return (
    <div className=' ml-6 lg:flex md:flex md:grid-cols-1'>
        <div className="lg:pt-40 md:pt-40 sm:pt-40 pt-40">
            <ul >
               <li className={Barrita} >Componentes PC</li>
               <li className={Barrita} >Compuestos Tecnicos</li>
               <li className={Barrita} >Conectividad</li>
               <li className={Barrita} >Marcos</li>
               <li className={Barrita} >Modding</li>
               <li className={Barrita} >Monitores</li>
               <li className={Barrita} >OFERTA DEL DIA</li>
               <li className={Barrita} >OUTLET</li>
               <li className={Barrita} >Perifericos</li>
               <li className={Barrita} >PORDUCTOS DESTACADOS</li>
            </ul>
        </div>
        <div className='flex justify-evenly flex-wrap mb-8'>
          <ProductMap/>
        </div>
    </div>
  )
}

export default Productos