import React from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const SingleProduct = ({ product }) => {
    const handlecart = (product)=>{
      const cartproduct = {title: product.title, img:product.thumbnail, price:product.price, seller:product.user, id:product._id};
      const before = JSON.parse(localStorage.getItem('cartitems'));
      if(before){
        const newitems = [...before, cartproduct];
        localStorage.setItem('cartitems',JSON.stringify(newitems));
      }else{
        const newitems = [cartproduct]
        localStorage.setItem('cartitems',JSON.stringify(newitems));
      }
    }
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
      <button onClick={()=>handlecart(product)} className="w-full mt-auto bg-yellow-600 py-2 rounded-md shadow-md text-white font-bold">Add to Cart</button>
    </div>
  );
};

export default SingleProduct;
