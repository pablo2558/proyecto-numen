import React from 'react'
import { Style_Table } from '../Carrito/style';

const CartItems = ({data, deleteFromCart, addToCart}) => {
  const {id, name, price, quantity} = data
  return (
    <div className=" border border-solid border-red-900">
      <table className="w-screen">
        <tr>
          <th className={Style_Table} >Item</th>
          <th className={Style_Table} >Precio</th>
          <th className={Style_Table} >Total</th>
        </tr>
        <tr>
          <td className={Style_Table} ><h4> {name} </h4></td>
          <td className={Style_Table} ><h5> {price}.00 x {quantity} </h5></td>
          <td className={Style_Table}><h5> {price * quantity}.00 </h5></td>
        </tr>
      </table>
      {/* <h4> {name} </h4>
      <h5>$ {price}.00 x {quantity} total ${price * quantity}.00</h5> */}
      <button onClick={() => deleteFromCart(id)} className='border border-white rounded-lg px-4 text-white font-semibold mt-6 mb-6 bg-orange-600 hover:bg-orange-700 '>Eliminar uno</button>
      <button onClick={() => deleteFromCart(id, true)} className='border border-white rounded-lg px-4 text-white font-semibold mt-6 mb-6 bg-orange-600 hover:bg-orange-700'>Eliminar todos</button>
      <button onClick={() => addToCart(id)} className='border border-white rounded-lg px-4 text-white font-semibold mt-6 mb-6 bg-orange-600 hover:bg-orange-700'>Agregar</button>
    </div>
  );
}

export default CartItems