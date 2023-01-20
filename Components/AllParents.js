import React,{useEffect,useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function AllParents(){
    const[parents,setParents]=useState([])

    //useEffect is similar to componentDidMount and componentDidUpdate methods of stateful components
    useEffect(()=>{
        axios.get("http://localhost:8083/tutor/all").then(resp=>setParents(resp.data));
    },[])
    return(
        <div>
            <h3 align='center'>Parent Records</h3>
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
                            
                            
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            parents.map(parent =>
                                <tr key={parent.userId}>
                                    <td>{parent.userId}</td>
                                    <td>{parent.username} </td>
                                    <td>{parent.userPassword}</td>
                                    <td>{parent.firstName}</td>
                                    <td>{parent.lastName}</td>
                                    <td>{parent.mobileNo}</td>
                                    <td>{parent.email}</td>
                                    <td>{parent.address}</td>
                                    <td>{parent.role.roleName}</td>
                                    <td>{parent.role.roleId}</td>
                                   

                                 
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                <hr/>
        </div>
    )
}
export default AllParents;