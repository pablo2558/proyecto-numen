import React, { useContext } from 'react'
import Product from './Product';
import { CartContainer } from './ShoppingCart';

const ProductMap = () => {
    const {products, addToCart} = useContext(CartContainer)
  return (
    <div>
      <h2>Carritos de compras</h2>
      <h3>Productos</h3>
      <div>
        {products.map((product) => (
          <Product key={product.id} data={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductMap