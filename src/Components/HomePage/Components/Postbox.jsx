import React from "react";
import ContainerLayout from "../../ReuseableComponents/ContanerLayout";

const Postbox = () => {
  return (
    <ContainerLayout>
      <div className="space-y-2 bg-base-200 p-10 rounded-md shadow-sm">
        <input
          type="text"
          className="border w-full h-40 outline-none p-5 rounded-md text-sm"
          placeholder="What's you mind?"
          name="image"
          id="image"
        />
        <div className="flex gap-5">
          <input
            type="text"
            className="border w-full max-h-40 outline-none p-5 rounded-md text-sm"
            placeholder="Thumbnail Link here"
            name="image"
            id="image"
          />
          <input
            className="w-full py-5 rounded-md shadow-md bg-yellow-500 text-white font-bold font-Raleway"
            type="submit"
            value="Post"
          />
        </div>
      </div>
    </ContainerLayout>
  );
};

export default Postbox;
