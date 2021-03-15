import axios from "axios";
import './App.css';
import { Route } from "react-router-dom"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import { useState,useEffect } from 'react'
import { URL, config1 } from "./services"
import ShowWorkouts from "./components/ShowWorkouts"
import Form from "./components/Form"


function App() {
  const [workout, setWorkout] = useState([]);
  useEffect(() => {
    const makemyworkout = async () => {
      let resp = await axios.get(URL,config1);
      console.log(resp.data.records)
      setWorkout(resp.data.records)
    };makemyworkout()
  },[])
 

  return (
    <div>
      <Nav/>
      <Route exact path="/">
        Home Page!
      </Route>
      <Route path="/userWorkout">
        {workout.map((val) => (
          <ShowWorkouts workout={val}/>
        ) )}
      </Route>
      <Route path="/addWorkout">
       <Form />
      </Route>
      <footer> <Footer/></footer>
      console.log("testing")
    </div>
    
  );
}

export default App;
