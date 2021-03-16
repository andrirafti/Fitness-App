import axios from "axios";
import './App.css';
import { Route } from "react-router-dom"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import { useState,useEffect } from 'react'
import { URL, config1 } from "./services"
import ShowWorkouts from "./components/ShowWorkouts"
import Userbase from "./components/Userbase"
import Validator from "./components/Validator"
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
      {workout.map((val1) => (
        <Userbase workout={val1} />))}
        <Footer/>
      </Route>
      <Route path="/userWorkout">
        {workout.map((val) => (
          <ShowWorkouts key={val.id} workout={val}
          />
          //setToggleFetch ={setToggleFetch}/>
        ) )}
      </Route>
      <Route path="/addWorkout"
      >
       <Form />
      </Route>
      <Route path="/view/:id">
        <Form val={workout}/>
          
      </Route>
      <Route path="/signUp">
        <Validator/>
        </Route>
      
    </div>
    
  );
}

export default App;
