import React from 'react';
import { shoppingInitialState, shoppingReducer } from './Components/Carrito/shoppingReducer';
import Ruter from './Components/Ruter';
import { StateProvider } from './Components/stateProvider';


function App() {
  return (
    <div>
         <Ruter/>
    </div>
  );
}

export default App;
