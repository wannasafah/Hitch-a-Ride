import React, {useEffect} from "react";
import Logo from "../assets/image/logo1.png"

function Splash() {
    useEffect(() => {
        setTimeout(() => {
            window.location.replace("/prelogin")
        }, 2000);
    },[])
    return(
        <div className="h-screen flex justify-center items-center">
            <img src={Logo} alt="" />
        </div>
    )
}
export default Splash;