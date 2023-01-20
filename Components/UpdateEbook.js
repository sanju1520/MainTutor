import axios from "axios";

import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";



import './UpdateEbook.css'



function UpdateEbook() {



    const  {bid} = useParams();

    const [bId, setBookId] = useState("");

    const [bName, setBookName] = useState("");

    const [bAuthor, setAuthor] = useState("");

    const [userId, setUserId]= useState("");

    const [formErrors, setFormErrors] = useState({})



   

    useEffect(() => {

       



        axios.get("http://localhost:8083/ebook/update" + bid).then(resp => {



            setBookId(resp.data.bookId);

            setBookName(resp.data.bookName);

            setAuthor(resp.data.author);



         



        });

   

    }, [])




   

    const updateEbookSubmit = () => {

        let errors = {};



        if (!bId) {

            errors['bIdError'] = "Book Id is required."

        }



        if (!bName) {

            errors['bNameError'] = "Book Name is required."

        }

        if (!bAuthor) {

            errors['bAuthorError'] = "Author is required."

        }

                               

        if (!userId) {

            errors['userId'] = "UserId is required."

        }



        setFormErrors(errors);



        const noErrors = Object.keys(errors).length === 0;



        if (noErrors) {



        const payload = {

            bookId: bId,

            bookName: bName,

            author: bAuthor,

            parentDto:{

                userId:userId

            }



        }

        axios.put("http://localhost:9090/ebook/update", payload).then(resp => alert("ebook updated."));

    }

}




    return (<div>

        <div className="container">

            <div className="update">

            <h1>Update Book</h1>

            <div className="form-group">

                <label htmlFor="bookId">Book Id</label>

                <input type="text" name="bId" placeholder="Enter Book Id" className="form-control"

                value={bId} onChange={(event) => setBookId(event.target.value)} />



        {

            formErrors.bIdError && <div style={{ color: "red" }}> {formErrors.bIdError}</div>

        }

            </div>



            <div className="form-group">

                <label htmlFor="bookName">Book Name</label>

                <input type="text" name="bName" placeholder="Enter Book Name" className="form-control"

                value={bName} onChange={(event) => setBookName(event.target.value)} />

                {

            formErrors.bNameError && <div style={{ color: "red" }}> {formErrors.bNameError}</div>

        }

            </div>



            <div className="form-group">

                <label htmlFor="bauthor">Author</label>

                <input type="text" name="bAuthor" placeholder="Enter Author" className="form-control"

                value={bAuthor} onChange={(event) => setAuthor(event.target.value)} />

                {

            formErrors.bAuthorError && <div style={{ color: "red" }}> {formErrors.bAuthorError}</div>

        }

            </div>

            <div className="form-group">

                <label htmlFor="userId">User Id</label>

                <input type="text" name="userId" value={userId} className="form-control"

                placeholder="Enter userId" onChange={(event) => setUserId(event.target.value)} />

                 {

            formErrors.userIdError && <div style={{ color: "red" }}> {formErrors.userIdError}</div>

        }

               

           <button onClick={updateEbookSubmit} className="btn btn-primary">Update</button>

           </div>

        </div>

        </div>

    </div>)

}

export default UpdateEbook;