import React from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const SingleProduct = ({ product }) => {
    
  return (
    <div className="p-5 bg-white rounded-md space-y-3 flex flex-col">
      <img className="w-full h-96" src={product.thumbnail} />
      <div>
        <h1 className="font-Inter tracking-tighter font-bold">
          {product?.title}
        </h1>
        <p className="text-xs opacity-80 mt-1">{product.description}</p>
        <h1 className="flex justify-start items-center mt-1 text-sm">Rating:<Rating style={{ maxWidth: 80 }} value={product.rating} readOnly /></h1>
        <h2 className="text-lg font-bold">Price: <span>${product.price}</span></h2>
      </div>
      <button className="w-full mt-auto bg-yellow-600 py-2 rounded-md shadow-md text-white font-bold">Add to Cart</button>
    </div>
  );
};

export default SingleProduct;
