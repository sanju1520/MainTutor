const initialState={

    Tutors:[]

}
 function TutorReducer(state=initialState,actions)

 {

if(actions.type ==="FetchAll")

{

    return{

        ...state,

       Tutors:actions.payload

    }

}

else{

    return state;

}

 }

 export  default TutorReducer;