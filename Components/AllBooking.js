import { useEffect } from "react";

import { useState } from "react";

import axios from 'axios';

import { Link } from "react-router-dom";



function AllBooking() {

    const [booking, setBooking] = useState([]);

   

    useEffect(() => {



        axios.get("http://localhost:8083/booking/all").then(resp => setBooking(resp.data));



    }, [])



    return (

        <div>

            <h1 align="center" class="text-success">Booking List</h1><br/>

            <div class="table-responsive">

                <table class="table table-stripped table-hover" >

                    <thead class="table-danger">

                        <th>BookingId</th>

                        <th >Date of Booking</th>

                        <th >Parent</th>

                        <th >Tutor</th>

                    </thead>

                    <tbody class="table-info">

                            {

                                booking.map(b => <tr key={b.bookingId} >

                                    <td>{b.bookingId}</td>

                                    <td>{b.dateofBooking}</td>

                                    {/* <td>{b.parentDto.userId}</td> */}

                                    <td><Link to={`/rating/parent/details/${b.parentDto.userId}`} >{b.parentDto.firstName} {b.parentDto.lastName}</Link></td>

                                    <td><Link to={`/rating/tutor/details/${b.tutorDto.userId}`} >{b.tutorDto.firstName} {b.tutorDto.lastName}</Link></td>

                                    {/* <td>{b.tutorDto.userId}</td> */}

                                    </tr>

                                )

                            }

                    </tbody>      

                </table>

            </div>

            <div align="center">

                <Link to="/">Back to Home</Link>

            </div>

        </div>

    )

}



export default AllBooking;