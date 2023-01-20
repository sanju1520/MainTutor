import { useState } from "react"

import axios from "axios";

import { Link } from "react-router-dom";




import './DeleteEbook.css';



function DeleteEbook() {



    const [book, setBook] = useState(null);

    const [bookId, setBookId] = useState("");

    const [message, setMessage] = useState("");

    const [formErrors, setFormErrors] = useState({});



    // let errors = {};



    // if (!bookId) {

    //     errors['bookIdError'] = "Book Id is required."

    // }



    // setFormErrors(errors);



    // const noErrors = Object.keys(errors).length === 0;



    // const handleSubmit = () => {



        // axios.get("http://localhost:9090/ebook/name/" + bookName)

        //     .then(resp => setBook(resp.data))

        //     .catch(error => {

        //         setBook(null)

        //         setMessage(error.response.data)

        //     })

    // }

    // if (noErrors) {



    function DeleteEBook(id) {

        axios.delete(`http://localhost:8083/ebook/delete/${id}`)

            .then(resp => {

                alert("Book deleted !!");

                // handleSubmit();

            })

            // .catch(error => {

            //              setBook(null)

            //              setMessage(error.response.data)

            //          })

    // }

}

    return (<div className="text-center">



        <div className="add">

         

        <h2 className="display-3">Delete Book</h2>



        <div className="form-group">

            <label className="enterr" htmlFor="bookId" >Enter Book Name</label>

            <input type="text" name="bookId" value={bookId} className="form-control" placeholder="Enter Book Id"

            id="boodId" onChange={(event) => setBookId(event.target.value)} required />

              {

      formErrors.bookNameError && <div style={{ color: "red" }}> {formErrors.bookNameError}</div>

            }

        </div>

        <div className="button1">

        <button className="btn btn-primary" onClick={() => DeleteEbook(bookId)}>Delete</button>

       

        </div>

       

        {/* <div>

            <button onClick={handleSubmit}> Search</button>

        </div> */}

        {/* <div>



            {



                book !== null ?



                    <table className="table table-striped">



                        <thead className="thead-dark"> </thead>



                        <tr>

                            <td>{book.bookId}</td>

                            <td>{book.bookName}</td>

                            <td>{author.author}</td>



                            <td><button onClick={() => DeleteEBook(book.bookId)}>Delete</button></td>

                        </tr>

                    </table>

                    : <h2>{message}</h2>

            }

        </div> */}

        </div>

    </div>);

}

export default DeleteEbook;