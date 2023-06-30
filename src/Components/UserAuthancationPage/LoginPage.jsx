import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { HiOutlineMailOpen, HiEye, HiEyeOff } from "react-icons/hi";
import { BiSolidLockAlt } from "react-icons/bi";
import { NavLink, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import { Authcontext } from "../AuthLayout/AuthLayout";
import Swal from "sweetalert2";

const LoginPage = () => {
  const [passToggle, setPassToggle] = useState(false);
  const {handleloginuser,loading, setLoading, user} = useContext(Authcontext);
  const navigate = useNavigate();

  if(!loading && user){
    return navigate('/home');
  };

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlelogin = (data)=>{
    setLoading(true);
    handleloginuser(data.email, data.Password).then(res=>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'User login successfully!',
        showConfirmButton: false,
        timer: 1500
      });
      reset();
      navigate('/home');
      setLoading(false);
    }).catch(error=>{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Something went wrong!',
        showConfirmButton: false,
        timer: 1500
      });
      setLoading(false);
    })
  };

  return (
    <div className="w-11/12 mx-auto min-h-screen grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center font-Inter">
      <img
        className="w-4/5 mx-auto"
        src="https://i0.wp.com/learninginnovation.ca/wp-content/uploads/2022/09/teamworkHandsTogether.png?fit=1200%2C1200&ssl=1"
        alt=""
      />
      <div className="p-10">
        <h1 className="text-3xl font-bold tracking-tight">Welcome</h1>
        <form className="text-sm mt-10 space-y-5" onSubmit={handleSubmit(handlelogin)}>
          <div className="border-b py-1 flex justify-start items-center">
            <HiOutlineMailOpen className="text-lg" />
            <input
            {...register("email", { required: true})}
              className="text-gray-500 outline-none w-full px-5"
              type="email"
              name="email"
              placeholder="User Email Address"
            />
          </div>
          {errors.email?.type === 'required' && <p className="text-red-500 text-xs font-Raleway" role="alert">First name is required</p>}
          <div className="border-b py-1 flex justify-start items-center">
            <BiSolidLockAlt className="text-lg" />
            <input
            {...register("Password", { required: true})}
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
          {errors.Password?.type === 'required' && <p className="text-red-500 text-xs font-Raleway" role="alert">First name is required</p>}
          {
            loading ? <div className="w-full mx-auto text-center"><progress className="progress w-56"></progress></div> : <input
            className="text-white outline-none w-full rounded-sm shadow-sm px-5 bg-slate-800 py-2"
            type="submit"
            value="Login"
          />
          }
          
        </form>
        <button className="text-red-500 text-sm mt-3 font-Raleway block" >Forget Password</button>
        <span className="text-sm">I don't have an account? <NavLink to='/registration' className='font-semibold text-blue-800'>Create Account</NavLink></span>
        <SocialLogin/>
      </div>
    </div>
  );
};

export default LoginPage;
