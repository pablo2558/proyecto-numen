import React from 'react'
import { CartContainer } from './ShoppingCart'
import { useContext } from 'react'
import Redragon from './Redragon'

const RedragonMap = () => {
    const {redragon, addToCart} = useContext(CartContainer)
  return (
    <div className='lg:pt-40'>
      <div className='flex justify-evenly flex-wrap'>
        {redragon.map((product) => (
          <Redragon key={product.id} data={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  )
}

export default RedragonMap