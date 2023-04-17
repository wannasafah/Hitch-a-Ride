import React, { useState } from "react";
import logo from "../assets/image/logo1.png";
import profile from "../assets/image/profile.svg";
import notification from "../assets/image/notification_icon.svg";
import passenger from "../assets/image/passenger_icon.svg";
import times from "../assets/image/time_icon.svg";
import path from "../../path";
import "../css/map.css";
import { Link, json } from "react-router-dom";
import axios from "axios";
export default function AddJob() {
  const [count, setCount] = useState(1);
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [time, setTime] = useState("")
  function addWork() {
    localStorage.setItem("time-pickup", time)
    axios
      .post(`${path}/addWork`, {
        user_id: localStorage.getItem("id"),
        location: location,
        destination: destination,
        passenger: count,
        role: "driver",
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("location", location)
        localStorage.setItem("destination", destination)
        window.location.replace("/notification")
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="flex flex-col bg-map h-screen justify-center">
      <div className="h-full absolute flex-col w-full flex items-center justify-center">
        <div className="time-modal hidden flex flex-col py-4 items-center w-2/3 bg-white rounded-md border-solid border-2 border-[#D2D4D6] text-[#3D5EA3] space-y-4">
          <div className="flex justify-between border-b-2 w-full text-center px-4 pb-3">
            <div className="lexend text-[#3D5EA3] text-2xl px-2 ">
          Pick-up time
            </div>
            <div
              onClick={() => {
                document.querySelector(".time-modal").classList.add("hidden");
              }}
              className="end lexend text-[#D2D4D6] rounded-4xl"
            >
              X
            </div>
          </div>

          <div className="jura flex py-2 space-x-2 ">
            <input
              type="text"
              className="hour text-5xl w-16 outline-none"
              placeholder="00"
              maxLength={2}
            />
            <div className="text-5xl">:</div>
            <input
              type="text"
              className="min text-5xl w-16 outline-none"
              placeholder="00"
              maxLength={2}
            />
            <select className="period-time text-2xl outline-none" name="" id="">
              <option value="am">am</option>
              <option value="pm">pm</option>
            </select>
          </div>
          <div className="flex  justify-center lexend border-t-2 w-full rounded-s-sm text-center">
            <button
              onClick={() => {
                document.querySelector(".time-modal").classList.add("hidden");
                setTime(document.querySelector('.hour').value +" : "+ document.querySelector('.min').value +" "+ document.querySelector('.period-time').value)
              }}
              className="mt-3"
            >
              DONE
            </button>
          </div>
        </div>
      </div>
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
      <div className="flex justify-between h-full flex-col">
        <div className="flex flex-col justify-center items-center mt-5 ">
          <div className="flex w-5/6 ">
            <div className="h-12 border-solid border-4 border-l border-[#3D5EA3]"></div>
            <div className="relative w-full flex items-center jura">
              <div
                onClick={() => {
                  document.querySelector(".location").value = "";
                }}
                className="w-8 absolute text-gray-400 right-0 text-xl"
              >
                x
              </div>
              <input
                className="text=[#3D5EA3] location h-12 p-3 w-full bg-white border-solid border-2 border-[D2D4D6] outline-none"
                placeholder="Enter Your location"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
              ></input>
            </div>
          </div>
          <div className="flex w-5/6">
            <div className="h-12 border-solid border-4 border-l border-[#4F878F]"></div>
            <div className="relative w-full flex items-center jura">
              <div
                onClick={() => {
                  document.querySelector(".destination").value = "";
                }}
                className="w-8 absolute text-gray-400 right-0 text-xl"
              >
                x
              </div>
              <input
                className="text=[#3D5EA3] destination h-12 p-3 w-full bg-white border-solid border-2 border-[D2D4D6] outline-none"
                placeholder="Enter Your destination"
                onChange={(e) => {
                  setDestination(e.target.value);
                }}
              ></input>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center ">
          <div className="flex w-5/6 ">
            <div className="h-12 border-solid border-4 border-l border-[#848181]"></div>
            <div className="relative w-full flex items-center jura">
              <div className="w-8 absolute text-gray-400 left-3 text-xl">
                <img src={times} alt="" />
              </div>
              <div
                onClick={() => {
                  document
                    .querySelector(".time-modal")
                    .classList.remove("hidden");
                }}
                className="h-12 p-3 pl-9 w-full bg-white border-solid border-2 border-[D2D4D6] outline-none"
              >
                {time?time:"Pick-up time"}
              </div>
            </div>
          </div>
          <div className="flex w-5/6">
            <div className="h-12 border-solid border-4 border-l border-[#848181]"></div>
            <div className="relative w-full flex items-center jura">
              <div className="w-8 absolute text-gray-400 left-2.5 text-xl">
                <img src={passenger} alt="" />
              </div>
              <div className="flex justify-between h-12 p-3 pl-9 w-full bg-white border-solid border-2 border-[#D2D4D6]">
                <div className="">Passenger</div>
                <div className="flex space-x-4">
                  <div
                    className=""
                    onClick={() => {
                      if (count > 1) {
                        setCount(count - 1);
                      }
                    }}
                  >
                    -
                  </div>
                  <div className="">{count}</div>
                  <div
                    className=""
                    onClick={() => {
                      setCount(count + 1);
                    }}
                  >
                    +
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link className=" z-10 w-5/6 text-center mt-2 lexend mb-10">
            <button
              onClick={() => {
                addWork();
              }}
              className="bg-[#3D5EA3] w-full p-2 text-white font-normal rounded-sm "
            >
              ADD JOB
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
