import React, { useContext, useState } from "react";
import ContainerLayout from "../ReuseableComponents/ContanerLayout";
import { Authcontext } from "../AuthLayout/AuthLayout";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UserProduct from "../CustomHook/UserProduct";
import SingleProduct from "../ReuseableComponents/SingleProduct";

const MyItemsPage = () => {
  const { user, loading } = useContext(Authcontext);
  const { register, handleSubmit, reset } = useForm();
  const [product, refetch] = UserProduct(user?.email);
  const [loadingFn, setLoadingFn] = useState(false);

  if(loading){
    return;
  };

  const handlecreateitems = (data) => {
    const items = { ...data, user: user.email };
    setLoadingFn(true);
    fetch("https://eidproject.vercel.app/newitemscreate", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(items),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "New Product create successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
          refetch();
          setLoadingFn(false);
        }
      });
  };

  return (
    <ContainerLayout>
      <div className="p-10 bg-base-200 rounded-md">
        <form
          onSubmit={handleSubmit(handlecreateitems)}
          className="flex flex-col gap-3"
        >
          <div className="flex gap-3">
            <input
              {...register("title", { required: true })}
              className="border w-full px-5 py-2 rounded-md outline-none"
              type="text"
              name="title"
              id="title"
              placeholder="Title"
            />
            <input
              {...register("price", { required: true })}
              className="border w-full px-5 py-2 rounded-md outline-none"
              type="text"
              name="price"
              id="price"
              placeholder="Price"
            />
            <input
              {...register("rating", { required: true })}
              className="border w-full px-5 py-2 rounded-md outline-none"
              type="text"
              name="rating"
              id="rating"
              defaultValue={(Math.random() * 4 + 1).toFixed(2)}
            />
          </div>
          <input
            {...register("thumbnail", { required: true })}
            className="border w-full px-5 py-2 rounded-md outline-none"
            type="text"
            name="thumbnail"
            id="thumbnail"
            placeholder="Thumbnail"
          />
          <textarea
            {...register("description", { required: true })}
            className="border rounded-md min-h-16 max-h-40 outline-none p-5 text-sm"
            name="description"
            id="description"
            cols="30"
            rows="5"
            placeholder="Product Description"
          ></textarea>
          <input
            disabled={loadingFn}
            className="outline-none bg-slate-600 py-2 text-white font-Inter tracking-tighter rounded-md disabled:opacity-10"
            type="submit"
            value="Create New Items"
          />
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 bg-base-200 p-10 rounded-md gap-5">
        {
            product && product.map((item, index)=> <SingleProduct key={index} product={item} /> )
        }
      </div>
    </ContainerLayout>
  );
};

export default MyItemsPage;
