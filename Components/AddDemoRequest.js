import axios from "axios";

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

function AddDemoRequest() {

    const { tutorId } = useParams();

    const [pDate, setDemoDate] = useState("");

    const [pUserId, setbUserId] = useState(""); //parent

    // const [tUserId,settUserId]=useState(""); //tutor

    const [tutors, setTutors] = useState([])

    const [formErrors, setFormErrors] = useState({});

    const user = JSON.parse(localStorage.getItem("mytoken"));

    useEffect(() => {
        axios.get("http://localhost:8080/tutor/" + tutorId).then(resp => setTutors(resp.data));
    }, [])



    const handleSubmit = () => {

        let errors = {};
        if (!pDate) {
            errors['pDateErrors'] = "Date is Required."
        }
        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
            const payload = {

                parentId: user.userId,

                tutorId: tutors.userId,

                requestDate: pDate

            }



            axios.post("http://localhost:8080/demo/save", payload).then(resp =>

                alert("Demo is saved with id:" + resp.data.requestId));

        }


    }

    return (<div className="container">

        <div className="form-group">

            <h4 align="center" class="text-success">Request Page</h4>

            <label htmlFor="pDate" className="float-left" class="text-info">Enter Date of Request:</label>

            <input type="date" name="pDate" value={pDate} className="form-control" id="bDate" onChange={(event) => setDemoDate(event.target.value)}></input>
            {
                formErrors.pDateErrors && <div style={{ color: "red" }}>{formErrors.pDateErrors}</div>
            }

        </div>
        <button onClick={handleSubmit} className="btn btn-primary">save</button><br></br>

        <p><Link to="/home">Back To Parent Home</Link></p>

    </div>)

}



export default AddDemoRequest;