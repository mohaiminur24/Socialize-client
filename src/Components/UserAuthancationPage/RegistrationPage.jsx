import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { HiOutlineMailOpen, HiEye, HiEyeOff, HiOutlinePhotograph, HiPhone } from "react-icons/hi";
import { BiSolidLockAlt,BiSolidUserCircle } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import SocialLogin from "./SocialLogin";

const RegistrationPage = () => {
  const [passToggle, setPassToggle] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="w-11/12 mx-auto min-h-screen grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center font-Inter">
      <img
        className="w-4/5 mx-auto"
        src="https://i0.wp.com/learninginnovation.ca/wp-content/uploads/2022/09/teamworkHandsTogether.png?fit=1200%2C1200&ssl=1"
        alt=""
      />
      <div className="p-10">
        <h1 className="text-3xl font-bold tracking-tight">Create Account</h1>
        <form className="text-sm mt-10 mb-4 space-y-5" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <div className="border-b py-1 flex justify-start items-center">
              <BiSolidUserCircle className="text-lg" />
              <input
                className="text-gray-500 outline-none w-full px-5"
                type="text"
                name="name"
                placeholder="Name"
              />
            </div>
            <div className="border-b py-1 flex justify-start items-center">
              <HiOutlinePhotograph className="text-lg" />
              <input
                className="text-gray-500 outline-none w-full px-5"
                type="text"
                name="photo"
                placeholder="Photo URL"
              />
            </div>
          </div>
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
            <HiPhone className="text-lg" />
            <input
              className="text-gray-500 outline-none w-full px-5"
              type="tel"
              name="phone"
              placeholder="Phone Number"
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
            value="Create Account"
          />
        </form>
        <span className="text-sm">
          Already i have an acoount!{" "}
          <NavLink to="/" className="font-semibold text-blue-800">
            Login Account
          </NavLink>
        </span>
        <SocialLogin />
      </div>
    </div>
  );
};

export default RegistrationPage;
