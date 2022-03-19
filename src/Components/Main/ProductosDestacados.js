import React from 'react'
import Tarjeta from './Tarjeta'


const ProductosDestacados = () => {
  return (
    <div className=" bg-gray-800 p-10  text-center ">
      <p className='text-white text-xl'>
        En esta sección te presentamos nuestras ofertas de tiempo limitado en
        productos informáticos. Descuentos en insumos de las primeras marcas,
        celulares, PCs, ¡y mucho más! Variedad, precio y calidad en un solo
        lugar.
      </p>
      <div className='bg-orange-800 p-4 text-center text-3xl mt-16'>
       <p className='text-white'>PRODUCTOS DESTACADOS</p>
    </div>
    <div className='flex justify-evenly flex-wrap'>
       <Tarjeta/>
       <Tarjeta/>
    </div>
    </div>
  )
}

export default ProductosDestacados