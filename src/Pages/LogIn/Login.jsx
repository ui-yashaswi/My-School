import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col items-center justify-center lg:w-[30vw] h-[50vh] px-8 gap-4 rounded-lg border border-zinc-200 shadow-lg">
        <h1 className="text-[#f6c8c1]  text-xl">Login</h1>
        <h1 className="text-gray-500 text-start w-full">
          Email / Contact number
        </h1>
        <input
          type="text"
          placeholder="+91 9701222010"
          className="text-zinc-500 px-4 border py-3 border-zinc-400 rounded-sm w-full"
        />

        <Link to="/enterotp">
          <button className="bg-[#f6c8c1] w-[26vw] text-white text-center py-3 rounded-sm">
            Request OTP
          </button>
        </Link>

        <h1 className="text-[#f6c8c1]">Create Account</h1>
      </div>
    </div>
  );
}

export default Login;
