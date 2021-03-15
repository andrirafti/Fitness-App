import React from 'react'

const ShowWorkouts = ({ workout }) => {
  const {name,bodyPart,difficulty,description,date,completion,weight,goalweight}=workout.fields
  return (
    <div>
      <h1>User, {name}!</h1>
      <h4>Current Weight: {weight}</h4>
      <h4>Goal Weight : {goalweight}</h4>
      <h2> Today's Workout:{bodyPart}</h2>
      <h3>Workout Details:{description}</h3>
      <h4>Diffculty-Level:{difficulty}</h4>
      <h4>Completion:{completion}</h4>
      <p>Date: {date}</p>
      
    </div>
  )
}

export default ShowWorkouts
