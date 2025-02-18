import { useState } from "react";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { BsMinecart } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import NavLg from "../../Components/NavLg";
import Footer from "../../Components/Footer";

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
      <div className="flex h-[fullvh] justify-between bg-[#f5f5f5] mt-34 lg:px-28">
        {/* Sidebar */}
        <div className="flex flex-col w-[30vw] h-screen gap-[40vh]">
          <div className="gap-10 py-10">
            <div className="flex p-3 gap-2 items-center rounded-sm bg-white">
              <CgProfile className="text-4xl text-zinc-700" />
              <div className="flex flex-col">
                <h1 className="text-zinc-500">Hello</h1>
                <h1 className="text-zinc-700 font-semibold text-lg">
                  {formData.firstName} {formData.lastName}
                </h1>
              </div>
            </div>
            <div className="flex p-3 gap-2 mt-4 items-center rounded-sm bg-white">
              <BsMinecart className="text-2xl text-zinc-700" />
              <h1 className="text-zinc-700 font-semibold text-lg">My Orders</h1>
            </div>
          </div>
          <div className="flex w-full gap-2 items-center rounded-sm bg-white p-4">
            <FiLogOut className="text-2xl" />
            <h1 className="text-zinc-700 font-semibold text-lg">Log Out</h1>
          </div>
        </div>
        {/* Main Content */}
        <div className="ml-64 p-8 mb-10 w-full">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 flex justify-between">
              Personal Information
              <button
                onClick={() => setEditMode(!editMode)}
                className="text-blue-500"
              >
                {editMode ? "Cancel" : "Edit"}
              </button>
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                className="border border-zinc-300 rounded-md my-3 p-2 w-full"
                value={formData.firstName}
                onChange={handleChange}
                disabled={!editMode}
              />
              <input
                type="text"
                name="lastName"
                className="border border-zinc-300 rounded-md my-3 p-2 w-full"
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
                className="border border-zinc-300 rounded-md my-3 p-2 w-full"
                value={formData.email}
                onChange={handleChange}
                disabled={!editMode}
              />
            </div>
            <div className="mt-4">
              <label className="block font-semibold">Mobile Number</label>
              <input
                type="text"
                name="mobile"
                className="border border-zinc-300 rounded-md my-3 p-2 w-full"
                value={formData.mobile}
                onChange={handleChange}
                disabled={!editMode}
              />
            </div>
            {editMode && (
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white p-2 rounded mt-4"
              >
                Save
              </button>
            )}
            <h3 className="font-semibold mt-6">FAQ’s</h3>
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
      <Footer />
    </div>
  );
}
