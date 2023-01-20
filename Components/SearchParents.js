


import React, { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";



function SearchParents() {

    const [userId, setUserId] = useState("");

    const [parent, setParent] = useState(null);

    const [message, setMessage] = useState("");

    const navigate = useNavigate();



    const handleButton = () => {

        axios.get("http://localhost:8083/parent/" + userId).then(resp => {
            setParent(resp.data);

            navigate(`/SearchParents/${resp.data.userId}`);

        })



            .catch(error => {

                setParent(null);

                //  setMessage(error.response.data)

                alert("User Not Existing")

            })

    }



    return (

        <div align='center'>

            <h3>Search Parent</h3>

            <div>

                UserId:<input type='text' name='userId' value={userId} onChange={(event) => setUserId(event.target.value)} /><br></br>

                <button onClick={handleButton}>Search</button>

            </div>
            <div>
                <h3 align='center'>Parent Records</h3>
                <table border={10} align='center'>
                    <thead>
                        <tr>

                            {

                                parent !== null ? <div>

                                    <b>Tutor Details</b>

                                    <th>User Id:<br></br>{parent.userId}</th>

                                    <th>UserName:<br></br>{parent.username}</th>

                                    <th>First Name:<br></br>{parent.firstName}</th>

                                    <th>Last Name:<br></br>{parent.lastName}</th>

                                    <th>Mobile No:<br></br>{parent.mobileNo}</th>

                                    <th>Email: <br></br>{parent.email}</th>

                                    <th>Address:<br></br>{parent.address}</th>


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



export default SearchParents;