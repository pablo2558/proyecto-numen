import { createContext, useReducer, useContext } from "react";

export const StateContext = createContext();

export const StateProvider = ({shoppingInitialState, shoppingReducer, children}) => (
    <StateContext.Provider value={useReducer(shoppingInitialState, shoppingReducer)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);