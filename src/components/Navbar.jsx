import React, { useState } from "react";
import logo from "../assets/logo.svg";
import hamburger from "../assets/hamburger.png";
import closeMenu from "../assets/close.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav(!nav);
  }
  return (
    <div className="flex justify-between w-full px-6 md:px-36 py-10">
      <div className="flex items-center gap-10">
        <img src={logo} alt="" />
        <div className="hidden md:flex gap-8 font-poppins text-[#9E9AA7] font-semibold">
          <a className="hover:text-black" href="/">
            Features
          </a>
          <a className="hover:text-black" href="/">
            Pricing
          </a>
          <a className="hover:text-black" href="/">
            Resources
          </a>
        </div>
      </div>
      <div className="md:hidden">
        <div onClick={handleNav}>
          {!nav ? (
            <img src={hamburger} alt="" className="w-[40px]" />
          ) : (
            <img src={closeMenu} alt="" className="w-[40px]" />
          )}
        </div>
        {nav && (
          <div className="absolute bg-[#3B3054] w-[88%] left-7 text-white py-5 px-10 rounded-lg mt-5 font-poppins font-semibold">
            <div className="flex flex-col justify-center items-center gap-6 py-8 border-b border-gray-400">
              <a href="/">Features</a>
              <a href="/">Pricing</a>
              <a href="/">Resources</a>
            </div>
            <div className="flex flex-col py-6 gap-8">
              <button>Login</button>
              <button className="bg-[#2ACFCF] py-2 px-8 rounded-full text-white">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="hidden md:flex items-center gap-8 font-poppins">
        <button className="hover:border hover:border-[#2ACFCF] py-2 px-8 rounded-full border border-white">
          Login
        </button>
        <button className="bg-[#2ACFCF] py-2 px-8 rounded-full text-white hover:bg-[#2acfcf81]">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
