import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../Components/AllTutor.css";
function AllTutor() {
    const [tutors, setTutors] = useState([])
    const [bDate, setBookingDate] = useState("");
    const navigate = useNavigate();

    //useEffect is similar to componentDidMount and componentDidUpdate methods of stateful components
    useEffect(() => {
        axios.get("http://localhost:8080/tutor/all").then(resp => setTutors(resp.data));
    }, [])
    return (
        <div>
            <h5 align='center' class="text-success">Tutor Records</h5>
            <table className='table table-border' align="center" bgcolor="pink" >

                <thead>

                    <tr>

                        <th>User Id</th>

                        <th>User Name</th>

                        <th>First Name</th>

                        <th>Last Name</th>

                        <th>Mobile No</th>

                        <th>Email</th>

                        <th>Address</th>

                        <th>RoleName</th>

                        <th>RoleId</th>

                        <th>Experience</th>

                        <th>Subject Specialization</th>

                        <th>Status</th>

                    </tr>
                </thead>
                <tbody>
                    {

                        tutors.map(tutor =>

                            <tr key={tutor.userId}>

                                <td>{tutor.userId}</td>

                                <td>{tutor.username} </td>

                                <td>{tutor.firstName}</td>

                                <td>{tutor.lastName}</td>

                                <td>{tutor.mobileNo}</td>

                                <td>{tutor.email}</td>

                                <td>{tutor.address}</td>

                                <td>{tutor.role.roleName}</td>

                                <td>{tutor.role.roleId}</td>

                                <td>{tutor.experience}</td>

                                <td>{tutor.subjectSpecialization}</td>

                                <td color='black'><Link to={`/Add/${tutor.userId}`}>Request</Link></td>


                            </tr>
                        )
                    }
                </tbody>
            </table>
            <h4 class="text-primary" align="center">If You want to Request for the Demo Please Click On <b class="text-danger">Request</b> Link</h4>
            <hr />
        </div>
    )
}



export default AllTutor;