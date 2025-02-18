import React from "react";
import { Link } from "react-router-dom";

function EnterOtp() {
  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-col items-center justify-center lg:w-[30vw] h-[50vh] px-8 gap-4 rounded-lg border border-zinc-200 shadow-lg">
          <h1 className="text-red-500 text-xl">Login</h1>
          <h1 className="text-gray-500">Enter Your OTP</h1>
          <input
            type="text"
            placeholder="Enter Your OTP"
            className="text-zinc-500 px-4 border py-3 border-zinc-400 rounded-sm w-full"
          />
          <button className="bg-red-500 w-full text-white text-center py-3 rounded-sm">
            Request OTP
          </button>

          <h1 className="text-red-500 text-lg hover:bg-red-700 cursor-pointer">
            Resend OTP
          </h1>
        </div>
      </div>
    </div>
  );
}

export default EnterOtp;
