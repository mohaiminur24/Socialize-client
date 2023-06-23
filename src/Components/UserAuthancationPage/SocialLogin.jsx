import React from "react";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div className="mt-10">
      <div className="flex gap-5 justify-center items-center">
        <hr className="w-full" />
        OR
        <hr className="w-full" />
      </div>
      <button className="w-fit mx-auto mt-3 cursor-pointer px-3 py-2 rounded-full gap-5 text-sm flex border justify-center items-center">
        <FcGoogle className="text-2xl" />
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
