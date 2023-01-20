import React, { useState } from 'react';

import axios from 'axios';

function SearchStatus() {

    const [tutorId, setTutorId] = useState("");

    const [demo, setDemo] = useState(null);

    const [message, setMessage] = useState("");

    const handleSubmit = () => {

        //api call

        axios.get("http://localhost:8080/demo/demo/" + tutorId).then(resp => setDemo(resp.data))

            .catch(error => {

                setDemo(null);

                setMessage(error.response.data)

            })

    }
    return (<div>

        <h2>Search Demo</h2>

        <div>

            <label>Enter Request Id: </label>

            <input type="text" name="tutorId" value={tutorId}

                onChange={(event) => setTutorId(event.target.value)}></input>

        </div>

        <button onClick={handleSubmit}>Search</button>

        {
            <table class="table table-stripped table-hover table-condensed" >
                <thead class="table-danger">
                    <th>RequestId</th>
                    <th >RequestDate</th>
                    <th >RequestStatus</th>
                    <th >Parent</th>
                    <th >Tutor</th>
                </thead>
                {

                    <tbody class="table-info">

                        {
                            demo.map(p => <tr key={p.requestId} >
                                <td>{p.requestId}</td>
                                <td>{p.requestDate}</td>
                                <td>{p.requestStatus}</td>
                                <td>{p.parentDto.userId}</td>
                                <td>{p.tutorDto.userId}</td>
                            </tr>
                            )}
                    </tbody>}
            </table>


        }

    </div >)

}

export default SearchStatus;