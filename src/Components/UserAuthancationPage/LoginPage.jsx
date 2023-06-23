import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { HiOutlineMailOpen, HiEye, HiEyeOff } from "react-icons/hi";
import { BiSolidLockAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import SocialLogin from "./SocialLogin";

const LoginPage = () => {
  const [passToggle, setPassToggle] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="w-11/12 mx-auto min-h-screen grid grid-cols-2 gap-5 justify-center items-center font-Inter">
      <img
        className="w-4/5 mx-auto"
        src="https://i0.wp.com/learninginnovation.ca/wp-content/uploads/2022/09/teamworkHandsTogether.png?fit=1200%2C1200&ssl=1"
        alt=""
      />
      <div className="p-10">
        <h1 className="text-3xl font-bold tracking-tight">Welcome</h1>
        <form className="text-sm mt-10 space-y-5" onSubmit={handleSubmit}>
          <div className="border-b py-1 flex justify-start items-center">
            <HiOutlineMailOpen className="text-lg" />
            <input
              className="text-gray-500 outline-none w-full px-5"
              type="email"
              name="email"
              placeholder="User Email Address"
            />
          </div>
          <div className="border-b py-1 flex justify-start items-center">
            <BiSolidLockAlt className="text-lg" />
            <input
              className="text-gray-500 outline-none w-full px-5"
              type="Password"
              name="Password"
              placeholder="Password"
            />
            {passToggle ? (
              <span onClick={() => setPassToggle(false)}>
                <HiEye />
              </span>
            ) : (
              <span onClick={() => setPassToggle(true)}>
                <HiEyeOff />
              </span>
            )}
          </div>
          <input
            className="text-white outline-none w-full rounded-sm shadow-sm px-5 bg-slate-800 py-2"
            type="submit"
            value="Login"
          />
        </form>
        <button className="text-red-500 text-sm mt-3 font-Raleway block" >Forget Password</button>
        <span className="text-sm">I don't have an account? <NavLink className='font-semibold text-blue-800'>Create Account</NavLink></span>
        <SocialLogin/>
      </div>
    </div>
  );
};

export default LoginPage;
