import React from 'react'
import logo from "../assets/image/logo1.png";
import profile from "../assets/image/profile.svg";
import notification from "../assets/image/notification_icon.svg";
import message from "../assets/image/message.svg";
import line from "../assets/image/linepoint.svg";
import { Link } from "react-router-dom";
export default function DropOff() {
  return (
    <div>
    <div className="flex flex-col bg-map h-screen">
      <div className="flex justify-between p-6 space-x-3 bg-white">
        <div className="w-24">
          <img src={logo} alt="" />
        </div>
        <div className="w-32 h-6 border-b-2 border-[#3D5EA3]"></div>
        <div className="w-22 flex justify-center items-center">
          <img src={notification} alt="" />
        </div>
        <div className="w-22 flex justify-center items-center">
          <img src={profile} alt="" />
        </div>
      </div>
      <div className="h-full w-full flex justify-center items-center">
        <div className=" h-2/5 w-11/12 bg-white absolute bottom-10 border-solid border-2 border-[#b4b0b0]">
          <div className="flex justify-between h-22 p-3 border-solid border-b-2 border-[#D2D4D6]">
            <div className="flex flex-col space-y-1 pl-2">
              <div className="lexend text-xl text-[#3D5EA3]">
                Somsri, jang
              </div>
              <div className="jura font-semibold text-base text-[#3D5EA3]">
                +66812345678
              </div>
            </div>
            <div className="p-2">
              <img src={message} alt="" />
            </div>
          </div>
          <div className="p-4">
            <div className="jura text-[#a7a8aa]">Notes from passenger</div>
            <textarea className="w-full h-16 p-2 border-solid border-2 rounded-sm text-[#3D5EA3] border-[#D2D4D6] resize-none outline-none "></textarea>
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
              <div className="flex flex-col jura items-center text-[#3D5EA3] font-semibold">
                <div className="text-xl">120</div>
                <div className="text-lg">THB</div>
              </div>
            </div>
          </div>
          <div className="px-4">
          <Link to="">
            <div className="text-center lexend p-2 w-full border-solid border-2 rounded-sm bg-[#FFCAC1] border-[#3D5EA3] text-[#3D5EA3]">DROP-OFF</div>
          </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
