import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Issuedisplay from '../components/Issuedisplay';
import { useRecoilValue } from 'recoil';
import { counterToken } from '../statemag';

const Eachtechnician = () => {
    const token = useRecoilValue(counterToken);
    const [msg, setMsg] = useState("");
    const { id } = useParams();
    const [iot, setIot] = useState([]);

    useEffect(() => {
        const fetchTechnicianIssues = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/api/admin/technicianissues/${id}`, {
                    headers: {
                        token: token,
                        "Content-Type": "application/json",
                    }
                });
                setIot(res.data);
            } catch (error) {
                setMsg(error.message);
            }
        };
        fetchTechnicianIssues();
    }, [id, token]);

    return (
        <div className='h-screen'>
            {msg && <p>{msg}</p>}
            {iot.length > 0 ? (
                iot.map((issue) => (
                    <Issuedisplay key={issue._id} issue={issue} />
                ))
            ) : (
                <p>No issues found for this technician.</p>
            )}
        </div>
    );
};

export default Eachtechnician;
