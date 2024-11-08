import React from "react";
import { Link } from "react-router-dom";
const Nabbefore = () => {
  return (
    <div className="h-22 w-full bg-white flex justify-between items-center relative">
      <div className="w-1/2 flex items-center ">
        <img
          src="https://www.cbit.ac.in/wp-content/uploads/2023/09/CBIT-LOGO.png"
          className="h-full w-1/2 ml-10"
        />
      </div>
      <div className="text-black flex items-center text-md justify-between gap-[40px] mr-10 font-font1 cursor-pointer ">
        <Link to='/' >
          <h2>About us</h2>
        </Link>
        <Link to="/signin">
      
          <h2>Sign In</h2>
        </Link>
        <Link to="/signup">
          <h2>Sign up</h2>
        </Link>
      </div>
    </div>
  );
};

export default Nabbefore;
