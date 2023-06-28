import React, { useState, useEffect, useContext } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Authcontext } from "../../AuthLayout/AuthLayout";

const SingleHomepagePost = ({ post,handlelikebutton,handleunlikebutton }) => {
  const { user } = useContext(Authcontext);
  const like = (post?.likes)?.find((spost) => spost = user.email);

  return (
    <div className="grid md:grid-cols-2 gap-5 grid-cols-1 rounded-md shadow-md bg-white p-5 mb-5 font-Inter">
      <img className="rounded-md" src={post?.image} alt="" />
      <div className="flex flex-col">
        <p>{post.description}</p>
        <div className="flex gap-4 py-2 font-Inter rounded-full border justify-around mt-auto items-center">
          {like ? (
            <button onClick={()=>handleunlikebutton(post._id)} className="flex items-center justify-center">
              <AiFillLike className="text-2xl" />
              {post?.likes && <span className="text-xs">({post?.likes?.length})</span>}
            </button>
          ) : (
            <button onClick={() => handlelikebutton(post._id)}>
              <AiOutlineLike className="text-2xl" />
            </button>
          )}

          <NavLink className="font-R aleway font-bold">
            Comments {post?.comments && <span>({post?.comments?.length})</span>}
          </NavLink>
          <img
            className="w-10 h-10 rounded-full"
            src={post?.userPhoto}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SingleHomepagePost;
