import React, { useState } from "react";
import Logo from "../assets/image/logo1.png";
import { Link } from "react-router-dom";
import axios from "axios";
import path from "../../path";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function Userlogin() {
    axios
      .post(`${path}/login`, {
        email: email,
        password: password
      })
      .then((res) => {
        if (res.data != "error") {
            console.log(res.data);
            localStorage.setItem("id", res.data)
          window.location.replace("/role");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <img className="w-4/12 mb-2" src={Logo} alt="" />
      <p className="junge text-xl text-[#3D5EA3]">Hi, welcome back !</p>
      <div className="jura  text-[#3D5EA3] mt-8 w-[70%]">
        <div className="w-full space-y-3">
          <p className=" font-semibold">Email</p>
          <input
            type="text"
            className="outline-none w-full pl-2 py-1 border-[0.5px] border-[#3D5EA3] rounded"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className=" mt-3 space-y-3">
          <p className=" font-semibold">Password</p>
          <input
            type="password"
            className="outline-none w-full pl-2 py-1 border-[0.5px] border-[#3D5EA3] rounded"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>
      </div>
      <button
        className="lexend w-[70%] mt-8 bg-[#FFCAC1] text-lg py-1 rounded border-[0.5px] border-[#3D5EA3] text-[#3D5EA3] font-semibold"
        onClick={() => {
          Userlogin();
        }}
      >
        LOGIN
      </button>
      <div className="jura absolute bottom-8">
        <span>Don’t have an account? </span>
        <Link to="/signup" className=" font-semibold text-[#3D5EA3]">
          SIGN UP
        </Link>
      </div>
    </div>
  );
}
export default Login;
