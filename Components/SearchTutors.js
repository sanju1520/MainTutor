


import React, { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";



function SearchTutors() {

    const [userId, setUserId] = useState("");

    const [tutor, setTutor] = useState(null);

    const [message, setMessage] = useState("");

    const navigate = useNavigate();



    const handleButton = () => {

        axios.get("http://localhost:8083/tutor/" + userId).then(resp => {
            setTutor(resp.data);

            navigate(`/SearchTutors/${resp.data.userId}`);

        })



            .catch(error => {

                setTutor(null);

                //  setMessage(error.response.data)

                alert("User Not Existing")

            })

    }



    return (

        <div align='center'>

            <h3>Search Tutor</h3>

            <div>

                UserId:<input type='text' name='userId' value={userId} onChange={(event) => setUserId(event.target.value)} /><br></br>

                <button onClick={handleButton}>Search</button>

            </div>
            <div>
                <h3 align='center'>Tutor Records</h3>
                <table border={10} align='center'>
                    <thead>
                        <tr>

                            {

                                tutor !== null ? <div>

                                    <b>Tutor Details</b>

                                    <th>User Id:<br></br>{tutor.userId}</th>

                                    <th>UserName:<br></br>{tutor.username}</th>

                                    <th>First Name:<br></br>{tutor.firstName}</th>

                                    <th>Last Name:<br></br>{tutor.lastName}</th>

                                    <th>Mobile No:<br></br>{tutor.mobileNo}</th>

                                    <th>Email: <br></br>{tutor.email}</th>

                                    <th>Address:<br></br>{tutor.address}</th>


                                    <th>Experience:<br></br>{tutor.experience}</th>

                                    <th>subjectSpecialization:<br></br>{tutor.subjectSpecialization}</th>

                                </div>

                                    : <h3>{message}</h3>

                            }
                        </tr>
                    </thead>

                </table>
            </div>
        </div>

    )

}



export default SearchTutors;