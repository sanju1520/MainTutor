import React, { useState } from 'react';

import axios from 'axios';

import { Link, useParams } from 'react-router-dom';

import "../Components/SearchbyparentId.css";

function SearchbyparentId() {

    const [userId, setUserId] = useState("");

    const [booking, setBooking] = useState(null);

    const [message, setMessage] = useState("");

    const [tutorId, setTutorId] = useState("");

    const user3 = JSON.parse(localStorage.getItem("mytoken"));

    const tid = user3.userId;

    const handleSubmit = () => {

        //api call       

        axios.get("http://localhost:8080/demo/parent/" + tid).then(resp =>

            setBooking(resp.data))

            .catch(error => {

                setBooking(null);

                setMessage(error.response.data)

            })

    }

    return (<div>

        <h2 class="text-success">Search Request </h2>

        <div class="view">
            <p>View your all Request:</p>
            <button class="btn btn-secondary" onClick={handleSubmit}>View Request</button></div><br></br>



        {

            booking !== null ? <div>

                <h5>Your Request Details: </h5>

                <table class="table table-danger">

                    <thead>

                        <tr>

                            <th>Request Id</th>

                            <th>Date of Booking</th>

                            <th>Tutor</th>
                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            booking.map(b => <tr key={b.requestId}>

                                <td>{b.requestId}</td>

                                <td>{b.requestDate}</td>

                                <td>{b.tutorDto.userId}</td>

                                <td>{b.requestStatus}</td>

                            </tr>)

                        }

                    </tbody>

                </table>

            </div>

                : <h5>{message}</h5>

        }
        <p><Link to="/home">Back To Parent Id</Link></p>
    </div >)

}



export default SearchbyparentId;