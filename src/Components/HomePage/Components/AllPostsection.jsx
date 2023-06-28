import React, { useContext} from "react";
import AllPost from "../../CustomHook/AllPost";
import { Authcontext } from "../../AuthLayout/AuthLayout";
import SingleHomepagePost from "./SingleHomepagePost";

const AllPostsection = () => {
  const { user } = useContext(Authcontext);
  const [refetch, post] = AllPost();
  
  const handlelikebutton =(postid)=>{
    fetch('http://localhost:5000/handlepostlikebutton',{
      method:"PATCH",
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify({email:user.email,postid})
    }).then(res=> res.json()).then(data=> {
      if(data.acknowledged){
        refetch();
      }
    })
  };

  return (
    <div className="bg-base-200 p-10 rounded-md">
      <div>
        {post &&
          post.map((post, index) =><SingleHomepagePost handlelikebutton={handlelikebutton} key={index} post={post}/>)}
      </div>
    </div>
  );
};

export default AllPostsection;
