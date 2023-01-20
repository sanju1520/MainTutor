import React, { useEffect, useState } from 'react';

import axios from 'axios';

import "./AllEbook.css";



function AllEbook() {

    const [book, setBook] = useState([]);



    //similar to  componentDidMount and componentDidUpdate here we use useEffect

    useEffect(() => {

        axios.get("http://localhost:8083/ebook/all").then(resp => setBook(resp.data));



    }, [])



    return (<div className="all-book">

        <div>



            <div className="container">

                <h1 className=" display-3 text-center">All E-book</h1>

                <table className="table">

                    <thead className="thead-dark">

                        <tr>

                            <th>Book ID</th>

                            <th>Book Name</th>

                            <th>Author</th>

                        </tr>

                    </thead>

                    <tbody>



                        {

                            book.map(p => <tr key={p.bookId}>



                                <td> {p.bookId} </td>

                                <td> {p.bookName}</td>

                                <td> {p.author}</td>

                            </tr>)

                        }

                    </tbody>

                </table>

            </div>

        </div>

        </div>

    )

}

export default AllEbook;