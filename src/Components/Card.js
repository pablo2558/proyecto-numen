import React from 'react';

const Card = () => {
    return (
        <div className="h-screen flex items-center">
          <card className="rounded-lg border-orange-600 border-4 bg-black ">
            <img src="https://as01.epimg.net/showroom/imagenes/2018/08/30/portada/1535654183_505131_1535661107_sumario_normal.jpg" className="rounded-t-lg w-96 hover:opacity-100"  />
            <div className="text-center rounded-b-lg">
               <a href="" className="text-orange-700 text-xl font-bold pt-6">Disco WD Blue 1TB 7200 </a>
              <p className="text-green-600 text-sm font-light pt-6">
                En Stock
              </p>
              <p className="text-white text-lg font-light pt-6 "> Precio Efectivo $2000 </p>
              <p className="text-white text-lg font-light pt-6 "> Precio Contado $1500 </p>
              <button className="border border-white rounded-lg px-4 text-white font-semibold mt-6 mb-6 bg-orange-600 hover:bg-orange-700 ">
                Agregar al carrito
              </button>
            </div>
          </card>
        </div>
    );
  };
  
  export default Card;
  