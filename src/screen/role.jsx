import React from "react";
import Logo from "../assets/image/logo1.png"
import Book from "../assets/image/book.png"
import Driver from "../assets/image/driver.png"
import { Link } from "react-router-dom";


function Role() {
    
    return(
        <div className="h-screen flex justify-center items-center flex-col">
            <img className="w-5/12 mb-3" src={Logo} alt="" />
            <p className=" text-[#3D5EA3] text-2xl">Please select user type.</p>
            <div className=" flex mt-10">
                <Link className=" flex items-center justify-end" to="">
                    <img src={Book} alt="Booking" className="w-[80%]"/>
                </Link>
                <Link className=" flex items-center ml-2" to="">
                    <img src={Driver} alt="Driver" className="w-[80%]"/>
                </Link>
            </div>
        </div>
    )

}
export default Role;