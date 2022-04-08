import React, { useContext } from 'react'
import Product from './Product';
import { CartContainer } from './ShoppingCart';

const ProductMap = () => {
    const {products, addToCart} = useContext(CartContainer)
  return (
    <div className='lg:pt-40 md:pt-40 sm:pt-40'>
      <div className='flex justify-evenly flex-wrap'>
        {products.map((product) => (
          <Product key={product.id} data={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductMap