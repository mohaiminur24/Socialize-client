import React, { useEffect, useState } from "react";
import ContainerLayout from "../ReuseableComponents/ContanerLayout";
import SingleProduct from "../ReuseableComponents/SingleProduct";

const MarketPlace = () => {
  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/getallproduct")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  console.log(product);
  return (
    <ContainerLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {product &&
          product.map((singleproduct, index) => (
            <SingleProduct key={index} product={singleproduct} />
          ))}
      </div>
    </ContainerLayout>
  );
};

export default MarketPlace;
