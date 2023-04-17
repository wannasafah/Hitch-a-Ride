import React, { useState, useEffect } from "react";
import Logo from "../assets/image/holder_profile.png";
import { Link } from "react-router-dom";
import axios from "axios";
import path from "../../path";
function Profile() {
  const [users, setUsers] = useState();
  useEffect(() => {
    axios
      .post(`${path}/getUser`, {
        id: localStorage.getItem("id"),
      })
      .then((res) => {
        setUsers(res.data[0])
        console.log(res.data[0])
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="h-screen  flex justify-center items-center flex-col">
      {/* holder */}
      <img className="w-full top-0 absolute" src={Logo} alt="" />

      {/* form */}
      {users&&(
        <div className=" w-full   flex justify-center items-center flex-col absolute bottom-[12%]">
        <div className="jura space-y-5 text-[#3D5EA3] mt-8 w-[70%]">
          <div className="w-full">
            <p className="font-semibold">Name</p>
            <input
            disabled
              placeholder={users.fullname}
              type="text"
              className="w-full pl-2 py-1 border-[0.5px]  border-[#3D5EA3] rounded"
            />
          </div>
          <div className=" mt-2">
            
            <p className=" font-semibold">Email</p>
            <input
            disabled
            placeholder={users.email}
              type="text"
              className="w-full pl-2 py-1 border-[0.5px] border-[#3D5EA3] rounded"
            />
          </div>
          <div className=" mt-2">
            <p className=" font-semibold">Phone Number</p>
            <input
            disabled
            placeholder={users.phone}
              type="text"
              className="w-full pl-2 py-1 border-[0.5px] border-[#3D5EA3] rounded"
            />
          </div>
          <div className=" mt-2">
            <p className=" font-semibold">Gender</p>
            <input
            disabled
            placeholder={users.gender}
              type="text"
              className="w-full pl-2 py-1 border-[0.5px] border-[#3D5EA3] rounded"
            />
          </div>
        </div>
        <Link
          onClick={()=>{
            localStorage.removeItem("id")
            window.location.replace("/login")
          }}
          className="lexend text-center w-[70%] mt-9 bg-[#FFCAC1] text-lg py-1 rounded border-[0.5px] border-[#3D5EA3] text-[#3D5EA3] font-semibold"
        >
          LOGOUT
        </Link>
      </div>
      )}
    </div>
  );
}
export default Profile;
