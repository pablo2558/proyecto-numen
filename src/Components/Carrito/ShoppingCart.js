import React from 'react'
import { TYPES } from './ShoppingActions'
import { useReducer } from 'react';
import { shoppingReducer, shoppingInitialState } from './shoppingReducer';
import Product from './Product';
import CartItems from './CartItems';

const ShoppingCart = () => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
    const {products, cart} = state

    const addToCart = (id) => {
      dispatch({type: TYPES.ADD_TO_CART,  payload: id})
    };

    const deleteFromCart = (id, all = false) => {
      if (all) {
        dispatch({type:TYPES.REMOVE_ALL_PRODUCTS, payload: id});
      } else {
        dispatch({type: TYPES.REMOVE_ONE_PRODUCT, payload: id});
      }
    };

    const clearCart = () => {
      dispatch({type: TYPES.CLEAR_CART})
    };

  return (
    <div>
        <h2>Carritos de compras</h2>
        <h3>Productos</h3>
        <div>
            {products.map(product => <Product key={product.id} data={product} addToCart={addToCart}/>)}
        </div>
        <br/>
        <hr/>
        <h3>Carrito</h3>
        <div>
           {cart.map((item, index)=> <CartItems key={index} data={item} deleteFromCart={deleteFromCart} addToCart={addToCart}/>)}
        </div>
        <button onClick={clearCart}>Limpiar Carrito</button>
        <h2>Total: </h2>
    </div>
  )
}

export default ShoppingCart;