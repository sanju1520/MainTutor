import React, { useState } from 'react';

import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function SearchDemo() {

    const [userId, setUserId] = useState("");

    const [demo, setDemo] = useState(null);

    const [message, setMessage] = useState("");
    const [tutorId, setTutorId] = useState("");
    const user=JSON.parse(localStorage.getItem("mytoken"));

    const tid=user.userId;

    const handleSubmit = () => {

        //api call

        axios.get("http://localhost:8080/demo/tutor/" + tid)
            .then(resp => setDemo(resp.data))

            .catch(error => {

                setDemo(null);

                setMessage(error.response.data)

            })

    }
    const navigate = useNavigate();
    const navigateToUpdateStatus = () => {
        navigate('/update');
    };
    return (<div>

        <h2 class="text-success">Search Demo</h2>
        <button class="btn btn-secondary" onClick={handleSubmit}>Search</button><br></br>

        {

            demo !== null ? <div>

                <h5>Demo Details: </h5>
                <table class="table table-danger">
                    <thead>
                        <tr>
                            <th>requestId</th>
                            <th>Date of Request</th>
                            <th>Parent Id</th>
                            <th>Request Status</th>
                            <th>Update Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            demo.map(d => <tr key={d.requestId}>
                                <td>{d.requestId}</td>
                                <td>{d.requestDate}</td>
                                <td>{d.parentDto.userId}</td>
                                <td>{d.requestStatus}</td>
                                <td><button onClick={navigateToUpdateStatus}>Update</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
                <h4 class="text-primary" align="center">If You want to Update the Request status Please Click On <b class="text-danger">Update</b> button</h4>

            </div>

                : <h5>{message}</h5>

        }
        <p><Link to="/home2">Back To Tutor Home</Link></p>
    </div >)

}

export default SearchDemo;