import { Link, useNavigate } from "react-router-dom";
import "./Home3.css"

function Home3() {

  const navigate = useNavigate();
  const navigateToUpdateStatus = () => {
    navigate('/parent/login');
  };
  return (

    <div>
      <div>
        <nav class="navbar navbar-dark bg-secondary">

          <a class="navbar-brand" href="#">Home</a>


          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">

              </li>
              <li class="nav-item">

              </li>
              <li class="nav-item" align="center">

              </li>
            </ul>
          </div>
        </nav>
      </div>
      <h2 class="bg-info text-white">Online Tutor Finder System</h2>
      <Link to="/parent/login"><h1>Parent Login</h1></Link><br></br>
      <Link to="/tutor/login"><h1>Tutor Login</h1></Link>
      <Link to="/tutor/dashboard"></Link>
    </div>
  )
}

export default Home3;