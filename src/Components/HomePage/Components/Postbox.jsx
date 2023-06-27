import React, { useContext } from "react";
import ContainerLayout from "../../ReuseableComponents/ContanerLayout";
import { useForm } from "react-hook-form";
import { Authcontext } from "../../AuthLayout/AuthLayout";
import Swal from "sweetalert2";

const Postbox = () => {
  const { user } = useContext(Authcontext);
  const { register, handleSubmit, reset } = useForm();
  if (!user) {
    return;
  }
  const handlePost = async (postData) => {
    const data = {
      ...postData,
      user: user.email,
      username: user.displayName,
      userPhoto: user.photoURL,
    };
    fetch("http://localhost:5000/postdatainsert", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your new post is successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    reset();
  };

  return (
    <ContainerLayout>
      <form onSubmit={handleSubmit(handlePost)}>
        <div className="space-y-2 bg-base-200 p-10 rounded-md shadow-sm">
          <textarea
            {...register("description", { required: true })}
            type="text"
            className="border w-full h-40 min-h-16 max-h-40 outline-none p-5 rounded-md text-sm"
            placeholder="What's you mind?"
            name="description"
            id="description"
          />
          <div className="flex gap-5">
            <input
              {...register("image", { required: true })}
              type="text"
              className="border w-full outline-none p-3 rounded-md text-sm"
              placeholder="Thumbnail Link here"
              name="image"
              id="image"
            />
            <input
              className="w-full py-3 rounded-md shadow-md bg-yellow-500 text-white font-bold font-Raleway"
              type="submit"
              value="Post"
            />
          </div>
        </div>
      </form>
    </ContainerLayout>
  );
};

export default Postbox;
