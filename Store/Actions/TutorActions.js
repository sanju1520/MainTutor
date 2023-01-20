import axios from 'axios'

export function fetchAllTutorActions() {



    return (dispatch) => {

        return axios.get("http://localhost:8083/tutor/all").then(resp => {

            dispatch({

                type: "FetchAll",

                payload: resp.data

            });



        }

        )

    }




}