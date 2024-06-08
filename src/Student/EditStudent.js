import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditStudent = () => {
    const { _id } = useParams();
    const [newid, setId] = useState("")
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("")
    const [status, setStatus] = useState("");

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://mernstudentserver.onrender.com/student/${_id}`)
            .then((response) => {
                setId(response.data._id)
                setName(response.data.name);
                setMobile(response.data.mobile);
                setEmail(response.data.email);
                setCourse(response.data.course);
                setStatus(response.data.status);
            })
    }, [])
    const updateStudent = (e) => {
        e.preventDefault();
        axios.put(`https://mernstudentserver.onrender.com/student/${_id}`, { _id, name, mobile, email, course, status })
            .then(() => {
                navigate("/")
            })
            .catch((err) => console.log(err))
    }
    return (
        <div className='container p-5'>
            <div className='col-8 col-lg-6 mx-auto shadow p-5' >
                <h1>Update Student</h1>
                <form onSubmit={updateStudent}>
                    <input type='text' name='name' className='form-control mb-3' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name' />
                    <input type='tel' name='mobile' className='form-control mb-3' value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder='Mobile Number' />
                    <input type='text' name='email' className='form-control mb-3' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' />
                    <input type='text' name='course' className='form-control mb-3' value={course} onChange={(e) => setCourse(e.target.value)} placeholder='Course Name' />
                    <input type='text' name='status' className='form-control mb-3' value={status} onChange={(e) => setStatus(e.target.value)} placeholder='Course Status' />
                    <input type='submit' />
                </form>
            </div>
        </div>
    )
}

export default EditStudent