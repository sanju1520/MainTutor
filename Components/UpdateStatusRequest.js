import axios from "axios";

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

import "../index.css";



function UpdateStatusRequest() {

    const { tutorId } = useParams();

    const [pRequestId, setpRequestId] = useState(""); //parent

    const [pstatus, setpStatus] = useState(""); //tutor



    const [formErrors, setFormErrors] = useState({})


    useEffect(() => {
        axios.get("http://localhost:8080/tutor/").then(resp => {
            setpRequestId(resp.data.requestId);
            setpStatus(resp.data.requestStatus);
        });
    }, [])



    const handleSubmit = () => {


        let errors = {};
        if (!pRequestId) {
            errors['pRequestIdError'] = "Request Id is required."
        }
        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;

        if (noErrors) {

            const payload = {

                demoReqId: pRequestId,
                reqStatus: pstatus


            }



            axios.put("http://localhost:8083/demo/updateStatus", payload).then(resp =>

                alert("Status is updated for Id:" + resp.data.requestId));


        }
    }

    return (<div align="center">

        <div>
            <h1 class="text-success">Update status</h1>
            <div>
                <label class="text-danger">RequestId:</label>
                <input type="text" name="pRequestId" value={pRequestId} onChange={(event) => setpRequestId(event.target.value)} placeholder="enter RequestId"></input>
                {
                    formErrors.pRequestIdError && <div style={{ color: "red" }}>{formErrors.pRequestIdError}</div>
                }
            </div><div>
            </div><br></br>
            <label class="text-danger">Status:</label><br></br>
            <input type="radio" value="Accepted" name="pstatus" onChange={(event) => setpStatus(event.target.value)} /> Accepted
            <input type="radio" value="Rejected" name="pstatus" onChange={(event) => setpStatus(event.target.value)} /> Rejected<br></br>

            <button onClick={handleSubmit} className="btn btn-primary">save</button>
        </div>



    </div>

    )
}


export default UpdateStatusRequest;