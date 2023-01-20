import React,{useState} from 'react';

import axios from 'axios';

import { useNavigate} from 'react-router-dom';



function TutorLogin(){



    const[username,setUsername]=useState("");

    const[password,setPassword]=useState("");



    const[msg,setMsg]=useState("");



    const[formErrors,setFormErrors]=useState({});




    const navigate=useNavigate();




    const handleSubmit= () => {

        let errors={};

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

            username: username,

            password: password

        }



       



        axios.post("http://localhost:8080/login/tutor",payload).then(resp=>{

            const obj={

                userId:resp.data.userId,

                firstName:resp.data.firstName,

                lastName:resp.data.lastName,

            }




            localStorage.setItem("mytoken",JSON.stringify(obj));



            alert("Login success");



            //navigate("/booking/tutorid");

            navigate("/tutorDashboard");

           



        })



        .catch(error=>{

            alert("login failed")

        })

    }

    }




    return(



        <div class="container-fluid">

            {

                msg

            }



            <div className="form group">

                <label htmlFor='username'>Username</label>

                <input type="text" name="username" value={username} className="form-control" id="username"

                    onChange={(event)=>setUsername(event.target.value)}/>

                {

                    formErrors.usernameError && <div style={{color:"red"}}>{formErrors.usernameError}</div>

                }

            </div>




            <div className="form group">

                <label htmlFor='password'>Password</label>

                <input type="password" name="password" value={password} className="form-control" id="password"

                     onChange={(event)=>setPassword(event.target.value)}/>

                {

                    formErrors.passwordError && <div style={{color:"red"}}>{formErrors.passwordError}</div>

                }

            </div>



            <div>

                <button onClick={handleSubmit} className="btn btn-primary">Login</button>

            </div>



        </div>

    )  



}



export default TutorLogin;