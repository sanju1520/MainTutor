import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Home2() {
    const navigate = useNavigate();
    const navigateToLogout = () => {
        navigate('/');
    };
    return (
        <div>
            <h2 class="text-danger">Tutor Page</h2>
            <table class="table table-bordered table-hover">

                <td align="center"><Link to="/Search">Search Status by Tutor Id</Link></td>
            </table>
            <button class="btn btn-danger" onClick={navigateToLogout}>Logout</button>
        </div>
    )
}
export default Home2;