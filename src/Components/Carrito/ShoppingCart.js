import React from 'react'
import { TYPES } from './ShoppingActions'
import { useReducer, useEffect } from 'react';
import { shoppingReducer, shoppingInitialState } from './shoppingReducer';
import axios from 'axios';
import { createContext,  } from 'react';

export const CartContainer = createContext();

const ShoppingCart = ({children}) => {
    const [state, dispatch] = useReducer(shoppingReducer, shoppingInitialState);
    const {products, cart} = state

    const udpateSate = async () => {
      const productsURL = "http://localhost:3000/products"
      const cartURL = "http://localhost:3000/cart"
      const resProducts = await axios.get(productsURL)
      const resCart = await axios.get(cartURL)
      const newProduct = await resProducts.data
      const newCartItem = await resCart.data

      dispatch({type: TYPES.READ_STATE, payload: [newProduct, newCartItem]})
    }
    useEffect(() => {
     udpateSate()
    }, [])
    

    const addToCart = async (data) => {

      let newItem = state.products.find(product => product.id === data.id)

      let itemInCart = state.cart.find((item) => item.id === newItem.id)

      if (itemInCart) {
        let endpoint = `http://localhost:3000/cart/${data.id}`
        let options = {
          method: "PUT",
          headers: {"content-type": "application/json"},
          data: JSON.stringify({...data, quantity: itemInCart.quantity + 1})
        }
        let res = await axios(endpoint, options),
            itemData = await res.data
    
        dispatch({type: TYPES.ADD_TO_CART, payload: {itemData}})    
      } else {
          let options = {
            method: "POST",
            headers: {"content-type": "application/json"},
            data: JSON.stringify({...data, quantity: 1})
          }
          let res = await axios("http://localhost:3000/cart", options),
              itemData = await res.data
    
          dispatch({type: TYPES.ADD_TO_CART,  payload: {itemData}})
      }     
    };

    const deleteFromCart = async (data, all = false) => {
      if (all) {
        let endpoint = `http://localhost:3000/cart/${data.id}`

        let options = {
          method: "DELETE",
          headers: {"content-type": "application/json"}
        };
        let res = await axios(endpoint, options)

        dispatch({type:TYPES.REMOVE_ALL_PRODUCTS, payload: data.id});
      } else {
        let itemInCart = state.cart.find((item) => item.id === data.id)
        
        if (itemInCart.quantity > 1) {
          let endpoint = `http://localhost:3000/cart/${data.id}`
          let options = {
            method: "PUT",
            headers: {"content-type": "application/json"},
            data: JSON.stringify({...data, quantity: itemInCart.quantity - 1})
          }
          let res = await axios(endpoint, options),
            itemData = await res.data
            
            dispatch({type: TYPES.REMOVE_ONE_PRODUCT, payload: data.id});
        } else {
          let endpoint = `http://localhost:3000/cart/${data.id}`

          let options = {
            method: "DELETE",
            headers: {"content-type": "application/json"}
          };
          let res = await axios(endpoint, options)
          dispatch({type: TYPES.REMOVE_ONE_PRODUCT, payload: data.id});
        }
      }
    };

    const clearCart = () => {
      dispatch({type: TYPES.CLEAR_CART})
    };
  return (
    <div>
      <CartContainer.Provider value={{cart, products, addToCart, deleteFromCart, clearCart}}>
        {children}
      </CartContainer.Provider>
    </div>
  )
}

export default ShoppingCart;