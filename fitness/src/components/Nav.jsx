import {Link} from "react-router-dom"
const Nav = () => {
  return (
    <nav id="nav">
      <Link to="/">HomePage</Link>
      <Link to="/userWorkout">Public Workout Routines</Link>
      <Link to="/addWorkout">Add Routine</Link>
      </nav>
      
  )
}

export default Nav