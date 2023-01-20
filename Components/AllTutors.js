import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function AllTutors(){
    const[tutors,setTutors]=useState([])

    //useEffect is similar to componentDidMount and componentDidUpdate methods of stateful components
    useEffect(()=>{
        axios.get("http://localhost:8083/tutor/all").then(resp=>setTutors(resp.data));
    },[])
    return(
        <div>
            <h3 align='center'>Tutor Records</h3>
            <table border={10} align='center'>
                    <thead>
                        <tr> 
                            <th>User Id</th>
                            <th>User Name</th>
                            <th>User Password</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Mobile No</th>
                            <th>Email</th>
                            <th>Address</th>

                            <th>RoleName</th>
                            <th>RoleId</th>
                            
                            
                            <th>Experience</th>
                            
                            <th>Subject Specialization</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tutors.map(tutor =>
                                
                                <tr key={tutor.userId}>
                                    <td>{tutor.userId}</td>
                                    <td>{tutor.username} </td>
                                    <td>{tutor.userPassword}</td>
                                    <td>{tutor.firstName}</td>
                                    <td>{tutor.lastName}</td>
                                    <td>{tutor.mobileNo}</td>
                                    <td>{tutor.email}</td>
                                    <td>{tutor.address}</td>
                                    <td>{tutor.role.roleName}</td>
                                    <td>{tutor.role.roleId}</td>
                                    <td>{tutor.experience}</td>
                                    <td>{tutor.subjectSpecialization}</td>
                                   

                                 
                                </tr>
                                
                            )
                        }
                    </tbody>
                </table>
                <hr/>
        </div>
    )
}
export default AllTutors;