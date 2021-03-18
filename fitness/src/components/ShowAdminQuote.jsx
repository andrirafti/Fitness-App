import React from 'react'
import axios from "axios"
import { URL2, config1 } from "../services"

const ShowAdminQuote = ({val}) => {
  const { quote } = val.fields

  const removed = async () => {
    const Link = `${URL2}/${val.id}`
    await axios.delete(Link, config1)
    window.location.reload()
  }
  
  return (
    <div>
      <div>
      <h4 id="quote">Admin Tip: {quote}</h4>
        <button id="quoteb" onClick={removed}>❌</button>
        </div>

    </div>
  )
}

export default ShowAdminQuote