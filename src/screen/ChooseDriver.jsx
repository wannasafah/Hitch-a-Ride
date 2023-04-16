import React from "react";
import logo from "../assets/image/logo1.png";
import profile from "../assets/image/profile.svg";
import driver1 from "../assets/image/driver1.svg";
import line from "../assets/image/linepoint.svg";
import time from "../assets/image/time_icon.svg";
import stars from "../assets/image/stars.svg"
export default function ChooseDriver() {
  return (
    <div className="flex flex-col bg-map h-screen">
      <div className="flex justify-between p-6 space-x-3 bg-white">
        <div className="w-24">
          <img src={logo} alt="" />
        </div>
        <div className="w-44 h-6 border-b-2 border-[#3D5EA3]"></div>
        <div className="w-22 flex justify-center items-center">
          <img src={profile} alt="" />
        </div>
      </div>
      <div className="flex h-full w-full justify-center items-center py-6">
        <div className="flex flex-col w-11/12 h-full border-solid border-2 border-[#D2D4D6] bg-white">
          <div className="flex justify-center items-center border-b-2 border border-[#D2D4D6]">
            <div className="junge p-5 text-xl font-semibold text-[#3D5EA3]">
              Choose your driver
            </div>
          </div>
          <div className="p-4 space-x-4 flex border-b-2 border-[#D2D4D6]">
            <img src={driver1} alt="" />
            <div className="flex flex-col space-y-1">
              <div className="lexend  text-[#3D5EA3] font-">Somsri, jang</div>
              <div className="flex px-1 space-x-3">
                <img src={line} alt="" />
                <div className="flex flex-col text-sm text-[#848181]">
                  <div className="lexend">Airport rail link</div>
                  <div className="lexend">Union Mall</div>
                </div>
              </div>
              <div className="flex space-x-1">
                <img src={time} alt="" />
                <div className="jura text-[#848181]">13:00 pm.</div>
                <img src={stars} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
