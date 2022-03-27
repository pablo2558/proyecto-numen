import React from 'react';
import ShoppingCart, { CartContainer } from './Components/Carrito/ShoppingCart';
import { shoppingInitialState, shoppingReducer } from './Components/Carrito/shoppingReducer';
import Ruter from './Components/Ruter';


function App() {
  return (
    <div className='dark:bg-slate-900'>
       <ShoppingCart>
          <Ruter/>
       </ShoppingCart>
    </div>
  );
}

export default App;
