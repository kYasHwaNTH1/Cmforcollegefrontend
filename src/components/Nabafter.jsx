import React, { useState } from "react";

const Nabafter = () => {
  const [flag, setFlag] = useState(false);
  const [personflag,setPersonflag] = useState(false)

  return (
    <div className="h-22 w-full bg-white flex justify-between items-center relative"
    onClick={() => {
    flag &&    setFlag(false);
    personflag && setPersonflag(false);
      }}
    >
      <div className="w-1/2 flex items-center ">
        <img
          src="https://www.cbit.ac.in/wp-content/uploads/2023/09/CBIT-LOGO.png"
          className="h-full w-1/2 ml-10"
        />
      </div>
      <div className="text-black flex items-center text-md justify-between gap-[40px] mr-10 font-font1 cursor-pointer ">
        <h2
          className="relative"
          onClick={()=>{
            setPersonflag(!personflag);
            setFlag(false);
          }}
        >
          <span className="material-icons text-3xl text-gray-500">person</span>
          {
            personflag && (
                <div className="absolute right-5 bg-gray-500 mt-4 w-48  border-gray-300 shadow-lg rounded-md" >
                    <h3 className="text-sm px-4 py-2 hover:bg-gray-100 cursor-pointer" >Home</h3>
                    <h3 className="text-sm px-4 py-2 hover:bg-gray-100 cursor-pointer" >My Issues</h3>
                    <h3 className="text-sm px-4 py-2 hover:bg-gray-100 cursor-pointer" >Post an Issue</h3>
                </div>
            )
                
            
          }
        </h2>

        <h2
          onClick={() => {
            setFlag(!flag);
            setPersonflag(false);
          }}
          className="relative"
        >
          <span className="material-icons text-2xl text-gray-500">
            settings
          </span>
          {
            flag && (
                <div className="absolute right-0 bg-gray-400 mt-4 w-48 border-gray-300 shadow-lg rounded-md" >
                    <ul>
                    <h3 className="text-sm px-4 py-2 hover:bg-gray-100 cursor-pointer" >Change Password</h3>
                    <h3 className="text-sm px-4 py-2 hover:bg-gray-100 cursor-pointer" >Logout</h3>
                    </ul>
                   
                </div>
            )
          }
        </h2>
      </div>
    </div>
  );
};

export default Nabafter;
