import React from 'react'
import {Link} from "react-router-dom"
import axios from "axios";
import { URL, config1 } from "../services"
import {useHistory} from "react-router-dom"
const ShowWorkouts = ({ workout }) => {
  const { name, bodyPart, difficulty, description, date, completion, weight, goalweight } = workout.fields
  const history=useHistory()
  const remove = async () => {
    const Link = `${URL}/${workout.id}`
    await axios.delete(Link, config1);
    //workout.setToggleFetch((workout) => !workout); ;
    history.push("/")
   
}

  return (
    
    <div id="show">
      <h1>User, {name}!</h1>
      <h2>Current Weight: {weight}</h2>
      <h3>Goal Weight : {goalweight}</h3>
      <h4> Today's Workout:{bodyPart}</h4>
      <h5>Workout Details:{description}</h5>
      <h6>Diffculty-Level:{difficulty}</h6>
      <p className="p1">Completion:{completion}</p>
      <p1 className='p2'>Date: {date}</p1>
      <p4></p4>
      <p2></p2>
      <p3 id="p3">___________</p3>
      
      <button onClick={remove}>Remove</button>
      <Link to={`/view/:${workout.id}`}>
        <button id="btn2">Update Workout</button>
      </Link>
      <h7></h7>
      
      </div>
      
  )
}

export default ShowWorkouts
