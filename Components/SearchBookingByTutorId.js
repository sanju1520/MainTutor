import React, { useState } from 'react';

import axios from 'axios';

import { useParams } from 'react-router-dom';

import { Link } from "react-router-dom";

import Logout from './Logout';



function SearchBookingByTutorId() {

    const [userId, setUserId] = useState("");

    const [booking, setBooking] = useState(null);

    const [message, setMessage] = useState("");

    const [tutorId, setTutorId] = useState("");




    const user2=JSON.parse(localStorage.getItem("mytoken"));

    const tid=user2.userId;



    //const {tutorId} = useParams();   

    const handleSubmit = () => {

        //api call       

        axios.get("http://localhost:8083/booking/tutor/" + tid).then(resp =>

            setBooking(resp.data))

            .catch(error => {

                setBooking(null);

                setMessage(error.response.data)

            })

    }



    return (<div><br/>

        <center><h2 class="text-success">Search Booking</h2><br/><br/>

        {/* <div>

            <label>Enter Tutor Id: </label>

            <input type="text" name="tutorId" value={tutorId} onChange={(event) => setTutorId(event.target.value)}></input>

        </div> */}

        <button onClick={handleSubmit} className="btn btn-primary">View Bookings</button><br/><br/>

        {/* <Logout/><br></br> */}

        </center>

        {

            booking !== null ? <div>

                <h5>Your Booking Details: </h5>

                <table class="table table-stripped table-hover">

                    <thead class="table-danger">

                        <tr>

                            <th>Booking Id</th>

                            <th>Date of Booking</th>

                            <th>Parent</th>

                        </tr>

                    </thead>

                    <tbody class="bg-light table-active">

                        {

                            booking.map(b => <tr key={b.bookingId}>

                                <td>{b.bookingId}</td>

                                <td>{b.dateofBooking}</td>

                                {/* <td>{b.parentDto.userId}</td> */}

                                <td><Link to={`/rating/parent/details/${b.parentDto.userId}`} >{b.parentDto.firstName} {b.parentDto.lastName}</Link></td>

                            </tr>)

                        }

                    </tbody>

                </table>

                <div align="center">

                <Link to="/">Back to Home</Link>

            </div>

            </div>

                : <h5>{message}</h5>

        }

    </div >)

}



export default SearchBookingByTutorId;