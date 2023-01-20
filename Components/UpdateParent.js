import axios from "axios";

import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";



function UpdateParent() {



    const  {userid} = useParams();

    const[userId,setuserId]=useState("");
    const[username,setusername]=useState("");
    const[userPassword,setuserPassword]=useState("");
    const[firstName,setfirstName]=useState("");
    const[lastName,setlastName]=useState("");
    const[mobileNo,setmobileNo]=useState("");
    const[email,setemail]=useState("");
    const[address,setaddress]=useState("");
    
    const[role,setrole]=useState("");
    const[roleId,setroleId]=useState("");
    const[roleName,setroleName]=useState("");

   

    



    useEffect(() => {



        axios.get("http://localhost:8083/parent/update" + userid).then(resp => {
            setuserId(resp.data.userId);

            setusername(resp.data.username);

            setuserPassword(resp.data.userPassword);
            setfirstName(resp.data.firstName);
            setlastName(resp.data.lastName);
            setmobileNo(resp.data.mobileNo);
            setemail(resp.data.email);
            setaddress(resp.data.address);
            setrole(resp.data.role.roleId.roleName);
           

        });

    }, [])

    const updateParentSubmit = () => {

        const payload = {

            userId:userId,
            username:username,
            userPassword:userPassword,
            firstName:firstName,
            lastName:lastName,
            mobileNo:mobileNo,
            email:email,
            address:address,

           


        }

        axios.put("", payload).then(resp => alert("Parent updated."));

    }



    return (<div>

        <div className="container">

            <h1>Update Parent</h1>

            
            <div className="form-group">
                <label htmlFor='userId'>UserId</label>
                <input type='text' name='userId' value={userId} placeholder='UserId' className="form-control" id="userId" 
                onChange={(event)=>setuserId(event.target.value)} /><br></br>
                </div><br></br>
                
                <div className="form-group">
                <label htmlFor='username'>User Name</label>
                <input type='text' name='username' value={username} placeholder='UserName' className="form-control" id="username" onChange={(event)=>setusername(event.target.value)} /><br></br>
                </div><br></br>

                <div className="form-group">
                <label htmlFor='userPassword'>User Password</label>
                <input type='password' name='userPassword' value={userPassword} placeholder='UserPassword' className="form-control" id="userPassword" onChange={(event)=>setuserPassword(event.target.value)} /><br></br>
                </div><br></br>

                <div className="form-group">
                <label htmlFor='firstName'>First Name</label>
                <input type='text' name='firstName' value={firstName} placeholder='FirstName' className="form-control" id="firstName"  onChange={(event)=>setfirstName(event.target.value)} /><br></br>
                </div><br></br>

                <div className="form-group">
                <label htmlFor='lastName'>Last Name</label>
                <input type='text' name='lastName' value={lastName} placeholder='LastName' className="form-control" id="lastName" onChange={(event)=>setlastName(event.target.value)} /><br></br>
                </div><br></br>

                <div className="form-group">
                <label htmlFor='mobileNo'>Mobile No</label>
                <input type='text' name='mobileNo' value={mobileNo} placeholder='Mobile No' className="form-control" id="mobileNo" onChange={(event)=>setmobileNo(event.target.value)} /><br></br>
                </div><br></br>

                <div className="form-group">
                <label htmlFor='email'>Email</label>
                <input type='text' name='email' value={email} placeholder='Email' className="form-control" id="email" onChange={(event)=>setemail(event.target.value)} /><br></br>
                </div><br></br>

                <div className="form-group">
                <label htmlFor='address'>Address</label>
                <input type='text' name='address' value={address} placeholder='Address' className="form-control" id="address" onChange={(event)=>setaddress(event.target.value)} /><br></br>
                </div><br></br>

                
                




            <button onClick={updateParentSubmit} className="btn btn-primary">Update</button>



        </div>

    </div>)

}

export default UpdateParent;