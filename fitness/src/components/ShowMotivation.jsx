import React from 'react'
import axios from "axios"
import { URL1, config1 } from "../services"
import {useState} from "react"


const ShowMotivation = ({val}) => {
  const { user, message } = val.fields
  const [like, setLike] = useState(0)
  const [reply, setReply] = useState('')
  const [reply1, setReply1] = useState('')

  const [reply2, setReply2] = useState('')
  const [reply3, setReply3] = useState('')
  
  
  const Increment = (num) => {
   setLike(like+num)
 }

  const removed = async () => {
    const Link = `${URL1}/${val.id}`
    await axios.delete(Link, config1)
    window.location.reload()
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setReply1(reply)
    setReply('')
    setReply3('')
    
  }
  const handleSubmit2 = (e) => {
    e.preventDefault();
    setReply3(reply2)
    setReply2('')
    setReply1('')
  }
  const handleSubmit3 = (e) => {
    e.preventDefault();
    alert(`${user} has a total of ${like} on their profile`)
    if (reply1.length>1) alert(`${user} is having a convo currently`)
  }
  
  return (
    
    <div id="motivation">

      <div id="users">
        <form onSubmit={handleSubmit3}>
          <button id="image1" type="submit"><img id="goku" src="https://api.time.com/wp-content/uploads/2020/03/gym-coronavirus.jpg" /></button>
          </form>
      <h1 id="user2">{user}</h1>
        </div>
      <p id="message3"> {message}</p>
      <button onClick={() => (like >= 0) ? Increment(1) : Increment(0)}> 👍 Like </button>
      <div>
        <span> Likes:{like}</span>
        </div>
      <div>
      <form onSubmit={handleSubmit}>
      
          <input placeholder="user1" type="text" value={reply} onChange={(e)=>setReply(e.target.value)}/>
        <button type="submit">➩</button>
          <p id="reply1">{reply1}</p>
        </form>
      </div>
      <form onSubmit={handleSubmit2}>
        <div id="replies">
          <input placeholder="user2" type="text" value={reply2} onChange={(e) => setReply2(e.target.value)} />
          <button type='submit'>➩</button>
          <p id="reply3">{reply3}</p>
        </div>
      </form>
      <button id="deletion"onClick={removed}>❌</button>
      </div>
  )
}

export default ShowMotivation
