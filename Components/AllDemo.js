import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import '../Components/demo.css';
import { Link } from "react-router-dom";

function AllDemo() {
    const [demos, setDemos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/demo/all").then(resp => setDemos(resp.data));

    }, [])


    return (
        <div>
            <h1>Demo list</h1>

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
                            demos.map(p => <tr key={p.requestId} >
                                <td>{p.requestId}</td>
                                <td>{p.requestDate}</td>
                                <td>{p.requestStatus}</td>
                                <td>{p.parentDto.userId}</td>
                                <td>{p.tutorDto.userId}</td>
                            </tr>
                            )}
                    </tbody>}
            </table>
            <p><Link to="/home"> Back To Parent Home</Link></p>
        </div>
    )
}
export default AllDemo;