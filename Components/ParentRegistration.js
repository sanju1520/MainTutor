import React,{useState} from 'react';

import axios from 'axios';

import {useNavigate} from 'react-router-dom';



function ParentRegistration(){



    const[fName,setFName]=useState("");



    const[lName,setLName]=useState("");



    const[email,setEmail]=useState("");



    const[mobileNo,setMobileNo]=useState("");



    const[address,setAddress]=useState("");



    const[role,SetRole]=useState("");



    const[username,setUsername]=useState("");



    const[password,setPassword]=useState("");



    const[formErrors,setFormErrors]=useState({});



    const[msg,setMsg]=useState("");



    const navigate=useNavigate();



    const handleSubmit=()=>{

        let errors={};



        if(!fName){

            errors['fNameError']="Name is required"

        }

        if(!lName){

            errors['lNameError']="Surname is required"

        }

        if(!email){

            errors['emailError']="Email is required"

        }

        if(!mobileNo){

            errors['mobileNoError']="MobileNo is required"

        }

        if(!address){

            errors['addressError']="address is required"

        }

   

        if(!username){

            errors['usernameError']="Username is required"

        }

        if(!password){

            errors['passwordError']="Password is required"

        }

        setFormErrors(errors);

        const noErrors=Object.keys(errors).length===0;

        if(noErrors){

       

            const payload={

                fName:fName,

                lName:lName,

                email:email,

                mobileNo:mobileNo,

                address:address,

                username:username,

                password:password



        }



        axios.post("http://localhost:8083/parent/save",payload).then(resp=>{



           

            alert("Registration success");

            navigate("/Dashboard");

        })



        .catch(error=>{

            alert("login failed")

            setMsg(error.response.data);

        })



    }

}

    return(

        <div align='center'>

        <div className="container-fluid">

            {

                msg

            }

            <div className="form-group">



                <label htmlFor='fName'>First Name</label>



                <input type='text' name="fName" value={fName} className="form-control" id="fName"



                onChange={(event)=>setFName(event.target.value)}></input>

                {

                    formErrors.fNameError && <div style={{color:"red"}}>{formErrors.fNameError}</div>

                }

            </div>





            <div className="form-group">



                <label htmlFor='lName'>Last Name</label>



                <input type='text' name="lName" value={lName} className="form-control" id="lName"



                onChange={(event)=>setLName(event.target.value)}></input>

                {

                    formErrors.lNameError && <div style={{color:"red"}}>{formErrors.lNameError}</div>

                }



            </div>





            <div className="form-group">



                <label htmlFor=''>Email</label>



                <input type='email' name="email" value={email} className="form-control" id="email"



                onChange={(event)=>setEmail(event.target.value)}></input>

                {

                    formErrors.emailError && <div style={{color:"red"}}>{formErrors.emailError}</div>

                }



            </div>





            <div className="form-group">



                <label htmlFor=''>Mobile No</label>



                <input type='text' name="mobileNo" value={mobileNo} className="form-control" id="mobileNo"



                onChange={(event)=>setMobileNo(event.target.value)}></input>

                {

                    formErrors.mobileNoError && <div style={{color:"red"}}>{formErrors.mobileNoError}</div>

                }



            </div>





            <div className="form-group">



                <label htmlFor=''>Address</label>



                <input type='text' name="address" value={address} className="form-control" id="address"



                onChange={(event)=>setAddress(event.target.value)}></input>

                {

                    formErrors.addressError && <div style={{color:"red"}}>{formErrors.addressError}</div>

                }



            </div>





            <div className="form-group">



                <label htmlFor=''>Role</label>



                <input type='text' name="role" value={role} className="form-control" id="role"



                onChange={(event)=>SetRole(event.target.value)}></input>

                {

                    formErrors.roleError && <div style={{color:"red"}}>{formErrors.roleError}</div>

                }



            </div>





            <div className="form-group">



                <label htmlFor='username'>Username</label>



                <input type='text' name="username" value={username} className="form-control" id="username"



                onChange={(event)=>setUsername(event.target.value)}></input>

                {

                    formErrors.usernameError && <div style={{color:"red"}}>{formErrors.usernameError}</div>

                }



            </div>



            <div className="form-group">



                <label htmlFor='password'>Password</label>



                <input type='password' name="password" value={password} className="form-control" id="password"



                onChange={(event)=>setPassword(event.target.value)}></input>

                {

                    formErrors.passwordError && <div style={{color:"red"}}>{formErrors.passwordError}</div>

                }



            </div>



            <button onClick={handleSubmit} className="btn btn-primary">Login</button>



        </div>

        </div>



    )



}



export default ParentRegistration;