import React from "react";
import Logo from "../assets/image/holder_booking.png";
import Profile from "../assets/image/somsrii.png";
import line from "../assets/image/linepoint.svg";
import YStar from "../assets/image/yellowstar.svg";
import GStar from "../assets/image/graystar.svg";
import message from "../assets/image/message.svg";
import { Link } from "react-router-dom";

function Cancelbook() {
  return (
    <div className="h-screen  flex  items-center flex-col">
      {/* holder */}
      <img className="w-full" src={Logo} alt="" />

      {/* profile */}
      <div className="flex space-x-4 justify-center items-center mt-5 mb-4">
        <div>
          <img src={Profile} alt="" className="w-[90%]" />
        </div>
        <div>
          <p className="lexend text-[#3D5EA3] font-medium text-xl">
            Somsri, jang
          </p>
          <div className=" flex">
            <img src={YStar} alt="" className=" mr-[1px]" />
            <img src={YStar} alt="" className=" mr-[1px]" />
            <img src={YStar} alt="" className=" mr-[1px]" />
            <img src={YStar} alt="" className=" mr-[1px]" />
            <img src={GStar} alt="" />
          </div>
          <Link to="/chatPassenger" className="flex justify-center w-24 space-x-1 jura border border-[#D2D4D6] text-[#B5B7B9] rounded-xl mt-2">
            <img className="w-5" src={message} alt="" />
            <div className="">Chat</div>
          </Link>

          {/* cartype */}
          <p className="jura text-[#848181] mt-2">Car Type</p>
          <p className="jura text-[#3D5EA3] mb-2">Mazda3</p>
          {/* no */}
          <p className="jura text-[#848181]">Plate no</p>
          <p className="jura text-[#3D5EA3] mb-2">SJA345G</p>
          {/* phone number */}
          <p className="jura text-[#848181]">Phone number</p>
          <p className="jura text-[#3D5EA3]">+66821851893</p>
        </div>
      </div>

      {/* note */}
      <div className=" w-full flex justify-center items-center flex-col">
        <div className="w-[80%]">
          <div className="">
            <div className="jura text-lg text-[#a7a8aa]">Notes to driver</div>
            <textarea disabled className="jura w-full h-16 p-2 border-solid border-2 rounded-sm text-[#3D5EA3] border-[#D2D4D6] resize-none outline-none "></textarea>
            <div className="flex space-x-3 justify-center items-center mt-2">
              <div className="jura h-8 border-solid text-lg border-2 px-2 rounded-2xl text-[#b4b0b0] border-[#D2D4D6]">
                5km
              </div>
              <img src={line} alt="" />
              <div className="flex flex-col text-[#848181]">
                <div className="lexend">Airport rail link</div>
                <div className="lexend">Union Mall</div>
              </div>
              <div className="border-l-2 border-[#D2D4D6] h-12"></div>
              <div className="jura flex flex-col  items-center text-[#3D5EA3] font-semibold">
                <div className="text-xl">120</div>
                <div className="text-lg">THB</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-2 text-center w-[80%] mt-3">
              <Link to="/chooseDriver" className="lexend flex items-center justify-center p-1.5  w-1/2 border-solid border-2 rounded-sm border-[#3D5EA3] text-[#3D5EA3]">CANCEL</Link>
              <Link to="/feedback" className="lexend flex items-center justify-center w-1/2 border-solid border-2 rounded-sm bg-[#FFCAC1] border-[#3D5EA3] text-[#3D5EA3]">ARRIVED !</Link>
            </div>
      </div>
    </div>
  );
}
export default Cancelbook;
