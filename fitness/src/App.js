import axios from "axios";
import "./App.css";
import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { URL, URL1, URL2, config1 } from "./services";
import ShowWorkouts from "./components/ShowWorkouts";
import Userbase from "./components/Userbase";
import Validator from "./components/Validator";
import Form from "./components/Form";
import Motivation from "./components/Motivation";
import ShowMotivation from "./components/ShowMotivation";
import { Link } from "react-router-dom";
import Admin from "./components/Admin";
import AdminControls from "./components/AdminControls";
import ShowAdminQuote from "./components/ShowAdminQuote";
import Nutrition from "./components/Nutrition"


function App() {
  const [workout, setWorkout] = useState([]);
  const [forum, setForum] = useState([]);
  const [quote, setQuote] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false)
  

  useEffect(() => {
    const makemyworkout = async () => {
      let resp = await axios.get(URL, config1);
      console.log(resp.data.records);
      setWorkout(resp.data.records);
    };
    makemyworkout();
  }, [toggleFetch]);
  useEffect(() => {
    const makemyforum = async () => {
      let resp1 = await axios.get(URL2, config1);
      console.log(resp1.data.records);
      setForum(resp1.data.records);
    };
    makemyforum();
  }, [toggleFetch]);

  useEffect(() => {
    const quoteofday = async () => {
      let resp2 = await axios.get(URL1, config1);
      console.log(resp2.data.records);
      setQuote(resp2.data.records);
    };
    quoteofday();
  }, [toggleFetch]);

  return (
    <div>
      <Nav />
      <Route exact path="/">
      <h3 id="h3">Hello user!</h3>
        <p id="p33">Please click <a href="addWorkout">here</a> to start your fitness journey!</p>
        <p id="p33">The following below will show a users name and wheter or not they have completed their workout for the day.</p>
        
        {quote.map((val) => (
          <ShowAdminQuote andri={val}
          setToggleFetch={setToggleFetch}/>
        ))}
        {workout.map((val1) => (
          <Userbase workout={val1} />
        ))}
        <Footer />
      </Route>
      <Route path="/userWorkout">
        <h1 id="h22">Public Workout Folder</h1>
        {workout.map((val) => (
          <ShowWorkouts key={val.id} workout={val}
            setToggleFetch={setToggleFetch}/>
          //setToggleFetch ={setToggleFetch}/>
        ))}
      </Route>
      <Route path="/addWorkout">
        <h2 id="h3">Log your workout!</h2>
        <Form
        setToggleFetch={setToggleFetch}/>
      </Route>
      <Route path="/nutrition">
<Nutrition/>
      </Route>
      <Route path="/view/:id">
        <Form val={workout} />
      </Route>
      <Route path="/signUp">
        <h3 id="h3">Click <a href="viewforum">here</a> to directly enter the motivation forum!</h3>
        <Validator />
      </Route>
      <Route path="/forum">
        <Motivation />
      </Route>
      <Route path="/viewforum">
        {forum.map((val) => (
          <ShowMotivation andri2={val}
          setToggleFetch={setToggleFetch}/>
        ))}
        <Link to="/forum">Back</Link>
      </Route>
      <Route path="/admin">
        <Admin />
      </Route>
      <Route path="/adminpage">
        <AdminControls />
      </Route>
    </div>
  );
}

export default App;
