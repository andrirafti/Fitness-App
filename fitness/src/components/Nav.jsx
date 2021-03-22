import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
const Nav = () => {
const history=useHistory()
  const push = () => {
    history.push("/nutrition")
    //window.location.reload();
  }
  return (
    <nav id="nav">
      
      
        <Link id="Home" to="/">
          HomePage
        </Link>
        <Link id="Home" to="/userWorkout">
          Public Workout Routines
        </Link>
        <Link id="Home" to="/addWorkout">
          Add Routine
        </Link>
        <Link id="Home" to="/signUp">
          Sign Up
        </Link>
        <div id="fitnesspal2">
        <button id="fitbtn" onClick={push}><img id="fitnesspal" src="https://i.pcmag.com/imagery/reviews/065uaiCApaX7sVvWBH2jmtJ-3..1576546458.jpg" /></button>
        </div>
        <h1>My Fitness Journey</h1>
      </nav>
    
  );
};

export default Nav;
