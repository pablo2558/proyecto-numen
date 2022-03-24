import React from 'react'
import CartItems from './CartItems';
import { CartContainer } from './ShoppingCart';
import { useContext } from 'react';


const CartMap = () => {
    const {cart, deleteFromCart, clearCart} = useContext(CartContainer)

    const total =  cart?.reduce((previus, current) => previus + current.quantity * current.price, 0);
  return (
    <div className='lg:pt-40 border border-solid border-red-900'>
      <h3>Item</h3>
      <div>
        {cart.map((item, index) => (
          <CartItems
            key={index}
            data={item}
            deleteFromCart={deleteFromCart}
          />
        ))}
      </div>
      <div className='text-right '>
        <button onClick={clearCart} className="border border-white rounded-lg px-4 text-white font-semibold mt-6 mb-6 bg-orange-600 hover:bg-orange-700 " >Limpiar Carrito</button>
        <h2>Total: ${total} </h2>
      </div>
    </div>
  );
}

export default CartMap