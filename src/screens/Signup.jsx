import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false);
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    role: "",
    workbench:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
    if (name === "role") {
      setFlag(value === "technician");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { role } = formdata;
    console.log(role);
    try {
      const response = await axios.post(
        `https://cmforcollege-1.onrender.com/api/${role}/signup`,
        formdata
      );
      if (response.data.success) {
        navigate("/signin");
      } else {
        alert(response.data.error);
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="bg-[#191e9a] h-screen w-full flex items-center ">
      <div className="text-white text-center font-font1 w-3/4 py-40 font-bold ">
        <h1 className="text-6xl mb-10">Hello</h1>
        <h1 className="text-6xl mb-20">CBITian</h1>
      </div>
      <div className="w-1/2 shadow-lg rounded-md  h-full bg-white py-36 px-20 ">
        <h1 className="font-bold text-4xl">Signup</h1>
        <h1 className="font-font1 text-3xl pt-20">Welcome </h1>
        <form action="" className="py-3" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="block w-[300px] m-[1px] h-[35px] rounded-sm mt-4 "
            onChange={handleChange}
          />
          <input
            type="firstname"
            name="firstname"
            placeholder="Firstname"
            className="block w-[300px] m-[1px] h-[35px] rounded-sm mt-4 "
            onChange={handleChange}
          />
          <input
            type="lastname"
            name="lastname"
            placeholder="Secondname"
            className="block w-[300px] m-[1px] h-[35px] rounded-sm mt-4 "
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="block w-[300px] m-[1px] h-[35px] rounded-sm mt-4 "
            onChange={handleChange}
          />
          <select
            name="role"
            className="block w-[300px] m-[1px] h-[35px] rounded-sm mt-4 "
            onChange={handleChange}
          >
            <option value="">Select your role</option>
            <option value="admin">Admin</option>
            <option value="technician">Technician</option>
            <option value="users">User</option>
          </select>
          {flag && (
            <select
              name="workbench"
              className="block w-[300px] m-[1px] h-[35px] rounded-sm mt-4 "
              onChange={handleChange}
            >
              <option value="">Select your field</option>
              <option value="Hardware">Hardware</option>
              <option value="Software">Software</option>
              <option value="OS">OS</option>
            </select>
          )}
          <button
            className="block w-[300px] m-[1px] h-[35px] rounded-sm bg-[#191e9a] text-white hover:bg-white hover:text-black mt-4 "
            onClick={handleSubmit}
          >
            Signup
          </button>
          <p className="text-sm text-center mt-5 cursor-pointer ">
            alreday have an account?
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
