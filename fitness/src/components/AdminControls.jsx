import React from 'react'
import { useState } from 'react'
import axios from "axios"
import {URL2,config1} from "../services"
const AdminControls = () => {
  const [quote, setQuote] = useState('')
  
  


  const handleSubmit = async (e) => {
    e.preventDefault();
    const quoteofday = {
      quote
    }
    await axios.post(URL2, { fields: quoteofday }, config1)
    window.location.reload()
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Hello,Andri</h3>
        <p>Set your users Motivtional Quote of the day!</p>
        <div>
        <label>Quote Of The Day:</label>
          <input type="text" value={quote} onChange={(e) => setQuote(e.target.value)} />
        </div>
        <button type="submit"> Send!</button>
      </form>
    </div>
  )
}

export default AdminControls
