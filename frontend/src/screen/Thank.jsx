import React from "react";
import Logo from "../assets/image/holder.png";
import Profile from "../assets/image/somsrii.png";
import line from "../assets/image/linepoint.svg";
import YStar from "../assets/image/yellowstar.svg"
import GStar from "../assets/image/graystar.svg"
import EStar from "../assets/image/starempty.png"
import { Link } from "react-router-dom";

function Thank() {
    return (
        <div className="h-screen  flex  items-center flex-col justify-center">
            {/* holder */}
            <img className="w-full absolute top-0" src={Logo} alt="" />

            <p className="lexend mt-20 text-4xl font-semibold text-[#3D5EA3]">
                Thank You
            </p>

            <div className="junge mt-4 text-[#3D5EA3] text-xl flex flex-col justify-center items-center">
                <p>
                    Your feedback will improve our
                </p>
                <p>
                    delivery experience.
                </p>
            </div>

            <div className=" flex mt-4">
                <img src={YStar} alt="" className=" mr-1 w-6" />
                <img src={YStar} alt="" className=" mr-1 w-6" />
                <img src={YStar} alt="" className=" mr-1 w-6" />
                <img src={YStar} alt="" className=" mr-1 w-6" />
                <img src={GStar} alt=""  className="w-6"/>
            </div>

            {/* note */}
            <div className=" w-full   flex justify-center items-center flex-col absolute bottom-16">
                <Link to="/prelogin" className="lexend text-center w-[80%] bg-[#FFCAC1] mt-4 text-lg py-1 rounded border-[0.5px] border-[#3D5EA3] text-[#3D5EA3] font-semibold">
                    DONE
                </Link>
            </div>
        </div>
    );
}
export default Thank;
