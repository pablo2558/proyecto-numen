import { data } from "autoprefixer";
import React from "react";

const Product = ({data, addToCart}) => {  
  const {id, name, price} = data
  return (
    <div className=" mt-10 border border-solid border-red-900 w-96">
      <h4> {name} </h4>
      <h5>$ {price}.00 </h5>
      <button onClick={() => addToCart(id)}>Agregar</button>
    </div>
  );
};

export default Product;
