import React, { useState, useEffect } from "react";
import logo from "../assets/image/logo1.png";
import profile from "../assets/image/profile.svg";
import user from "../assets/image/passenger_noti.svg";
import line from "../assets/image/linepoint.svg";
import notification from "../assets/image/notification_icon.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import path from "../../path";
export default function Notification() {
  const [users, setUsers] = useState();
  useEffect(() => {
    axios
      .post(`${path}/passengers`, {
        location: localStorage.getItem("location"),
        destination: localStorage.getItem("destination"),
      })
      .then((res) => {
        localStorage.setItem("data_location" ,res.data)
        setUsers(res.data[0])
        console.log(res.data[0])
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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
        <div className="flex h-full w-full justify-center items-center py-6">
          <div className="flex flex-col w-11/12 h-full border-solid border-2 border-[#D2D4D6] bg-white">
            <div className="flex justify-center items-center border-b-2 border border-[#D2D4D6]">
              <div className="junge p-5 text-xl font-semibold text-[#3D5EA3]">
                Notification
              </div>
            </div>
            <Link
              to="/pickup"
              className="p-4 space-x-4 flex border-b-2 border-[#D2D4D6]"
            >
              <img src={user} className="w-12 ml-3" alt="" />
              <div className="flex flex-col space-y-1">
                <div className="lexend  text-[#3D5EA3] font-">
                  Found your passenger !
                </div>
                <div className="flex px-1 space-x-3">
                  <img src={line} alt="" />
                  <div className="flex flex-col text-sm text-[#848181]">
                    {users&&<div className="lexend">{users.location}</div>}
                    {users&&<div className="lexend">{users.destination}</div>}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
