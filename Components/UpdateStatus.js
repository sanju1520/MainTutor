import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import '../Components/demo.css';

function UpdateStatus() {
    const [demos, setDemos] = useState([])
    const[tutors,setTutors]=useState([])

    useEffect(() => {
        axios.get("http://localhost:8083/demo/all").then(resp => setDemos(resp.data));

    }, [])


    const navigate = useNavigate();
    const navigateToUpdateStatus = () => {
    navigate('/update');
      };

    
    return (
        <div> 
            <h1 >Demo list</h1>
        
              <table className="table table-stripped table-hover table-condensed" >
                    <thead className="table-danger">
                            <th>RequestId</th>
                            <th >RequestDate</th>
                            <th >RequestStatus</th>
                            <th >Parent</th>
                            <th >Tutor</th>
                            <th>Status</th>
                    </thead>
                    {
                    
                    <tbody className="table-info">
                    
                        {     
                                demos.map(p => <tr key={p.requestId} >
                                    <td>{p.requestId}</td>
                                    <td>{p.requestDate}</td>
                                    <td>{p.requestStatus}</td>
                                    <td>{p.parentDto.userId}</td>
                                    <td>{p.tutorDto.userId}</td>
                                    <button onClick={navigateToUpdateStatus}>Update</button>
                                </tr>
                                
                        )}
                    </tbody>}
                </table>
                
        </div>
    )
}

export default UpdateStatus;