import React from "react";
import Logo from "../assets/image/logo1.png"
import { Link } from "react-router-dom";

function Signup() {
    
    return(
        <div className="h-screen flex justify-center items-center flex-col">
            <div className=" w-[70%]">
            <img className="w-[40%] mb-1" src={Logo} alt=""/>
            <p className=" text-[#3D5EA3] text-[40px]">SIGN UP</p>
            </div>
            <div className=" text-[#3D5EA3] mt-7 w-[70%]">
                {/* fullanme */}
                <div className="w-full">
                    <p className=" font-semibold">Full Name</p>
                    <input type="text" className="w-full pl-2 py-1 border-[0.5px] border-[#3D5EA3] rounded"/>
                </div>
                {/* email */}
                <div className=" mt-2">
                    <p className=" font-semibold">Email</p>
                    <input type="text" className="w-full pl-2 py-1 border-[0.5px] border-[#3D5EA3] rounded"/>
                </div>
                {/* phone number */}
                <div className=" mt-2">
                    <p className=" font-semibold">Phone Number</p>
                    <input type="text" className="w-full pl-2 py-1 border-[0.5px] border-[#3D5EA3] rounded"/>
                </div>
                {/* gender */}
                <div className=" mt-2">
                    <p className=" font-semibold">Gender</p>
                    <select className="w-full pl-2 py-1 border-[0.5px] border-[#3D5EA3] rounded">
                        <option value="">Choose your gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                {/* password */}
                <div className=" mt-2">
                    <p className=" font-semibold">Password</p>
                    <input type="text" className="w-full pl-2 py-1 border-[0.5px] border-[#3D5EA3] rounded"/>
                </div>
                {/* confirmpassword */}
                <div className=" mt-2">
                    <p className=" font-semibold">Comfirm Password</p>
                    <input type="text" className="w-full pl-2 py-1 border-[0.5px] border-[#3D5EA3] rounded"/>
                </div>
            </div>
            <button className="w-[70%] mt-10 bg-[#FFCAC1] text-lg py-1 rounded border-[0.5px] border-[#3D5EA3] text-[#3D5EA3] font-semibold">
                    SIGN UP
            </button>
            <div className=" absolute bottom-8">
                <span>Already have any account?  </span>
                <Link to="/signup" className="text-[#3D5EA3]">Login</Link>
            </div>
        </div>
    )

}
export default Signup;