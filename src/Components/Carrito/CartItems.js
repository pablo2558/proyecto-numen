
import React from 'react'

const CartItems = ({data, deleteFromCart, addToCart}) => {
  const {id, name, price, quantity} = data
  return (
    <div className=" border border-solid border-red-900 ">
      <h4> {name} </h4>
      <h5>$ {price}.00 x {quantity} total ${price * quantity}.00</h5>
      <button onClick={() => deleteFromCart(id)} className=' border border-solid border-red-900 p-1'>Eliminar uno</button>
      <button onClick={() => deleteFromCart(id, true)} className='border border-solid border-red-900 p-1'>Eliminar todos</button>
      <button onClick={() => addToCart(id)} className='border border-solid border-red-900 p-1'>Agregar</button>
    </div>
  );
}

export default CartItems