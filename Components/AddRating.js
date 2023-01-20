import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom";
import "./AddRating.css";

function AddRating() {
    const [rate, setRate] = useState("");
    const [comment, setComment] = useState("");

    const [pUserId, setPUserId] = useState(""); //parent
    const [tUserId, setTUserId] = useState(""); //tutor

    const[formErrors,setFormErrors]=useState({});

    const handleSubmit = () => {
        let errors={};

        if(!rate){
            errors[`rateError`]="Field is required."
        }
        if(rate>5 ){
            errors[`rateError`]="Rate should be less than 5."
        }
        if(rate<0 ){
            errors[`rateError`]="Rate should be positive."
        }
        if(!pUserId ){
            errors[`pUserIdError`]="Field is required."
        }
        if(!tUserId){
            errors[`tUserIdError`]="Field is required."
        }
        setFormErrors(errors);

        const noErrors=Object.keys(errors).length===0;

        if(noErrors){
        const payload = {
            rate: rate,
            comment: comment,
            parentDto: {
                userId: pUserId
            },
            tutorDto: {
                userId: tUserId
            }
        }
        axios.post("http://localhost:8083/rating/save", payload).then(resp =>
            alert("Rating is saved with id :" + resp.data.rateId));
    }
    }

    return (<div className="container" align='center' >
        
        <div className="form-group" >
            <label htmlFor="rate" class="float-left">Rating</label>
            <input type="text" name="rate" value={rate} className="form-control" id="rate" onChange={(event) => setRate(event.target.value)} placeholder="Enter Rating"></input>
        </div>
        {
            formErrors.rateError && <div style={{color:"red"}}>{formErrors.rateError}</div>
        }

        <div className="form-group">
            <label htmlFor="comment" class="float-left">Comment</label>
            <input type="text" name="comment" value={comment} className="form-control" id="comment" onChange={(event) => setComment(event.target.value)} placeholder="Enter Comment" ></input>
        </div>

        <div className="form-group">
            <label htmlFor="pUserId" class="float-left">Parent </label>
            <input type="text" name="pUserId" value={pUserId} className="form-control" id="pUserId" onChange={(event) => setPUserId(event.target.value)} placeholder="Enter parent"></input>
        </div>
        {
            formErrors.pUserIdError && <div style={{color:"red"}}>{formErrors.pUserIdError}</div>
        }

        <div className="form-group">
            <label htmlFor="tUserId" class="float-left">Tutor </label>
            <input type="text" name="tUserId" value={tUserId} className="form-control" id="tUserId" onChange={(event) => setTUserId(event.target.value)} placeholder="Enter tutor"></input>
        </div>
        {
            formErrors.tUserIdError && <div style={{color:"red"}}>{formErrors.tUserIdError}</div>
        }

        <button onClick={handleSubmit} className="btn btn-primary">save</button>

        <div>
            <Link to="/">Back to Home</Link>
        </div>
    </div>
    )
}

export default AddRating;