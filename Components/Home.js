import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../Components/demo.css'
function Home() {
    const navigate = useNavigate();
    const navigateToLogout = () => {
        navigate('/');
    };
    return (
        <div>
            <h2 class="text-danger">Parent Page</h2>
            <table class="table table-bordered table-hover">

                <td><Link to="/tutor">Request for the Demo</Link><br></br></td>
                <td><Link to="/AllDemo">View All Demo Request</Link><br></br></td>
                <td><Link to="/searchbyparentId">Search Demo by Parent Id</Link> <br /></td>
            </table>
            <button class="btn btn-danger" onClick={navigateToLogout}>Logout</button>
        </div>

    )
}

export default Home;