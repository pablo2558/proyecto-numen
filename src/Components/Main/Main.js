import React from 'react'
import Descripcion from './Descripcion';
import OfertaProducto from './OfertaProducto';
import ProductosDestacados from './ProductosDestacados';
import Servicios from './Servicios';


const Main = () => {
  return (
    <div className="lg:pt-20">
      <div className="bg-[url(https://sinapsis.uao.edu.co/wp-content/uploads/sites/13/2019/10/Imagen-filtro-naranja.jpg)] p-20 ">
        <h1 className="text-4xl text-white text-left md:w-96 mb-8 font-bold">
          Tienda de informática en Rosario
        </h1>
        <h3 className="text-3xl text-white text-left md:w-96">
          ¡Encontrá insumos de PC, celulares y las mejores computadoras en
          nuestra tienda de informática! ¡Visitanos!
        </h3>
      </div>
      <Descripcion/>
      <OfertaProducto/>
      <ProductosDestacados/>
      <Servicios/>
      
    </div>
  );
}

export default Main;