import { useState } from "react";
import axios from "axios";
import { URL1, config1 } from "../services";
const AdminControls = () => {
  const [quote, setQuote] = useState("");
  const [foodtip, setFoodTip] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const quoteOfDay = {
      quote,
    };
    await axios.post(URL1, { fields: quoteOfDay }, config1);
    window.location.reload();
  };
  const handleSubmit2 = async (e) => {
    e.preventDefault();
    const foodTipOfDay = {
      foodtip,
    };
    await axios.post(URL1, { fields: foodTipOfDay }, config1);
  };
  return (
    <div id="ADMIN3">
      <form onSubmit={handleSubmit}>
        <h1 id="MAIN">Admin Page</h1>
        <h3>Hello,Andri</h3>
        <p>Set your users Motivtional Quote of the day!</p>
        <div>
          <label>Quote Of The Day:</label>
          <input
            type="text"
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
          />
        </div>
        <button type="submit"> Send!</button>
      </form>
      <form onSubmit={handleSubmit2}>
        <h2>Send your users some nutrtion facts!</h2>
        <label>Nutrtion Fact:</label>
        <input
          type="text"
          value={foodtip}
          onChange={(e) => setFoodTip(e.target.value)}
        />
        <button type="submit">Send!</button>
      </form>
    </div>
  );
};

export default AdminControls;
