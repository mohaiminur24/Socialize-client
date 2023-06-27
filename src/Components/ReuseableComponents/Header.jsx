import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const menubar = <>
  <li><NavLink className={({isActive})=> isActive && 'text-yellow-500'}><button>Home</button></NavLink></li>
  <li><NavLink><button>Marketplace</button></NavLink></li>
  <li><NavLink><button>My items</button></NavLink></li>
  <li><NavLink><button>Profile</button></NavLink></li>
  <li><NavLink><button>Cart</button></NavLink></li>
  </>
  return (
    <div className="bg-base-100">
      <div className="navbar font-Inter w-11/12 mx-auto items-end">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
             {menubar}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl text-yellow-500">Socialize</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-5 menu-horizontal px-1">
          {menubar}
          </ul>
        </div>
        <div className="navbar-end">
          <button className="px-5 py-2 bg-yellow-500 rounded-md shadow-sm text-white font-bold">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
