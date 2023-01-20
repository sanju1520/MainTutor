import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchAllTutorActions} from '../Store/Actions/TutorActions'
function AllTutorsRedux() {

    const tutor = useSelector(state => state.TutorReducer.Tutors);
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchAllTutorActions())

    }, [])



    return (<div  style={{width:"70%",padding:"16%" }}>

        {

                 <table className="table table-striped">

                 <thead className="thead-dark">

                     <tr>

                         <th>userId</th>

                         <th>username</th>

                         <th>firstName</th>

                         <th>lastName</th>
                         <th>mobileNo</th>
                         <th>email</th>
                         <th>address</th>
                         <th>role.roleId.roleName</th>
                         <th>experience</th>
                         <th>subjectSpecialization</th>

                     </tr>

                 </thead>

                 <tbody>



                     {

                         tutor.map(tutor =>
                            <tr key={tutor.userId}>
                            <td>{tutor.userId}</td>
                            <td>{tutor.username} </td>
                            <td>{tutor.userPassword}</td>
                            <td>{tutor.firstName}</td>
                            <td>{tutor.lastName}</td>
                            <td>{tutor.mobileNo}</td>
                            <td>{tutor.email}</td>
                            <td>{tutor.address}</td>
                            <td>{tutor.role.roleName}</td>
                            <td>{tutor.role.roleId}</td>
                            <td>{tutor.experience}</td>
                            <td>{tutor.subjectSpecialization}</td>

                           
                             </tr>)



                    }

                         </tbody>



          </table>

        }

    </div>)



}

export default AllTutorsRedux;