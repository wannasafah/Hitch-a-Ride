import React, { useState } from "react";
import logo from "../assets/image/logo1.png";
import profile from "../assets/image/profile.svg";
import note from "../assets/image/note_icon.svg";
import passenger from "../assets/image/passenger_icon.svg";
import sex from "../assets/image/sex_icon.svg";

import "../css/map.css";
import { Link } from "react-router-dom";
export default function Booking() {
const [count, setCount] =  useState(1)
  return (
    <div className="flex flex-col bg-map h-screen">
      <div className="flex justify-between p-6 space-x-3 bg-white">
        <Link to="/prelogin" className="w-24">
          <img src={logo} alt="" />
        </Link>
        <div className="w-44 h-6 border-b-2 border-[#3D5EA3]"></div>
        <Link to="/profile" className="w-22 flex justify-center items-center">
          <img src={profile} alt="" />
        </Link>
      </div>
      <div className="flex justify-between h-full flex-col">
        <div className="flex flex-col justify-center items-center mt-5 ">
          <div className="flex w-5/6 ">
            <div className="h-12 border-solid border-4 border-l border-[#3D5EA3]"></div>
            <div className="relative w-full flex items-center jura">
              <div onClick={()=> {document.querySelector('.location').value = ''}} className="w-8 absolute text-gray-400 right-0 text-xl">
                x
              </div>
              <input
                className="location h-12 p-3 w-full bg-white border-solid border-2 border-[D2D4D6] outline-none"
                placeholder="Enter Your location"
              ></input>
            </div>
          </div>
          <div className="flex w-5/6">
            <div className="h-12 border-solid border-4 border-l border-[#4F878F]"></div>
            <div className="relative w-full flex items-center jura">
              <div onClick={()=> {document.querySelector('.destination').value = ''}} className="w-8 absolute text-gray-400 right-0 text-xl">
                x
              </div>
              <input
                className="destination h-12 p-3 w-full bg-white border-solid border-2 border-[D2D4D6] outline-none"
                placeholder="Enter Your destination"
              ></input>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center ">
          <div className="flex w-5/6 ">
            <div className="h-20 border-solid border-4 border-l border-[#848181]"></div>
            <div className="relative w-full flex items-center jura">
              <div className="w-8 absolute text-gray-400 left-3 top-5 text-xl">
                <img src={note} alt="" />
              </div>
              <textarea placeholder="Notes to driver" className="h-20 p-3 pl-9 w-full bg-white border-solid border-2 border-[D2D4D6] outline-none"></textarea>
            </div>
          </div>
          <div className="flex w-5/6">
            <div className="h-12 border-solid border-4 border-l border-[#848181]"></div>
            <div className="relative w-full flex items-center jura">
              <div className="w-8 absolute text-gray-400 left-2.5 text-xl">
                <img src={passenger} alt="" />
              </div>
              <div className="flex justify-between h-12 p-3 pl-9 w-full bg-white border-solid border-2 border-[D2D4D6]">
                <div className="">Passenger</div>
                <div className="flex space-x-4">
                  <div className="" onClick={()=>{
                    if(count>1){
                      setCount(count-1)
                    }
                  }}>-</div>
                  <div className="">{count}</div>
                  <div className="" onClick={()=>{setCount(count+1)}}>+</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-5/6">
            <div className="h-12 border-solid border-4 border-l border-[#848181]"></div>
            <div className="relative w-full flex items-center jura">
              <div className="w-8 absolute text-gray-400 left-2.5 text-xl">
                <img src={sex} alt="" />
              </div>
              <div className="p-3 h-12 pl-9 flex w-full justify-between bg-white border-solid border-2 border-[D2D4D6]">
                <div className=" outline-none">Same Gender driver</div>
                <input type="checkbox" name="" id="" />
              </div>
            </div>
          </div>
          <Link to="/chooseDriver" className="w-5/6 text-center mt-2 lexend mb-10">
            <button className="bg-[#3D5EA3] w-full p-2 text-white font-normal rounded-sm">
              BOOK
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
