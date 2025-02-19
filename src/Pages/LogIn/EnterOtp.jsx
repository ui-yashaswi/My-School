import React, { useState } from "react";
import { Link } from "react-router-dom";

function EnterOtp() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleResendOtp = () => {
    alert("OTP sent successfully.");
  };

  const handleVerify = () => {
    if (!otp) {
      setError("Please enter the OTP.");
      return;
    }
    if (!/^[0-9]{6}$/.test(otp)) {
      setError("OTP should be a 6-digit number.");
      return;
    }
    setError("");
    alert("User loged successfully.");
  };

  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-col  justify-center  lg:w-[30vw] h-[50vh] px-8 gap-4 rounded-lg border border-zinc-200 shadow-lg">
          <h1 className="text-red-500 text-xl text-center">Enter Your OTP</h1>
          <h1 className="text-gray-500">Enter OTP</h1>
          <input
            type="text"
            placeholder="Enter Your OTP"
            value={otp}
            onChange={(e) => {
              setOtp(e.target.value);
              setError("");
            }}
            className="text-zinc-500 px-4 border py-3 border-zinc-400 rounded-sm w-full"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            onClick={handleVerify}
            className="bg-red-500 hover:bg-red-600 w-full cursor-pointer text-white text-center py-3 rounded-sm"
          >
            Verify
          </button>

          <h1
            onClick={handleResendOtp}
            className="text-red-500 text-center text-lg hover:text-red-700 cursor-pointer"
          >
            Resend OTP
          </h1>
        </div>
      </div>
    </div>
  );
}

export default EnterOtp;
