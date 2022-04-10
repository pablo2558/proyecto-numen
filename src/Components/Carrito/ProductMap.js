import React, { useContext } from 'react'
import Product from './Product';
import { CartContainer } from './ShoppingCart';

const ProductMap = () => {
    const {products, addToCart} = useContext(CartContainer)
    const productos = products.filter(product => product.id < 21)
  return (
    <div className='lg:pt-40 md:pt-40 sm:pt-40'>
      <div className='flex justify-evenly flex-wrap'>
        {productos.map((product) => (
          <Product key={product.id} data={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductMap