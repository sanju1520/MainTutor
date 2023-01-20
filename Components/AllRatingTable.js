import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './table.css';

function AllRatingTable() {

    const [rating, setRating] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8083/rating/all").then(resp => setRating(resp.data));
    }, [])

    return (
        <div align='center'>
            <h1 class="table-white">Rating List</h1>
            <div class="table-responsive">
                <table class="table table-bordered table-hover" >
                    <thead class="table-danger">
                        <th>RateId</th>
                        <th >Rate</th>
                        <th>Comment</th>
                        <th >ParentName</th>
                        <th >TutorName</th>
                    </thead>
                    <tbody class="table-active">
                            {
                                rating.map(r => <tr key={r.rateId} >
                                    <td>{r.rateId}</td>                                    
                                    <td>{r.rate}</td>
                                    <td>{r.comment}</td>
                                    <td><Link to={`/parent/details/${r.parentDto.userId}`} >{r.parentDto.firstName} {r.parentDto.lastName}</Link></td>
                                    <td><Link to={`/tutor/details/${r.tutorDto.userId}`} >{r.tutorDto.firstName} {r.tutorDto.lastName}</Link></td>
                                    </tr>
                                )

                            }
                    </tbody>      
                </table>
            </div>
            <div>
                <Link to="/">Back to Home</Link> 
            </div>
        </div>
    )

}
export default AllRatingTable;