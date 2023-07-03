import React, { useContext, useEffect, useState } from "react";
import ContainerLayout from "../ReuseableComponents/ContanerLayout";
import SingleProduct from "../ReuseableComponents/SingleProduct";
import { Authcontext } from "../AuthLayout/AuthLayout";

const MarketPlace = () => {
  const [product, setProduct] = useState(null);
  const {loading} = useContext(Authcontext);
  if(loading){
    return;
  }
  useEffect(() => {
    fetch("https://eidproject.vercel.app/getallproduct")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <ContainerLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 p-10 gap-5 bg-base-200">
        {product &&
          product.map((singleproduct, index) => (
            <SingleProduct key={index} product={singleproduct} />
          ))}
      </div>
    </ContainerLayout>
  );
};

export default MarketPlace;
