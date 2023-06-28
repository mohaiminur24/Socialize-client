import React, { useEffect, useState } from "react";
import { AiFillLike,AiOutlineLike } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const AllPostsection = () => {
    const {user} = useState(null);
  const [post, setPost] = useState(null);
  const [like, setLike] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/getallpost")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);
  const result = post?.likes && post?.likes.find(signlepost => signlepost.email == user.email);
  if(result){
    setLike(true);
  };

  return (
    <div className="bg-base-200 p-10 rounded-md">
      <div>
        {post &&
          post.map((post, index) => {
            return (
              <div className="grid md:grid-cols-2 gap-5 grid-cols-1 rounded-md shadow-md bg-white p-5 mb-5 font-Inter">
                <img className="rounded-md" src={post?.image} alt="" />
                <div className="flex flex-col">
                  <p>{post.description}</p>
                  <div className="flex gap-4 py-2 font-Inter rounded-full border justify-around mt-auto items-center">
                    {
                        like ? <button><AiFillLike className="text-2xl"/>{post?.likes && <span>({post?.likes})</span>}</button> : <button><AiOutlineLike/></button>
                    }
                    
                    <NavLink className="font-R aleway font-bold">Comments {post?.comments && <span>({post?.comments?.length})</span>}</NavLink>
                    <img className="w-10 h-10 rounded-full" src={post?.userPhoto} alt="" />
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AllPostsection;
