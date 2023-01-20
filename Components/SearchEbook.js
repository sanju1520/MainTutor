import React, { useState } from 'react';

import axios from 'axios';

import "./SearchEbook.css"



function SearchEbook() {



    const [bookId, setBookId] = useState("");

    const [book, setBook] = useState("");

    const [bookName, setBookName] = useState("");

    const [message, setMessage] = useState("");

    const [formErrors, setFormErrors] = useState({})



    const handleSubmit = () => {



       



        let errors = {};



        if (!bookName) {

            errors['bookNameError'] = "Book Name  is required."

        }



        setFormErrors(errors);



        const noErrors = Object.keys(errors).length === 0;



        if (noErrors) {

            //api call

            axios.get("http://localhost:8083/ebook/name/"+ bookName).then(resp => setBook(resp.data))

                .catch(error => {

                    setBook(null);

                    setMessage(error.response.data)



                })



        }

    }



   




    return (<div className="container">

       

<div className="add">

    <div>

            <h1 className="display-3 text-center">Search Book</h1>



            <div className="form-group">

                <div className="enter">

   

                <label htmlFor="EnterbookName" className='enter1'>Enter Book Name</label>

               

                <div className="input-box">

                {/* <i className='fas fa-book-open'></i>  */}

                <input type="text" name="bookName" placeholder="Enter Book Name"

                    value={bookName} className="box" onChange={(event) => setBookName(event.target.value)} />

                {

                    formErrors.bookNameError && <div style={{ color: "red" }}>{formErrors.bookNameError}</div>

                }

                </div>

               <div class="buton">

                {/* <i className='fas fa-search'></i>  */}

            < button onClick={handleSubmit} className="btn btn-primary">Search</button>

            </div>

            </div>

            </div >

            <div className="margin">

            {

                book !== null ? <div>

                    <h3>Book Details</h3>

                    <p>BookId: {book.bookId}</p>

                    <p>BookName: {book.bookName}</p>

                    <p>Author: {book.author}</p>

                   

                </div>

                    : <h3>{message}</h3>

            }

            </div>



        </div>

        </div>

       </div>

    )

}

export default SearchEbook;