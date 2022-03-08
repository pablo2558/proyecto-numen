import React from 'react'

const Card = ({title, precio, precioContado, image}) => {
    return (
      <div className=" text-center lg:pt-40 md:pt-40 sm:pt-30">
        <figure className="rounded-lg border-orange-600 border-4 bg-black w-96">
          <img src="https://as01.epimg.net/showroom/imagenes/2018/08/30/portada/1535654183_505131_1535661107_sumario_normal.jpg" alt="imagen" />
          <div>
            <a href="#" className="text-orange-700 text-xl font-bold pt-6">
              {title}
            </a>
            <ul>
              <li className="text-green-600 text-sm font-light pt-4">En Stock</li>
              <li className="text-white text-lg font-light pt-6">{precio}</li>
              <li className="text-white text-lg font-light pt-6">
                {precioContado}
              </li>
            </ul>
            <button className="border border-white rounded-lg px-4 text-white font-semibold mt-6 mb-6 bg-orange-600 hover:bg-orange-700 ">
              Agregar al carrito
            </button>
          </div>
        </figure>
      </div>
    );
  };
  
  export default Card;