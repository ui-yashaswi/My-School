import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function CreateAc() {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      emailOrContact: "",
      password: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(3, "Full Name must be at least 3 characters")
        .required("Full Name is required"),
      emailOrContact: Yup.string()
        .test("email-or-phone", "Invalid email or phone number", (value) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          const phoneRegex = /^\d{10}$/;
          return emailRegex.test(value) || phoneRegex.test(value);
        })
        .required("Email or Contact Number is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log("Form Data:", values);
      alert("Account created successfully!");
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen  ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl text-red-600  text-center mb-6">
          Create Account
        </h2>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-2">
            <label className="block  mb-2 text-zinc-500 font-medium">
              Full Name
            </label>
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

          <div className="flex flex-col gap-2">
            <label className="block text-zinc-500 mb-2 font-medium">
              Email or Contact Number
            </label>
            <input
              type="text"
              name="emailOrContact"
              placeholder="Enter Email or Contact Number"
              className="w-full p-2 border border-zinc-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              {...formik.getFieldProps("emailOrContact")}
            />
            {formik.touched.emailOrContact && formik.errors.emailOrContact && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.emailOrContact}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="block text-zinc-500 mb-2 font-medium">
              Create Password
            </label>
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

          <Link to={"/enterotp"}>
            <button
              type="submit"
              className="w-full bg-red-300 text-white p-2 rounded-lg hover:bg-red-600 transition"
            >
              Create Account
            </button>
          </Link>

          <h1 className="text-center text-zinc-500">
            Already have an Account ?{" "}
            <Link to={"/login"}>
              <span className="text-red-500 hover:text-red-600">LogIn</span>
            </Link>
          </h1>
        </form>
      </div>
    </div>
  );
}

export default CreateAc;
