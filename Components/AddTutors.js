import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

function NewTutor() {
    const [userId, setuserId] = useState("");
    const [username, setusername] = useState("");
    const [userPassword, setuserPassword] = useState("");
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [mobileNo, setmobileNo] = useState("");
    const [email, setemail] = useState("");
    const [address, setaddress] = useState("");

   const [role, setrole] = useState("");
   const [roleId, setroleId] = useState("");
    const [roleName, setroleName] = useState("");

    const [experience, setexperience] = useState("");
    const [subjectSpecialization, setsubjectSpecialization] = useState("");
    const [msg, setMsg] = useState("");
    const [formErrors, setFormErrors] = useState({});


    const handleSubmit = () => {

        let errors = {};
        if (!username) {
            errors['usernameError'] = "Username is required."
        }
        if (!userPassword) {
            errors['userPasswordError'] = " UserPassword is required."
        }

        setFormErrors(errors);

        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {
            const payload =
            {
                username: username,
                userPassword: userPassword

            }
            axios.post("http://localhost:8083/tutor/save", payload).then(resp => {
                const obj =
                {
                    userId: resp.data.userId,
                    firstName: resp.data.firstName,
                    lastName: resp.data.lastName,
                    role: resp.data.role
                }
                localStorage.setItem("mytoken", JSON.stringify(obj));
                alert("User Registerd");
                if (resp.data.role === 'Tutor') {
                    Navigate("/TutorDashboardi");
                }
                if (resp.data.role === 'Parent') {
                    Navigate("/ParentDashboardi");
                }

            })

                .catch(error => {
                     alert("Registration failed  !")
                     setMsg(error.response.data);
                 })

        }

        const tutor = {
            userId: userId,
            username: username,
            userPassword: userPassword,
            firstName: firstName,
            lastName: lastName,
            mobileNo: mobileNo,
            email: email,
            address: address,

            experience: experience,
            subjectSpecialization: subjectSpecialization,

           role:
            {
              roleId: roleId,
             roleName: roleName
            }



        }
        axios.post("http://localhost:8083/tutor/save", tutor).then(resp => alert("Tutor Added Successfully"));
    }

    return (
        (<div className="container">

            <div align='center'>
                <h3 >New Tutor Registration</h3>

                <div className="form-group">
                    <label htmlFor='userId'>UserId</label>
                    <input type='text' name='userId' value={userId} placeholder='UserId' className="form-control" id="userId"
                        onChange={(event) => setuserId(event.target.value)} />
                </div>

                <br></br>
                <div className="form-group">
                    <label htmlFor='username'>User Name</label>
                    <input type='text' name='username' value={username} placeholder='UserName' className="form-control" id="username" onChange={(event) => setusername(event.target.value)} /><br></br>

                    {
                        formErrors.usernameError && <div style={{ color: "red" }}>{formErrors.usernameError}</div>
                    }

                </div>
                <br></br>



                <div className="form-group">
                    <label htmlFor='userPassword'>User Password : </label>
                    <input type='password' name='userPassword' value={userPassword} placeholder='UserPassword' className="form-control" id="userPassword" onChange={(event) => setuserPassword(event.target.value)} /><br></br>
                    {
                        formErrors.userPasswordError && <div style={{ color: "red" }}>{formErrors.userPasswordError}</div>
                    }
                </div>
                <br></br>

                <div className="form-group">
                    <label htmlFor='firstName'>First Name</label>
                    <input type='text' name='firstName' value={firstName} placeholder='FirstName' className="form-control" id="firstName" onChange={(event) => setfirstName(event.target.value)} /><br></br>

                    <br></br>
                </div>

                <div className="form-group">
                    <label htmlFor='lastName'>Last Name</label>
                    <input type='text' name='lastName' value={lastName} placeholder='LastName' className="form-control" id="lastName" onChange={(event) => setlastName(event.target.value)} /><br></br>
                    <br></br>
                </div>

                <div className="form-group">
                    <label htmlFor='mobileNo'>Mobile No</label>
                    <input type='text' name='mobileNo' value={mobileNo} placeholder='Mobile No' className="form-control" id="mobileNo" onChange={(event) => setmobileNo(event.target.value)} /><br></br>
                    <br></br>
                </div>

                <div className="form-group">
                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email' value={email} placeholder='Email' className="form-control" id="email" onChange={(event) => setemail(event.target.value)} /><br></br>
                    <br></br>
                </div>

                <div className="form-group">
                    <label htmlFor='address'>Address</label>
                    <input type='text' name='address' value={address} placeholder='Address' className="form-control" id="address" onChange={(event) => setaddress(event.target.value)} /><br></br>
                    <br></br>
                </div>

                <div className="form-group"> 
                    <label htmlFor='role'>Role</label> 
                    <input type='text' name='role' value={role} placeholder='Role' className="form-control" id="role" onChange={(event) => setrole(event.target.value)} /><br></br> 

                    { 
                        formErrors.roleError && <div style={{ color: "red" }}>{formErrors.roleError}</div>
                 }
                 </div> 
            <br></br> 

                 <div className="form-group">
                     <label htmlFor='roleId'>RoleId</label> 
                    <input type='text' name='roleId' value={roleId} placeholder='RoleId' className="form-control" id="roleId" onChange={(event) => setroleId(event.target.value)} /><br></br> 
                 </div> 
                <br></br> 

                 <div className="form-group"> 
                     <label htmlFor='roleName'>Role Name</label> 
                    <input type='text' name='roleName' value={roleName} placeholder='RoleName' className="form-control" id="roleName" onChange={(event) => setroleName(event.target.value)} /><br></br> 
                 </div> 
                <br></br> 


                <div className="form-group">
                    <label htmlFor='experience'>Experience</label>
                    <input type="text" name='experience' value={experience} placeholder="Experience" className="form-control" id="experience" onChange={(event) => setexperience(event.target.value)} /><br></br>
                </div>
                <br></br>

                <div className="form-group">
                    <label htmlFor='subjectSpecialization'>Subject Specialization</label>
                    <input type="text" name='subjectSpecialization' value={subjectSpecialization} placeholder="Subject Specialization" className="form-control" id="subjectspecialization" onChange={(event) => setsubjectSpecialization(event.target.value)} /><br></br>
                </div>

                <br></br>
                <button onClick={handleSubmit} className="btn btn-primary"><Link to="/TutorDashboardi"></Link>Register</button>
            </div>
        </div>)
    )
}


export default NewTutor;