import React from "react";
import Bg from "../assets/image/prelogin.png"
import { Link } from "react-router-dom";

function Prelogin() {
    
    return(
        <div className="h-screen flex justify-center items-center flex-col">
            <img src={Bg} alt="" />
            <div className=" absolute bottom-[4.5rem] w-[70%]">
                <Link onClick={()=>{
                    if(localStorage.getItem("id")!= undefined){
                        window.location.replace("/role")
                    }
                    else{
                        window.location.replace("/login")
                    }
                }}>
                    <button className="lexend w-full bg-[#FFCAC1] text-lg py-1.5 rounded border-[0.5px] border-[#3D5EA3] text-[#3D5EA3] font-semibold">
                        GET START
                    </button>
                </Link>
            </div>
        </div>
    )

}
export default Prelogin;