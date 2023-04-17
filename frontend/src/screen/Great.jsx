import React from "react";
import Logo from "../assets/image/holder.png";
import GreatJob from "../assets/image/greatjob.png";
import { Link } from "react-router-dom";

function Great() {
    return (
        <div className="h-screen  flex  items-center flex-col">
            {/* holder */}
            <img className="w-full" src={Logo} alt="" />

            <img src={GreatJob} alt="" className=" w-[50%] mt-6"/>

            <p className=" text-4xl font-semibold text-[#3D5EA3]">
                Great job
            </p>

            <div className="mt-4 text-[#3D5EA3] text-xl flex flex-col justify-center items-center">
                <p>
                    Your job has been successfully
                </p>
                <p>
                    completed.
                </p>
            </div>


            {/* note */}
            <Link to="/prelogin" className=" w-full   flex justify-center items-center flex-col absolute bottom-16">
                <button className="w-[80%] bg-[#FFCAC1] mt-4 text-lg py-1 rounded border-[0.5px] border-[#3D5EA3] text-[#3D5EA3] font-semibold">
                    DONE
                </button>
            </Link>
        </div>
    );
}
export default Great;
