import React from "react";
import Logo from "../assets/image/holder_booking.png";
import Profile from "../assets/image/somsrii.png";
import line from "../assets/image/linepoint.svg";
import YStar from "../assets/image/yellowstar.svg"
import GStar from "../assets/image/graystar.svg"
import EStar from "../assets/image/starempty.png"
import { Link } from "react-router-dom";

function Cancelbook() {
    return (
        <div className="h-screen  flex  items-center flex-col">
            {/* holder */}
            <img className="w-full" src={Logo} alt="" />

            <div className="mt-3 text-[#3D5EA3] text-xl">
                <p>
                    Your feedback will improve
                </p>
                <p>
                    our delivery experience.
                </p>
            </div>

            <div className=" flex mt-2">
                <img src={EStar} alt="" className=" mr-[1px]" />
                <img src={EStar} alt="" className=" mr-[1px]" />
                <img src={EStar} alt="" className=" mr-[1px]" />
                <img src={EStar} alt="" className=" mr-[1px]" />
                <img src={EStar} alt="" />
            </div>

            {/* profile */}
            <div className="flex justify-center items-center mt-5 mb-2">
                <div>
                    <img src={Profile} alt="" className="w-[90%]" />
                </div>
                <div>
                    <p className="text-[#3D5EA3] font-medium text-xl">
                        Somsri, jang
                    </p>

                    {/* cartype */}
                    <p className=" text-[#848181] mt-2">
                        Car Type
                    </p>
                    <p className=" text-[#3D5EA3] mb-2">
                        Mazda3
                    </p>
                    {/* no */}
                    <p className=" text-[#848181]">
                        Plate no
                    </p>
                    <p className=" text-[#3D5EA3] mb-2">
                        SJA345G
                    </p>
                    {/* phone number */}
                    <p className=" text-[#848181]">
                        Phone number
                    </p>
                    <p className=" text-[#3D5EA3]">
                        +66821851893
                    </p>
                </div>
            </div>

            {/* note */}
            <div className=" w-full   flex justify-center items-center flex-col">
                <div className="w-[80%]">
                    <div className="">
                        <div className="flex space-x-3 justify-center items-center mt-2">
                            <div className=" h-8 border-solid text-lg border-2 px-2 rounded-2xl text-[#b4b0b0] border-[#D2D4D6]">
                                5km
                            </div>
                            <img src={line} alt="" />
                            <div className="flex flex-col text-[#848181]">
                                <div className="lexend">Airport rail link</div>
                                <div className="lexend">Union Mall</div>
                            </div>
                            <div className="border-l-2 border-[#D2D4D6] h-12"></div>
                            <div className="flex flex-col  items-center text-[#3D5EA3] font-semibold">
                                <div className="text-xl">120</div>
                                <div className="text-lg">THB</div>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="w-[80%] bg-[#FFCAC1] mt-4 text-lg py-1 rounded border-[0.5px] border-[#3D5EA3] text-[#3D5EA3] font-semibold">
                    SUBMIT
                </button>
            </div>
        </div>
    );
}
export default Cancelbook;
