import { navbar } from "../Data Structure/Navbar";
import { IoIosSearch } from "react-icons/io";
import { Menu, X } from "lucide-react"; // icons
import { useState } from "react";
const Navbar = () => {
  const[isOpen,setisOpen]=useState(false);
  return (
    <section className="font-Family-Class">
      <div className="bg-[#3b3b3c] h-30 shadow-md">
        <div className="flex  justify-between items-center md:pt-8 pt-10">
          <div className=" sm:pl-20  w-[30%]">
            <img
              src="/assets/images/Navbar/logo.png"
              alt="logo"
              className="sm:w-25 sm:h-10 lg:w-35 lg:h-15 md:w-30 h-12 rounded-xl shadow-lg hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="flex justify-center w-full md:w-[35%] xl:w-[40%]">
            <h1 className="font-bold text-white sm:text-[16px] md:text-[18px] lg:text-3xl xl:text-4xl 2xl:text-5xl">
              Online Shopping Store
            </h1>
          </div>
          <div className="hidden md:flex justify-end gap-8 md:w-[60%] xl:w-[30%] pr-20">
            <button className="bg-[#75f0f7]  hover:bg-[#0adde8]  px-8 py-2 cursor-pointer rounded-3xl hover:text-white text-gray-600 text-[20px] font-semibold hover:scale-x-110 shadow-md transition-all duration-1000
           ">
              Sign Up
            </button>
            <button className="bg-[#75f0f7] hover:bg-[#0adde8] text-gray-600 text-[20px] 
            hover:scale-x-110 px-8 py-2 rounded-3xl cursor-pointer font-semibold hover:text-white
             shadow-md transition-all duration-1000">
              Login
            </button>
          </div>
          <button className="md:hidden block text-white " onClick={()=>setisOpen(!isOpen)}>{isOpen ? <X size={35}/>:<Menu size={35}/>}</button>
        </div>
      </div>
      <div className={`${isOpen ?"opacity-100":"opacity-0"} transition-all duration-1000 ease-in-out`}>
         {isOpen &&(
        <div className="bg-[#5e5e5e] w-full h-100 md:hidden">
          <div className="flex sm:flex-col sm:justify-center sm:items-center sm:gap-20 flex-col justify-center items-center gap-15">
         <ul className="flex justify-center sm:gap-10 pt-6 *:text-[23px] *:cursor-pointer *:text-white *:active:text-white font-medium flex-col sm:flex-row gap-6">
         {
          navbar.map((value,i)=>(

          
        <li key={`${value} ${i}`} className="relative before:absolute before:top-8 before:left-0 before:h-1 before:w-0 before:bg-white
        active:before:w-full before:transition-all before:duration-200">
          {value.name}
        </li>
        ))}
      </ul>
      
      <div className="justify-end gap-5 flex">
            <button className="bg-[#75f0f7] active:bg-[#0adde8]  px-8 py-2 cursor-pointer rounded-3xl active:text-white text-gray-600 text-[20px] font-semibold active:scale-x-110 shadow-md transition-all duration-200
           ">
              Sign Up
            </button>
            <button className="bg-[#75f0f7] active:bg-[#0adde8] text-gray-600 text-[20px] 
            active:scale-x-110 px-8 py-2 rounded-3xl cursor-pointer font-semibold active:text-white
             shadow-md transition-all duration-200">
              Login
            </button>
            </div>
            </div>
    </div>
      
      )}
      </div>
      <div className="py-10">
        <div className="flex sm:flex-row flex-col  gap-10 justify-center items-center">
          <input
            type="text"
            placeholder="Search for products..."
            className="px-5 py-3 sm:w-[40%] w-[90%] rounded-3xl border border-gray-300 focus:border-[#2E7AAE] focus:ring-2 focus:ring-[#2E7AAE]/40 outline-none shadow-sm transition-all duration-1000"
          />
          <div>
            <div className="bg-[#2E7AAE] text-[20px] w-45 h-15 rounded-3xl active:scale-x-110 md:hover:scale-x-110 transition-transform duration-100 md:duration-1000 shadow-md">
              <div className="flex items-center justify-center gap-4 py-3 px-5">
                <button className="text-[20px] text-white font-medium cursor-pointer transition duration-1000">
                  Search
                </button>
                <IoIosSearch className="size-7 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" shadow-md bg-[#5f5f64] h-20 hidden md:block">
    <ul className="flex justify-center gap-30 pt-6 *:text-[23px] *:cursor-pointer *:text-white *:hover:text-white font-medium">
        {
          navbar.map((value,i)=>(

        <li key={`${value} ${i}`} className={`relative group before:absolute before:top-8 before:left-0 before:h-1 before:w-0 before:bg-white
        hover:before:w-full before:transition-all before:duration-700`}>
          <span>{value.name}</span>
      {value.Product &&(
        <div className="flex flex-col bg-gray-800 top-14 w-50 pl-5 pt-5 pb-5 gap-3 absolute invisible opacity-0
        group-hover:visible group-hover:opacity-100 transition duration-700 *:text-white">
          {value.Product.map((sub_val,j)=>(
                 <span key={`${sub_val} ${j}`} className="text-black">{sub_val}</span>
            ))}
        </div>
      )}
      </li>
            ))}
      </ul>
      </div>
    </section>
  );
};

export default Navbar;
