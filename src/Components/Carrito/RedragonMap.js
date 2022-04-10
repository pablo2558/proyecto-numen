import React from 'react'
import { CartContainer } from './ShoppingCart'
import { useContext } from 'react'
import Redragon from './Redragon'

const RedragonMap = () => {
    const {products, addToCart} = useContext(CartContainer)
    const redragon = products.filter(product => product.id > 20)
  return (
    <div className='lg:pt-40 md:pt-40 sm:pt-40 pt-40 mb-8'>
      <div className='flex justify-evenly flex-wrap'>
        {redragon.map((product) => (
          <Redragon key={product.id} data={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  )
}

export default RedragonMap