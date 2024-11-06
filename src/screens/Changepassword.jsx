import React, { useState } from 'react'
import { counterToken, roleforall } from '../statemag'
import { useRecoilValue } from 'recoil'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Changepassword = () => {
    const [message,setMessage]=useState("")
    const [formd,setFormd]=useState({
        oldpassword:"",
        newpassword:""
    })
    const token=useRecoilValue(counterToken);
    const role=useRecoilValue(roleforall)
    const navigate=useNavigate()
    if(!token){
        navigate("/signin")
    }
    const handleChange=(e)=>{
        e.preventDefault();
        const {name,value}=e.target;
        setFormd({...formd,[name]:value})
    }
    const handleSubmit=async (e)=>{
       
        e.preventDefault();
        console.log(role)
        const {oldpassword,newpassword}=formd;
        if(!oldpassword || !newpassword){
            alert("Please enter all the fields")
        }
        try{
        const response=await axios.put(`https://cmforcollege-1.onrender.com/api/${role}/changepassword`,
            formd,{
               headers:{
                token:token,
               "Content-Type": "application/json"
               }
            }
        )
        if(response.data.success){
            alert("Password changed successfully")
            navigate('/')
        }
    }
    catch(err){
        setMessage(err.response.data.msg  || "Error Changing Password" )
    }
        
    }
  return (
    <div>
         <div className='bg-[#191e9a] h-screen w-full flex items-center ' >
        <div className='text-white text-center font-font1 w-3/4 py-40 font-bold ' >
            <h1 className='text-6xl mb-10' >Hello</h1>
            <h1 className='text-6xl mb-20' >CBITian</h1>
        </div>
        <div className='w-1/2 shadow-lg rounded-md  h-full bg-white py-36 px-20 ' >
            <h1 className='font-bold text-4xl' >Change Your Password</h1>
                <h1 className='font-font1 text-3xl pt-20' >Enter your old and new passwords</h1>
            <form action="" className='py-3' onSubmit={handleSubmit}  >
                <input type='password' placeholder='OldPassword' name='oldpassword' onChange={handleChange} className='block w-[300px] m-[1px] h-[35px] rounded-sm mt-4 '  />
                <input type='password' placeholder='NewPassword' name='newpassword' onChange={handleChange} className='block w-[300px] m-[1px] h-[35px] rounded-sm mt-4 '  />
                {
                    message && <p className='text-red-500 text-xs'>{message}</p>  // Displaying error message if any.
                }
                <button className='block w-[300px] m-[1px] h-[35px] rounded-sm bg-[#191e9a] text-white hover:bg-white hover:text-black mt-4 ' >Submit</button>
  
            </form>
        </div>
    </div>
    </div>
  )
}

export default Changepassword