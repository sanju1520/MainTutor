import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

function TutorDetails(){
    const [tutor,setTutors]=useState(null);
    const {id}=useParams();


useEffect(()=>{
    axios.get(""+id).then(resp=>setTutors(resp.data));
},[])

return(
    <div align='center'>
       {
         tutor!==null &&
         <div>
             
             <p><b>Tutor Details</b></p>
                <p>User Id:{tutor.userId}</p>
                <p>UserName:{tutor.username}</p>
                <p>First Name:{tutor.firstName}</p>
                <p>Last Name:{tutor.lastName}</p>
                <p>Mobile No:{tutor.mobileNo}</p>
                <p>Email: {tutor.email}</p>
                <p>Address:{tutor.address}</p>
                <p>Role:{tutor.role}</p>
                <p>Experience:{tutor.experience}</p>
                <p>subjectSpecialization:{tutor.subjectSpecialization}</p>
         </div>
       }
    </div>
)
}

export default TutorDetails;

