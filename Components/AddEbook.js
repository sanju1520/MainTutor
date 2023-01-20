import axios from "axios";

import React, { useState } from "react";

import "./AddEbook.css"




function AddEbook() {




    // const [bookId, setBookId] = useState("");

    const [bookName, setBookName] = useState("");

    const [author, setAuthor] = useState("");

    const [userId, setUserId] = useState("");

    const [formErrors, setFormErrors] = useState({});




    const handleSubmit = () => {

        let errors = {};



        if (!bookName) {

            errors['bookNameError'] = "Book Name is required."

        }



        if (!author) {

            errors['authorError'] = "Author is required."

        }



        if (!userId) {

            errors['userId'] = "UserId is required."

        }



        setFormErrors(errors);



        const noErrors = Object.keys(errors).length === 0;



        if (noErrors) {



            const payload = {

                bookName: bookName,

                author: author,

                parentDto: {

                    userId: userId

                }

            }




            axios.post("http://localhost:8083/ebook/save", payload).then(resp =>

                alert("product is saved with id:" + resp.data.bookId));

        }

    }



    return (

        <div className="AddEbook-image">

            {/* <div className="container"> */}

           

                <div className="addbook">



                    <h1 className="display-3 text-center">Add book</h1>

                    <div className="forms">





                        {/* <div className="form-group">

            <label htmlFor="bookId">book id</label>

            <input type="text" name="bookId" value={bookId} className="form-control" id="bookId"

            onChange={(event) => setBookId(event.target.value)}></input>

        </div> */}



                        <div className="form-group ">

                            <label className="text-left thick" htmlFor="bookName">Book Name</label>

                            <input type="text" name="bookName" value={bookName} className="form-control "

                                placeholder='Enter Book Name' id="bookName" onChange={(event) => setBookName(event.target.value)}></input>

                            {

                                formErrors.bookNameError && <div style={{ color: "red" }}> {formErrors.bookNameError}</div>

                            }

                        </div>



                        <div className="form-group">

                            <label htmlFor="author">Book Author</label>

                            <input type="text" name="author" value={author} className="form-control"

                                placeholder='Enter Author' id="author" onChange={(event) => setAuthor(event.target.value)}></input>

                            {

                                formErrors.authorError && <div style={{ color: "red" }}> {formErrors.authorError}</div>

                            }

                        </div>




                        <div className="form-group">

                            <label htmlFor="parent">Parent Id</label>

                            <input type="text" name="parent" value={userId} className="form-control"

                                placeholder='Enter parent' id="parent" onChange={(event) => setUserId(event.target.value)}></input>

                            {

                                formErrors.userIdError && <div style={{ color: "red" }}> {formErrors.UserIdError}</div>

                            }

                        </div>

       

                            <div className="button">

                        <button onClick={handleSubmit} className="btn btn-primary">Save</button>

                        </div>

                    </div>

                </div>

             </div>

        // </div>

    )

}



export default AddEbook;