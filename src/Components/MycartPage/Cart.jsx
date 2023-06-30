import React, { useEffect, useState } from "react";
import ContainerLayout from "../ReuseableComponents/ContanerLayout";
import CartItem from "./CartItem";

const Cart = () => {
  const [cartitems, setCartItems] = useState(null);
  const [refetch, setRefetch] = useState(false);
  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("cartitems"));
    setCartItems(result);
  }, [refetch]);
  const refetchcartdata = () => {
    setRefetch(!refetch);
  };
  return (
    <ContainerLayout>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Seller</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartitems &&
              cartitems.map((item, index) => (
                <CartItem
                  refetch={refetchcartdata}
                  key={index}
                  index={index}
                  item={item}
                />
              ))}
          </tbody>
        </table>
      </div>
    </ContainerLayout>
  );
};

export default Cart;
