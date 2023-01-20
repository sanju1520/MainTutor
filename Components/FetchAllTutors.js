import React,{useEffect,useState} from 'react';

import axios from 'axios';

import {Link} from 'react-router-dom';



function FetchAllTutors(){



    const[tutors,setTutors]=useState([]);



    useEffect(()=>{



        axios.get("http://localhost:8083/tutor/all").then(resp=>setTutors(resp.data));



    },[])





    return (



        <div className="container">

            <h2 align='center' class="text-success">Tutors</h2><br/>

            <div className="row">

                {    

                        <table class="table table-striped table-hover">

                    <thead class="table-danger">

                        <tr>

                            <th>Tutor Id</th>

                            <th>First Name</th>

                            <th>Last Name</th>

                            <th>View Tutor Details</th>

                        </tr>

                    </thead>

                    <tbody class="bg-light table-active">



                        {

                            tutors.map(t =>

                                <tr key={t.userId}>

                                    <td>{t.userId}</td>

                                    <td>{t.firstName}</td>

                                    <td>{t.lastName}</td>

                                    <td><Link to={`/tutor/details/${t.userId}`}className="btn btn-primary">View</Link></td>

                                </tr>

                            )

                        }



                    </tbody>

                </table>

                }

            </div>

            <div align="center">

                <Link to="/">Back to Home</Link>

                </div>

        </div>

       

    )



}



export default FetchAllTutors;