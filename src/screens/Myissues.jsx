import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { counterToken, roleforall, statusoftheissue } from "../statemag";
import Issuedisplay from "../components/Issuedisplay";
import { useNavigate } from "react-router-dom";


const Myissues = () => {
  const [issues, setIssues] = useState([]);
  const status=useRecoilValue(statusoftheissue)
const [msg,setMsg]=useState("")
  const token = useRecoilValue(counterToken);
  const role = useRecoilValue(roleforall);

  const navigate = useNavigate();
  if (!token) {
    navigate("/signin");
  }
  
  useEffect(() => {
    const fetchd = async () => {
      try {
        const res = await axios.get(
          `https://cmforcollege-1.onrender.com/api/${role}/myissues`,
          {
            headers: {
              token: token,
              "Content-Type": "application/json",
            },
          }
        );
        setIssues(res.data);
      } catch (error) {
        setMsg(error.response?.data?.msg || "An error occurred");
      }
    };
    fetchd();
  }, [role, token,status]);

  return (
    <div className="h-screen w-full">
      {issues.length > 0 ? (
        issues.map((issue) => <Issuedisplay key={issue._id} issue={issue} />)
      ) : (
        <p>No issues found</p>
      )}
    { msg && <p>{msg}</p>}
    </div>
  );
};

export default Myissues;
