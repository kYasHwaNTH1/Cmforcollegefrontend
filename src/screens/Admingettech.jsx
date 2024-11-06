import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { counterToken } from "../statemag";
import userLogo from '../components/userlogo.png';
import Issuedisplay from "../components/Issuedisplay";
import { useNavigate } from "react-router-dom";

const Admingettech = () => {
    const navigate=useNavigate()
  const [technicians, setTechnicians] = useState([]);
  const [iot,setIot]=useState([])
  const [id,setId]=useState("")
  const [msg, setMsg] = useState("");
  const token = useRecoilValue(counterToken);
  const [technicianid, setTechnicianid] = useState(null)
//   const handleSubmit=async(e)=>{
//         e.preventDefault();
//         try{
//         const res=await axios.get(`https://cmforcollege-1.onrender.com/api/admin/technicianissues`,{
//             headers:{
//                 token:token,
//                 email:email,
//                 "Content-Type": "application/json",
//             }
//         })
//         setIot(res.data)
//     }
//     catch(err){
//         setMsg(err.response.data.msg)
//     }
//   }
const handleSubmit=async(e)=>{
     navigate(`/admintechies/${id}`);
}
  useEffect(() => {
    const fetchd = async () => {
      try {
        const res = await axios.get(
          `https://cmforcollege-1.onrender.com/api/admin/gettechnicians`,
          {
            headers: {
              token: token,
              "Content-Type": "application/json",
            },
          }
        );
        setTechnicians(res.data);
      } catch (error) {
        setMsg(error.message);
      }
    };
    fetchd();
  }, [token]);

  return (
    <div className="flex items-center justify-center h-screen w-full">
      {msg && <p>{msg}</p>}
      {technicians && technicians.length > 0 ? (
        technicians.map((technician) => (
          <div
            key={technician._id}
            className="min-h-72 h-96 shadow-lg rounded-lg m-8 min-w-80 flex flex-col items-center bg-gray-200 p-6 hover:bg-[#D4F6FF] 
            transform transition-transform duration-300 hover:scale-105"
>
            <img src={userLogo} className="h-32 w-40 mb-6" alt="User Logo" />
            <div className="flex flex-col w-full">
              <div className="flex mb-2">
                <span className="font-bold w-32">UserName:</span>
                <span className="font-light">{technician.firstname} {technician.lastname}</span>
              </div>
              <div className="flex mb-2">
                <span className="font-bold w-32">Email:</span>
                <span className="font-light"  >{technician.email}</span>
              </div>
              <div className="flex mb-2">
                <span className="font-bold w-32">WorkBench:</span>
                <span className="font-light">{technician.workbench}</span>
              </div>
              
            </div>
               <button onMouseEnter={()=>{setId(technician._id)}} onClick={handleSubmit} className="bg-blue-600 text-white px-8 py-2 rounded-md">Get Details</button>
            
          </div>
        ))
      ) : (
        <p>No technicians found.</p>
      )}
      {
        iot && iot.map(issue=>{
            return(
                <Issuedisplay key={issue._id} issue={issue}/>
            )
        })
      }
    </div>
  );
};

export default Admingettech;
