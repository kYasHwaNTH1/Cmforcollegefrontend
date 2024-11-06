import React,{useState,useEffect,useContext} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { counterToken,firstname,roleforall } from "../statemag";
import {RecoilRoot,useRecoilValue,useSetRecoilState} from 'recoil'


const Signin = () => {
    const navigate=useNavigate();
    const [msg,setMsg]=useState("")
const setToken=useSetRecoilState(counterToken);
const setRoleall=useSetRecoilState(roleforall);
const setFirstname=useSetRecoilState(firstname);
    const [formdata, setFormdata] = useState({
    email: "",
    password: "",
    role: ""
  });
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormdata({...formdata,[name]:value})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const { email,password,role } = formdata;
    if (!email || !password || !role) {
        alert("All fields are required");
        return;
      }
    console.log("sending to backend "+ role)
    try{

    
    const response= await axios.post(`https://cmforcollege-1.onrender.com/api/${role}/signin`,
        formdata)
    console.log("response send to backend")
    if (response.data.token) {
    setToken(response.data.token)
    setRoleall(role);
    setFirstname(response.data.firstname)
        navigate("/");
      } else {
        alert(response.data.msg || "Invalid Credentials");
      }
    }
    catch(err){
        setMsg(err.response.data.msg  || "Error Signing In" )
    }
  }

  return (
    <div className="bg-[#191e9a] h-screen w-full flex items-center ">
      <div className="text-white text-center font-font1 w-3/4 py-40 font-bold ">
        <h1 className="text-6xl mb-10">Hello</h1>
        <h1 className="text-6xl mb-20">CBITian</h1>
      </div>
      <div className="w-1/2 shadow-lg rounded-md  h-full bg-white py-36 px-20 ">
        <h1 className="font-bold text-4xl">Login</h1>
        <h1 className="font-font1 text-3xl pt-20">Welcome Back</h1>
        <form action="" className="py-3" onSubmit={handleSubmit}>
          <input
            type="email"
            name='email'
            placeholder="email"
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
          <button className="block w-[300px] m-[1px] h-[35px] rounded-sm bg-[#191e9a] text-white hover:bg-white hover:text-black mt-4 "
          onClick={handleSubmit}
          >
            Login
          </button>
          <p className="text-sm text-center mt-5 cursor-pointer ">
            Forgot Password?
          </p>
          <p>

          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
