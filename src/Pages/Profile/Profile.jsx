import { useState } from "react";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { BsMinecart } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import NavLg from "../../Components/NavLg";
import Footer from "../../Components/Footer";
import imgFooter from "/icons/footerBanner.png";

export default function Profile() {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "Shannu",
    lastName: "Sai",
    email: "Shanmukhavenkata009@gmail.com",
    mobile: "9876543210",
    gender: "male",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setEditMode(false);
    console.log("Saved Data:", formData);
  };

  return (
    <div>
      <NavLg login={true} />
      <div className="flex lg:flex-row flex-col w-full justify-between py-10 px-4  bg-[#f5f5f5] lg:px-28">
        {/* Sidebar */}
        <div className="flex flex-col bg-amber-60 lg:w-[30vw] mt-20 lg:mt-38 lg:gap-[52vh]">
          <div className="gap-10  ">
            <div className="flex p-2 gap-2 items-center rounded-sm bg-white">
              <CgProfile className="text-4xl text-zinc-700" />
              <div className="flex flex-col">
                <h1 className="text-zinc-500 text-sm">Hello</h1>
                <h1 className="text-zinc-700 font-semibold text-md">
                  {formData.firstName} {formData.lastName}
                </h1>
              </div>
            </div>
            <div className="flex p-2 gap-2 mt-4 items-center rounded-sm bg-white">
              <BsMinecart className="text-2xl text-zinc-700" />
              <h1 className="text-zinc-700 font-semibold text-lg">My Orders</h1>
            </div>
          </div>
          <div className="flex w-full gap-2 items-center mt-6 rounded-sm bg-white p-2">
            <FiLogOut className="text-2xl" />
            <h1 className="text-zinc-700 font-semibold text-md">Log Out</h1>
          </div>
        </div>
        {/* Main Content */}
        <div className=" lg:ml-6 p-2 lg:mt-38 w-[90vw]">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2 flex justify-between">
              Personal Information
              <button
                onClick={() => setEditMode(!editMode)}
                className="text-blue-500"
              >
                {editMode ? "Cancel" : "Edit"}
              </button>
            </h2>
            <div className="grid grid-cols-2 ">
              <input
                type="text"
                name="firstName"
                className="border border-zinc-300 lg:w-96 rounded-md my-3 p-2 w-full"
                value={formData.firstName}
                onChange={handleChange}
                disabled={!editMode}
              />
              <input
                type="text"
                name="lastName"
                className="border border-zinc-300 lg:w-40 rounded-md my-3 p-2 w-full"
                value={formData.lastName}
                onChange={handleChange}
                disabled={!editMode}
              />
            </div>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                  disabled={!editMode}
                />
                <span>Male</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                  disabled={!editMode}
                />
                <span>Female</span>
              </label>
            </div>
            <div className="mt-4">
              <label className="block font-semibold">Email Address</label>
              <input
                type="email"
                name="email"
                className="border border-zinc-300 w-full lg:w-96 rounded-md my-3 p-2 "
                value={formData.email}
                onChange={handleChange}
                disabled={!editMode}
              />
            </div>
            <div className="mt-2">
              <label className="block font-semibold">Mobile Number</label>
              <input
                type="text"
                name="mobile"
                className="border border-zinc-300 w-96 rounded-md my-3 p-2 w-full"
                value={formData.mobile}
                onChange={handleChange}
                disabled={!editMode}
              />
            </div>
            {editMode && (
              <button
                onClick={handleSave}
                className="bg-red-500 text-white p-3 lg:p-2 rounded mt-4"
              >
                Save
              </button>
            )}
            <h3 className="font-semibold mt-2">FAQ’s</h3>
            <p className="text-gray-600 font-semibold">
              What happens when I update my email address (or mobile number)?
            </p>

            <p className="text-gray-600  ">
              Your login email id (or mobile number) changes, likewise. You'll
              receive all your account related communication on your updated
              email address (or mobile number).
            </p>
            <p className="text-gray-600 pt-3 font-semibold">
              When will my account be updated with the new email address (or
              mobile number)?
            </p>
            <p className="text-gray-600 ">
              It happens as soon as you confirm the verification code sent to
              your email (or mobile) and save the changes.
            </p>
            <button className="text-red-600 mt-4">Delete Account</button>
          </div>
        </div>
      </div>

      <img
        className="lg:w-full lg:h-full h-[14vh] object-cover "
        src={imgFooter}
        alt=""
      />
      <Footer />
    </div>
  );
}
