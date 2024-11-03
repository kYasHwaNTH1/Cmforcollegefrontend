import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { counterToken, roleforall } from "../statemag";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Postissue = () => {
  const token = useRecoilValue(counterToken);
  const role = useRecoilValue(roleforall);
  const navigate = useNavigate();
  if (!token) {
    navigate("/signin");
  }

  const [sm, setSm] = useState(null);

  const [formdata, setFormdata] = useState({
    branch: "",
    lab: "",
    location: "",
    exactissue: "",
    issuetype: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `http://localhost:3000/api/${role}/issueform`,
        formdata,{
            headers:{
             token:token,
            "Content-Type": "application/json"
            }
         }
      );
      if (res.data.success) {
        setSm(
          "Your Issue is Submitted.Our Technician will take care of it.Chill Out"
        );
        setFormdata({
            branch: "",
            lab: "",
            location: "",
            exactissue: "",
            issuetype: "",
          });
      }
    } catch (err) {
      console.log(err.message);
      setSm("Something went wrong. Please try again later");
      setFormdata({
        branch: "",
        lab: "",
        location: "",
        exactissue: "",
        issuetype: "",
      });
    }
  };
 
  return (
    <div className="h-screen w-full flex items-center">
      <div className="bg-[#B03052] h-full w-1/2 py-44 min-w-1/2 ">
        <h1 className="text-white text-center font-font1 text-6xl mb-20 ">
          Hello{" "}
        </h1>
        <h1 className="text-white text-center font-font1 text-6xl">CBITian</h1>
      </div>
      <div className="w-1/2 h-full flex bg-gray-100 items-center justify-center">
        <div className="rounded-md shadow-md bg-white py-20 px-10">
          <h1 className="text-center text-3xl mb-10">Post an Issue</h1>
          <form onSubmit={handleSubmit}>
            <input
              className="m-2 min-h-[35px] rounded-sm w-[300px]"
              value={formdata.branch}
              name="branch"
              onChange={handleChange}
              placeholder="Enter the branch"
            />
            <input
              placeholder="Enter the lab"
              value={formdata.lab}
              name="lab"
              onChange={handleChange}
              className=" block m-2 min-h-[35px] rounded-sm w-[300px]"
            />
            <input
              placeholder="Enter the location"
              value={formdata.location}
              name="location"
              onChange={handleChange}
              className="block m-2 min-h-[35px] rounded-sm w-[300px]"
            />
            <input
              placeholder="Enter the exact issue"
              value={formdata.exactissue}
              name="exactissue"
              onChange={handleChange}
              className="block m-2 min-h-[35px] rounded-sm w-[300px]"
            />
            <select
              className="m-2 min-h-[35px] rounded-sm w-[300px]"
              value={formdata.issuetype}
              onChange={handleChange}
              name="issuetype"
            >
              <option value="">Select Issue Type</option>
              <option value="Software">Software</option>
              <option value="Hardware">Hardware</option>
              <option value="OS">OS</option>
            </select>
            {sm && (
              <p>
                <span className="text-blue-500">{sm}</span>
              </p>
            )}
            <button className="m-2 min-h-[35px] rounded-sm bg-[#191e9a] text-white hover:bg-white hover:text-black">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Postissue;
