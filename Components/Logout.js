import React from 'react';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
function Logout()
{

 const tutor = JSON.parse(localStorage.getItem("mytoken"));
 const navigate= useNavigate();

 const handleLogout = () =>
 {
    if(tutor !== null)
    {
        localStorage.removeItem("mytoken");
        alert("Successfully logout");
        navigate("/");
    }
 }

 return(<div>
    {/* <button onClick={handleLogout}><Link to="/Home3"></Link>Logout</button> */}
    <h1><Link to="/home"> Logout</Link></h1>
 </div>)
} 

export default Logout;
