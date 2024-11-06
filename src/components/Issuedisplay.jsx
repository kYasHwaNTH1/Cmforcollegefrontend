import React, { useState } from "react";
import down from "../components/download.png";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { counterToken, roleforall, statusoftheissue } from "../statemag";
import axios from "axios";

const Issuedisplay = ({ issue }) => {
    const token=useRecoilValue(counterToken)
  const role = useRecoilValue(roleforall);
  const status=useRecoilValue(statusoftheissue);
  const setStatus=useSetRecoilState(statusoftheissue);

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `https://cmforcollege-1.onrender.com/api/${role}/changestatus`,
        {}, 
        {
          headers: {
            token:token,
            issueid: issue._id,
            "Content-Type": "application/json",
          },
        }
      );
      
      if (res.data.success) {
        setStatus(c=>!c); // Toggle the status based on backend response
      }
    } catch (error) {
      console.error("Error updating status:", error.message);
    }
  };

  return (
    <div className="h-[500px] w-[300px] rounded-lg shadow-lg p-4 m-6">
      <img src={down} className="w-[300px] mb-4" alt="Issue" />
      <h1 className="mb-3"> <span className="font-font1 font-bold" >Branch:  </span> <span className="font-thin" >  {issue.branch} </span></h1>
      <h1 className="mb-3"> <span className="font-font1 font-bold">Lab: </span>  <span className="font-thin">{issue.lab} </span> </h1>
      <h1 className="mb-3"> <span className="font-font1 font-bold">Location:</span>  <span className="font-thin"> {issue.location}</span> </h1>
      <h1 className="mb-3"> <span className="font-font1 font-bold">Exact Issue: </span>  <span className="font-thin"> {issue.exactissue} </span></h1>
      <h1 className="mb-3">  <span className="font-font1 font-bold">Issue Type: </span>  <span className="font-thin">{issue.issuetype} </span> </h1>
      {issue.stateoftheissue ? (
        <h1 className="mb-3">Status: Solved </h1>
      ) : (
        <h1 className="mb-3">Status: Your issue is being reviewed</h1>
      )}
      {(role === "admin" || role === "technician") && <button  className="text-white bg-blue-600 hover:bg-green-400 rounded-lg hover:text-black px-10 py-3" onClick={handleClick}>
        Change Status
      </button>}
    </div>
  );
};

export default Issuedisplay;
