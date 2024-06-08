import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const StudentData = () => {
    const [students, setStudents] = useState([])
    useEffect(() => {
        axios.get("https://mernstudentserver.onrender.com/student")
            .then((res) => {
                setStudents(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    })
    const deleteStudent = (StudentId) => {
        axios.delete(`https://mernstudentserver.onrender.com/student/${StudentId}`)
            .then(() => alert("Student Deleted"))
            .catch((err) => console.log(err))
    }
    return (
        <div className='container p-5'>
            <h1>Student Data</h1>
            <table className='table table-bordered'>
                <thead className='table-dark'>
                    <tr>
                        <th>Student Name</th>
                        <th>Mobile Number</th>
                        <th>Email Address</th>
                        <th>Course</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((stu, index) => {
                        return (
                            <tr key={index}>
                                <td>{stu.name}</td>
                                <td>{stu.mobile}</td>
                                <td>{stu.email}</td>
                                <td>{stu.course}</td>
                                <td>{stu.status}</td>
                                <td>
                                 <NavLink to={`/edit/${stu._id}`}>   <button className='btn btn-primary me-3'><i className="bi bi-pencil"></i></button></NavLink>
                                    <button className='btn btn-danger' onClick={() => deleteStudent(stu.id)}><i className="bi bi-trash3"></i></button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default StudentData