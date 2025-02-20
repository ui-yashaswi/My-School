import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col items-center justify-center w-full lg:w-[30vw] h-[50vh] px-8 gap-4 rounded-lg border border-zinc-200 shadow-lg">
        <h1 className="text-red-600  text-3xl">Login</h1>
        <h1 className="text-gray-500 text-start w-full">
          Email / Contact number
        </h1>
        <input
          type="text"
          placeholder="Enter Your Number or Email"
          className="text-zinc-500 px-4 border py-3 border-zinc-400 rounded-sm w-full"
        />

        <Link to="/enterotp">
          <button className="bg-[#f6c8c1]  w-[55vw] lg:w-[26vw] text-white text-center text-lg hover:bg-red-700 cursor-pointer py-3 rounded-sm">
            Request OTP
          </button>
        </Link>

        <Link to={"/creataccount"}>
          <h1 className="text-red-400 text-xl hover:text-red-500 cursor-pointer">
            Create Account
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default Login;
