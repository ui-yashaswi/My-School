import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registeruser } from "../../rtk/slices/userSlice";

function CreateAc() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      contactNumber: "",
      password: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(3, "Full Name must be at least 3 characters")
        .required("Full Name is required"),
      email: Yup.string()
        .test("email", "Invalid email ", (value) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

          return emailRegex.test(value);
        })
        .required("Email or Contact Number is required"),
      contactNumber: Yup.string()
        .matches(/^\d{10}$/, "Contact Number must be exactly 10 digits")
        .required("Contact Number is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      dispatch(registeruser(values)).then(() => {
        navigate("/enterotp");
      });
      console.log("Form Data:", values);
      alert("Account created successfully!");
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl text-red-600 text-center mb-6">
          Create Account
        </h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label className="text-zinc-500 font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter Your Fullname"
              className="w-full p-2 border border-zinc-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              {...formik.getFieldProps("fullName")}
            />
            {formik.touched.fullName && formik.errors.fullName && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.fullName}
              </p>
            )}
          </div>

          {/* Email or Contact */}
          <div className="flex flex-col gap-2">
            <label className="text-zinc-500 font-medium">
              Email or Contact Number
            </label>
            <input
              type="text"
              name="emailOrContact"
              placeholder="Enter Email "
              className="w-full p-2 border border-zinc-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
            )}
          </div>

          {/* Contact Number */}
          <div className="flex flex-col gap-2">
            <label className="text-zinc-500 font-medium">Contact Number</label>
            <input
              type="text"
              name="contactNumber"
              placeholder="Enter Contact Number"
              className="w-full p-2 border border-zinc-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              {...formik.getFieldProps("contactNumber")}
            />
            {formik.touched.contactNumber && formik.errors.contactNumber && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.contactNumber}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="text-zinc-500 font-medium">Create Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create Password"
              className="w-full p-2 border border-zinc-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              {...formik.getFieldProps("password")}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.password}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-300 text-white p-2 rounded-lg hover:bg-red-600 transition"
          >
            Create Account
          </button>

          {/* Login Link */}
          <h1 className="text-center text-zinc-500">
            Already have an account?{" "}
            <Link to={"/login"} className="text-red-500 hover:text-red-600">
              LogIn
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
}

export default CreateAc;
