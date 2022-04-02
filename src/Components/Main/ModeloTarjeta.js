import React from 'react'

const ModeloTarjeta = () => {
  return (
    <div className="mt-10 w-96 text-center">
      <figure className="rounded-lg border-orange-600 border-4 bg-black ">
        <img src="https://as01.epimg.net/showroom/imagenes/2018/08/30/portada/1535654183_505131_1535661107_sumario_normal.jpg" alt="imagen" />
        <div>
          <a href="#"className="text-orange-700 text-xl font-bold pt-6">
            Gabinete Phanteks Enthoo Evolv
          </a>
          <ul>
            <li className="text-green-600 text-sm font-light pt-4">En Stock</li>
            <li className="text-white text-lg font-light pt-6">LISTA $4800</li>
            <li className="text-white text-lg font-light pt-6">
              PRECIO CONTADO $3500
            </li>
          </ul>
          <button className="border border-white rounded-lg px-4 text-white font-semibold mt-6 mb-6 bg-orange-600 hover:bg-orange-700 ">
            Agregar al carrito
          </button>
        </div>
      </figure>
    </div>
  )
}

export default ModeloTarjeta