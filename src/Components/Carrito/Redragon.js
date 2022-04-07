import React from 'react'

const Redragon = ({data, addToCart}) => {
    const {name, price, foto} = data
  return (
    <div className="mt-10 w-96 text-center">
      <figure className="rounded-lg border-orange-600 border-4 bg-black">
      <img src={foto} alt="imagen" />
      <div>
      <a href="#" className="text-orange-700 text-xl font-bold pt-6">
            {name}
          </a>
          <ul>
            <li className="text-green-600 text-sm font-light pt-4">En Stock</li>
            <li className="text-white text-lg font-light pt-6">PRECIO ${price}.00 </li>
          </ul>
          <button className="border border-white rounded-lg px-4 text-white font-semibold mt-6 mb-6 bg-orange-600 hover:bg-orange-700" onClick={() => addToCart(data)} >
            Agregar al carrito
          </button>
      </div>
      </figure>
    </div>
  )
}

export default Redragon