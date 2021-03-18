import React from 'react'
const Userbase = ({workout}) => {
  const { name, completion,date } = workout.fields
  
  
  return (
    
    <div id="body2">
      <h3>User:{name}, Date:{date},WorkOut Completed:{completion}</h3>
     </div>
  )
}

export default Userbase
