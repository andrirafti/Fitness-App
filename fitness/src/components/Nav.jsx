import { Link } from "react-router-dom"
const Nav = () => {
  return (
    <div>
    <nav id="nav">
      <h1>My Fitness Journey</h1>
      <Link id="Home" to="/">HomePage</Link>
      <Link id="Home"to="/userWorkout">Public Workout Routines</Link>
      <Link id="Home" to="/addWorkout">Add Routine</Link>
      <Link id="Home" to="/signUp">Sign Up</Link>
      </nav>
      </div>
      
  )
}

export default Nav
