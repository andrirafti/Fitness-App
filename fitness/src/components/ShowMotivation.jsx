import React from 'react'
import axios from "axios"
import {URL1,config1} from "../services"
const ShowMotivation = ({val}) => {
  const { user, message } = val.fields
  const removed = async () => {
    const Link = `${URL1}/${val.id}`
    await axios.delete(Link, config1)
    window.location.reload()
  }
  
  return (
    <div id="motivation">
      <h1>{user}</h1>
      <p> {message}</p>
      <button onClick={removed}>Remove Comment</button>
    </div>
  )
}

export default ShowMotivation
