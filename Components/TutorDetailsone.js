import axios from "axios";

import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

import { useState } from "react";

import Logout from "./Logout";



function TutorDetailsone(){



    const [tutor,setTutor]=useState(null);

    const {tid}=useParams();



    const [bDate,setBookingDate]=useState("");



    const [pUserId,setpUserId]=useState(""); //parent

    const [tUserId,settUserId]=useState(""); //tutor



    const [formErrors,setFormErrors]=useState({});



    const user=JSON.parse(localStorage.getItem("mytoken"));



    // const navigate = useNavigate();



    // const navigateToBooking = () => {



    //     navigate('/addBooking');

    //   };




    useEffect(()=>{



        axios.get("http://localhost:8080/tutor/"+tid).then(resp=>setTutor(resp.data));



    },[])




const handleSubmit=()=>{

        let errors={};

        if (!bDate){

            errors['bDateErrors']="Date is Required."

        }

        setFormErrors(errors);

        const noErrors=Object.keys(errors).length===0;



        if(noErrors){

            const payload={

                parentId: user.userId,

                tutorId: tutor.userId,

                dateOfBooking: bDate

            }

       

        axios.post("http://localhost:8080/booking/save",payload).then(resp=>

            alert("Tutor is booked with booking id:"+resp.data.bookingId));

        }

    }

    return (<div className="container" >



        <div className="row">

            <div className="col">

                {



                    tutor !== null &&

                    <div>

                        <h3 align='center' class="text-success">Tutor Details</h3><br/>

                    <table class="table table-striped table-hover" align='center' >

                    <thead class="table-danger">

                        <tr>

                            <th>User Id</th>

                            <th>First Name</th>

                            <th>Last Name</th>

                            <th>Mobile No</th>

                            <th>Email</th>

                            <th>Address</th>

                            {/* <th>RoleName</th>

                            <th>RoleId</th> */}

                            <th>Experience</th>

                            <th>Subject Specialization</th>

                        </tr>

                    </thead>

                    <tbody class="bg-light table-active">

                        {

                            <tr>

                                <td>{tutor.userId}</td>

                                <td>{tutor.firstName}</td>

                                <td>{tutor.lastName}</td>

                                <td>{tutor.mobileNo}</td>

                                <td>{tutor.email}</td>

                                <td>{tutor.address}</td>

                                {/* <td>{tutor.role.roleName}</td>

                                <td>{tutor.role.roleId}</td> */}

                                <td>{tutor.experience}</td>

                                <td>{tutor.subjectSpecialization}</td>

                            </tr>

                        }



                    </tbody>

                </table><br/><br/>



                <center>

                    <p class="text-info"><b>If you want to book tutor, fill the below details and click on <i>Book Tutor</i></b></p><br/>

                {

                    <div>

                        Date of Booking: <input type="date" name="bDate" value={bDate} id="bDate" onChange={(event)=>setBookingDate(event.target.value)}></input>

                        {

                        formErrors.bDateErrors && <div style={{color:"red"}}>{formErrors.bDateErrors}</div>

                    }

                    </div>  

                }

                <br/>



                <br></br><br></br>

                <button onClick={handleSubmit} className="btn btn-primary">Book Tutor</button> <br/><br/>

                <Logout/>

                <div align="center"><br></br>

                <Link to="/">Back to Home</Link>

                </div>

                </center>



                </div>



                }



            </div>

        </div>

    </div>)

   

}





export default TutorDetailsone;