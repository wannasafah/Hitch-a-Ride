import React from "react";
import Logo from "../assets/image/holder.png"
import User from "../assets/image/userprofile.png"
import { Link } from "react-router-dom";

function Profile() {
    return(
        <div className="h-screen  flex justify-center items-center flex-col">
            {/* holder */}
            <img className="w-full top-0 absolute" src={Logo} alt="" />

            {/* form */}
            <div className=" w-full   flex justify-center items-center flex-col absolute bottom-[13%]">
            <div className=" text-[#3D5EA3] mt-8 w-[70%]">
                <div className="w-full">
                    <p className=" font-semibold">Full Name</p>
                    <input type="text" className="w-full pl-2 py-1 border-[0.5px] border-[#3D5EA3] rounded"/>
                </div>
                <div className=" mt-2">
                    <p className=" font-semibold">Email</p>
                    <input type="text" className="w-full pl-2 py-1 border-[0.5px] border-[#3D5EA3] rounded"/>
                </div>
                <div className=" mt-2">
                    <p className=" font-semibold">Phone Number</p>
                    <input type="text" className="w-full pl-2 py-1 border-[0.5px] border-[#3D5EA3] rounded"/>
                </div>
                <div className=" mt-2">
                    <p className=" font-semibold">Gender</p>
                    <input type="text" className="w-full pl-2 py-1 border-[0.5px] border-[#3D5EA3] rounded"/>
                </div>
            </div>
            <button className="w-[70%] mt-10 bg-[#FFCAC1] text-lg py-1 rounded border-[0.5px] border-[#3D5EA3] text-[#3D5EA3] font-semibold">
                    EDIT
            </button>
            </div>
        </div>
    )

}
export default Profile;