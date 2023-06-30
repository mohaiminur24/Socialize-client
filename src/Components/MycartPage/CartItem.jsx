import React from "react";

const CartItem = ({ item, index,refetch }) => {

    const handleDelete=(id)=>{
       const getitems = JSON.parse(localStorage.getItem('cartitems'));
       const filter= getitems.filter(items=> items.id !== id);
       localStorage.setItem('cartitems', JSON.stringify(filter));
       refetch();
    }
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.img} />
              </div>
            </div>
            <div>
              <div className="font-bold">{item.title}</div>
            </div>
          </div>
        </td>
        <td>
          {item.seller}
        </td>
        <td>1</td>
        <th>
          <button onClick={()=>handleDelete(item.id)} className="btn btn-sm border">Delete</button>
        </th>
      </tr>
    </>
  );
};

export default CartItem;
