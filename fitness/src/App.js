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
import Nutrition from "./components/Nutrition";

function App() {
  const [workout, setWorkout] = useState([]);
  const [forum, setForum] = useState([]);
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    const makemyworkout = async () => {
      let resp = await axios.get(URL, config1);
      console.log(resp.data.records);
      setWorkout(resp.data.records);
    };
    makemyworkout();
  }, []);
  useEffect(() => {
    const makemyforum = async () => {
      let resp1 = await axios.get(URL2, config1);
      console.log(resp1.data.records);
      setForum(resp1.data.records);
    };
    makemyforum();
  }, []);

  useEffect(() => {
    const quoteofday = async () => {
      let resp2 = await axios.get(URL1, config1);
      console.log(resp2.data.records);
      setQuote(resp2.data.records);
    };
    quoteofday();
  }, []);

  return (
    <div>
      <Nav />
      <Route exact path="/">
        {quote.map((val) => (
          <ShowAdminQuote val={val} />
        ))}
        {workout.map((val1) => (
          <Userbase workout={val1} />
        ))}
        <Footer />
      </Route>
      <Route path="/userWorkout">
        {workout.map((val) => (
          <ShowWorkouts key={val.id} workout={val} />
          //setToggleFetch ={setToggleFetch}/>
        ))}
      </Route>
      <Route path="/addWorkout">
        <Form />
      </Route>
      <Route path="/nutrition">
        <Nutrition />
      </Route>
      <Route path="/view/:id">
        <Form val={workout} />
      </Route>
      <Route path="/signUp">
        <Validator />
      </Route>
      <Route path="/forum">
        <Motivation />
      </Route>
      <Route path="/viewforum">
        {forum.map((val) => (
          <ShowMotivation val={val} />
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
