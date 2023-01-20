import logo from './logo.svg';
import './App.css';



import{
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import AddTutors from './Components/AddTutors';
import AllTutors from './Components/AllTutors';
import SearchTutors from './Components/SearchTutors';
import TutorDetails from './Components/TutorDetails';
import Home from './Components/Home';
import Logout from './Components/Logout';
import TutorDashboardi from './Components/TutorDashboardi';
import React from 'react';
import ReactDOM  from 'react-dom/client';
import TutorReducer from './Store/Reducer/TutorReducer';
import AllTutorsRedux from './Components/AllTutorsRedux';
//import Navbar from './Components/Navbar';
import AllDemo from './Components/AllDemo';
import Sidenav from './Components/Sidenav';
import AllBooking from './Components/AllBooking';
import UpdateTutor from './Components/UpdateTutor';
import AddParents from  './Components/AddParents';
import AllParents from './Components/AllParents';
import SearchParents from './Components/SearchParents';
import UpdateParent from './Components/UpdateParent';
import ParentDashboardi from './Components/ParentDashboardi';
import FooterForAll from './Components/FooterForAll';
import ParentRegistration from './Components/ParentRegistration';
import ImageSlider from './Components/ImageSlider';
import ImageSliderAuto from './Components/ImageSliderAuto';
import FetchAllTutors from './Components/FetchAllTutors';
import SearchBookingByParentId from './Components/SearchBookingByParentId';
import SearchBookingByTutorId from './Components/SearchBookingByTutorId';
import TutorDetailsone from './Components/TutorDetailsone';
import AllEbook from './Components/AllEbook';
import AddEbook from './Components/AddEbook';
import SearchEbook from './Components/SearchEbook';
import UpdateEbook from './Components/UpdateEbook';
import DeleteEbook from './Components/DeleteEbook';
import ParentLogin from './Components/ParentLogin';
import TutorLogin from './Components/TutorLogin';
import AllRatingTable from './Components/AllRatingTable';
import AddRating from './Components/AddRating';
import TutorRatingDetails from './Components/TutorRatingDetails';
import UpdateStatus from './Components/UpdateStatus';
import UpdateStatusRequest from './Components/UpdateStatusRequest';
import SearchStatus from './Components/SearchStatus';
import SearchDemo from './Components/SearchDemo';
import SearchbyparentId from './Components/SearchbyparentId';
import Home2 from './Components/Home2';
import Home3 from './Components/Home3';
import AllTutor from './Components/AllTutor';


function App() {
  return (
   <BrowserRouter>
       {/* <Navbar /> */}
       {/* <TutorDashboardi />  */}
       {/* <Sidenav /> */}
      <Routes>
       
        <Route path='/AddTutors' element={<AddTutors/>}/>
        <Route path='/AllTutors' element={<AllTutors/>}/>
        <Route path='/SearchTutors/:id' element={<SearchTutors/>}/>
        <Route path='/TutorDetails/:id' element={<TutorDetails/>}/>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path='/Logout' element={<Logout/>}></Route>
        <Route path='/AllDemo' element={<AllDemo/>}></Route>
        <Route path='/AllBooking' element={<AllBooking/>}></Route>
        <Route path='/UpdateTutor' element={<UpdateTutor/>}></Route>
        <Route path='/AllTutorsRedux' element={<AllTutorsRedux/>}></Route>
        <Route path='/AddParents' element={<AddParents/>}></Route>
        <Route path ='/AllParents' element={<AllParents/>}></Route>
        <Route path ='/SearchParents/:id' element={<SearchParents/>}></Route>
        <Route path ='/UpdateParent' element={<UpdateParent/>}></Route>
        <Route path ='/ParentDashboardi' element={<ParentDashboardi/>}></Route>
        <Route path ='/TutorDashboardi' element={<TutorDashboardi/>}></Route>
        <Route path = '/ParentRegistration' element={<ParentRegistration/>}></Route>
        <Route path ='/FetchAllTutors' element={<FetchAllTutors/>}></Route>
        <Route path = '/SearchBookingByParentId' element={<SearchBookingByParentId/>}></Route>
        <Route path = '/SearchBookingByTutorId' element={<SearchBookingByTutorId/>}></Route>
        <Route path ='/TutorDetailsone' element ={<TutorDetailsone/>}></Route>
        <Route path ='/tutor/details/:tid' element={<TutorDetailsone/>}></Route>
        <Route path ='/AllEbook' element ={<AllEbook/>}></Route>
        <Route path ='/AddEbook' element ={<AddEbook/>}></Route>
        <Route path ='/UpdateEbook' element ={<UpdateEbook/>}></Route>
        <Route path ='/DeleteEbook' element ={<DeleteEbook/>}></Route>
        <Route path ='/SearchEbook' element ={<SearchEbook/>}></Route>
        <Route path ='/ParentLogin' element ={<ParentLogin/>}></Route>
        <Route path ='/TutorLogin' element ={<TutorLogin/>}></Route>
        <Route path ='/AllRatingTable' element ={<AllRatingTable/>}></Route>
        <Route path ='/AddRating' element ={<AddRating/>}></Route>
        <Route path ='/TutorRatingDetails' element ={<TutorRatingDetails/>}></Route>
        <Route path ='/updateStatus' element ={<UpdateStatus/>}></Route>
        <Route path ='/updateStatusRequest' element ={<UpdateStatusRequest/>}></Route>
        <Route path ='/SearchStatus' element ={<SearchStatus/>}></Route>
        <Route path ='/SearchDemo' element ={<SearchDemo/>}></Route>
        <Route path ='/SearchbyparentId' element ={<SearchbyparentId/>}></Route>
        <Route path ='/Home2' element ={<Home2/>}></Route>
        <Route path ='/Home3' element ={<Home3/>}></Route>
        <Route path ='/AllTutor' element ={<AllTutor/>}></Route>
        <Route path ='/FooterForAll' element ={<FooterForAll/>}></Route>
     
        




        







       {/* <Route path='/Header' element={<Header/>}></Route> */}
      </Routes>
    <FooterForAll />
   </BrowserRouter>
  );
}

export default App;
