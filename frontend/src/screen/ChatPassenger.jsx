import React from "react";
import logo from "../assets/image/logo1.png";
import profile from "../assets/image/profile.svg";
import driver from "../assets/image/driver_chat.svg";
import sent from "../assets/image/sent.svg";
import notification from "../assets/image/notification_icon.svg";
export default function chatPassenger() {
  return (
    <div>
      <div className="flex flex-col bg-map h-screen">
      <div className="flex justify-between p-6 space-x-3 bg-white">
        <div className="w-24">
          <img src={ logo} alt="" />
        </div>
        <div className="w-32 h-6 border-b-2 border-[#3D5EA3]"></div>
        <div className="w-22 flex justify-center items-center">
          <img src={notification} alt="" />
        </div>
        <div className="w-22 flex justify-center items-center">
          <img src={profile} alt="" />
        </div>
      </div>
        <div className="flex h-full w-full justify-center items-center py-6">
          <div className="flex flex-col w-11/12 h-full border-solid border-2 border-[#D2D4D6] bg-white relative">
            <div className="flex justify-center items-center border-b-2 border border-[#D2D4D6]">
              <div className="junge p-5 text-xl font-semibold text-[#3D5EA3]">
                Choose your driver
              </div>
            </div>
            
            <div className="relative h-10 mt-5">
              <div className="jura pink-chat h-10 w-48 font-semibold text-[#3D5EA3] text-center p-0.5 absolute right-6">
              234/456 soi 15/1 naka
              </div>
            </div>
            <div className="p-4 space-x-2 flex ">
              <img src={driver} alt="" />
              <div className="jura blue-chat w-28 font-semibold text-[#3D5EA3] text-center p-0.5">
              I’m here.
              </div>
            </div>
            <div className="flex w-full p-3 h-16 border-t-2 border-[#D2D4D6] absolute bottom-0 justify-center items-center">
              <input
                type="text"
                className="border-[#D2D4D6] p-4 border-solid border-2 rounded-3xl w-11/12 h-full outline-none text-[#3D5EA3]" placeholder="Enter your message..."
              />
              <div className="w-18">
                <img src={sent} alt="" />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
