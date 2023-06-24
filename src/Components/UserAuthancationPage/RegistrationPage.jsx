import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import {
  HiOutlineMailOpen,
  HiEye,
  HiEyeOff,
  HiOutlinePhotograph,
  HiPhone,
} from "react-icons/hi";
import { BiSolidLockAlt, BiSolidUserCircle } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { Authcontext } from "../AuthLayout/AuthLayout";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const RegistrationPage = () => {
  const [passToggle, setPassToggle] = useState(false);
  const { handlecreatenewuser, loading, setLoading } = useContext(Authcontext);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const hanldecreateaccount = (data) => {
    handlecreatenewuser(data.email, data.Password)
      .then((res) => {
        updateProfile(res.user, {
          displayName: data?.name,
          photoURL: data?.photo,
        })
          .then(() => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Create new user Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
            reset();
            setLoading(false);
          })
          .catch(() => {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Something went wrong try again!",
              showConfirmButton: false,
              timer: 1500,
            });
            setLoading(false);
          });
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: error.message,
          showConfirmButton: false,
          timer: 1500,
        });
        setLoading(false);
      });
  };

  return (
    <div className="w-11/12 mx-auto min-h-screen grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center font-Inter">
      <img
        className="w-4/5 mx-auto"
        src="https://i0.wp.com/learninginnovation.ca/wp-content/uploads/2022/09/teamworkHandsTogether.png?fit=1200%2C1200&ssl=1"
        alt=""
      />
      <div className="p-10">
        <h1 className="text-3xl font-bold tracking-tight">Create Account</h1>
        <form
          className="text-sm mt-10 mb-4 space-y-5"
          onSubmit={handleSubmit(hanldecreateaccount)}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <div className="border-b py-1 flex justify-start items-center">
                <BiSolidUserCircle className="text-lg" />
                <input
                  {...register("name", { required: true })}
                  className="text-gray-500 outline-none w-full px-5"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
              </div>
              {errors.name?.type === "required" && (
                <p
                  className="text-xs font-Raleway text-red-500 mt-1"
                  role="alert"
                >
                  Name is required
                </p>
              )}
            </div>
            <div>
              <div className="border-b py-1 flex justify-start items-center">
                <HiOutlinePhotograph className="text-lg" />
                <input
                  {...register("photo", { required: true })}
                  className="text-gray-500 outline-none w-full px-5"
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                />
              </div>
              {errors.name?.type === "required" && (
                <p
                  className="text-xs font-Raleway text-red-500 mt-1"
                  role="alert"
                >
                  Photo URL is required
                </p>
              )}
            </div>
          </div>

          <div className="border-b py-1 flex justify-start items-center">
            <HiOutlineMailOpen className="text-lg" />
            <input
              {...register("email", { required: true })}
              className="text-gray-500 outline-none w-full px-5"
              type="email"
              name="email"
              placeholder="User Email Address"
            />
          </div>
          {errors.email?.type === "required" && (
            <p className="text-xs font-Raleway text-red-500" role="alert">
              Email is required
            </p>
          )}
          <div className="border-b py-1 flex justify-start items-center">
            <HiPhone className="text-lg" />
            <input
              {...register("phone", { required: true })}
              className="text-gray-500 outline-none w-full px-5"
              type="tel"
              name="phone"
              placeholder="Phone Number"
            />
          </div>
          {errors.phone?.type === "required" && (
            <p className="text-xs font-Raleway text-red-500 mt-1" role="alert">
              Phone Number is required
            </p>
          )}
          <div className="border-b py-1 flex justify-start items-center">
            <BiSolidLockAlt className="text-lg" />
            <input
              {...register("Password", { required: true })}
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
          {errors.Password?.type === "required" && (
            <p className="text-xs font-Raleway text-red-500 mt-1" role="alert">
              Password is required
            </p>
          )}
          {
            loading? <div className="w-full mx-auto text-center"><progress className="progress w-56"></progress></div> : <input
            className="text-white outline-none w-full rounded-sm shadow-sm px-5 bg-slate-800 py-2"
            type="submit"
            value="Create Account"
          />
          }
        </form>
        <span className="text-sm">
          Already i have an acoount!
          <NavLink to="/" className="font-semibold ml-1 text-blue-800">
            Login Account
          </NavLink>
        </span>
        <SocialLogin />
      </div>
    </div>
  );
};

export default RegistrationPage;
