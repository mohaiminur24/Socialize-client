import React from "react";
import ContainerLayout from "../ReuseableComponents/ContanerLayout";

const MyItemsPage = () => {
  return (
    <ContainerLayout>
      <div className="p-10 bg-base-200">
        <form className="flex flex-col gap-3">
          <div className="flex gap-3">
            <input
              className="border w-full px-5 py-2 rounded-md outline-none"
              type="text"
              name="title"
              id="title"
              placeholder="Title"
            />
            <input
              className="border w-full px-5 py-2 rounded-md outline-none"
              type="number"
              name="price"
              id="price"
              placeholder="Price"
            />
            <input
              className="border w-full px-5 py-2 rounded-md outline-none"
              type="text"
              name="rating"
              id="rating"
              defaultValue={(Math.random()*4+1).toFixed(2)}
            />
          </div>
          <input
            className="border w-full px-5 py-2 rounded-md outline-none"
            type="text"
            name="thumbnail"
            id="thumbnail"
            placeholder="Thumbnail"
          />
          <textarea className="border rounded-md min-h-16 max-h-40" name="description" id="description" cols="30" rows="5"></textarea>
          <input className="outline-none bg-slate-600 py-2 text-white font-Inter tracking-tighter rounded-md" type="submit" value="Create New Items" />
        </form>
      </div>
    </ContainerLayout>
  );
};

export default MyItemsPage;
