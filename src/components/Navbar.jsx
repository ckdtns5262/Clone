import React from "react";
import logo from "../assets/logo.png";
import { BiWorld, BiUser } from "react-icons/bi";
import { FiMenu, FiSearch } from "react-icons/fi";


 



const Navbar = () => {
  return (
    <div className="border-b sticky top-0 bg-white/[95%]">
       <div className=" flex justify-between items-center sm:mx-6 md:mx-10 lg:mx-12">
      {/* Left */}
      <div className=" h-20 flex">
        <img src={logo} className="w-13 h-20 object-cover -my-1" />
      </div>
      {/* Middle */}
      <div
        className=" hidden lg:flex justify-center items-center relative shadow-small shadow-gray-400 border
    rounded-full "
      >
        <input
          type="search"
          placeholder=""
          className="py-2.5 w-[20rem] rounded-full outline-0"
        />
        <div className="flex justify-between absolute w-full
        pr-16 pl-4 font-semibold text-gray-600">
          <button className=" w-full">어디든지</button>
          <button className="border-l  w-full">언제든 일주일</button>
          <button className="border-l text-gray-600/60 w-full pl-2">게스트 추가</button>
        </div>
        <div className="bg-[#ff5a60] p-1 rounded-full mr-2 ">
            <FiSearch className="text-white w-full"/>
        </div>
      </div>
       {/* Right */}
      <div className="flex items-center pr-3 font-semibold 
        text-gray-600">
        <p className="text-[14px]">당신의 공간을 에어비앤비하세요</p>
        <div className="flex items-center mx-7 gap-1">
        <BiWorld className=""/>
        <div className="">KO</div>
        </div>
       
       
        <div className="flex items-center border px-3 p-1
        rounded-full gap-2 bg-[#ff5a60] text-white font-bold
        shadow-lg shadow-gray-300 hover:bg-[#ff5a7c]
        duration-100 ease-out" >
            <p>Sign in</p>
          <BiUser className="text-[22px]"/>
        </div>
      </div>
     
    </div>
    </div>
   
  );
};

export default Navbar;
