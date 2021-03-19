import { useState } from "react";
import axios from "axios";
import { URL1, config1 } from "../services";
const AdminControls = () => {
  const [quote, setQuote] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const quoteOfDay = {
      quote,
    };
    await axios.post(URL1, { fields: quoteOfDay }, config1);
    window.location.reload();
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
    </div>
  );
};

export default AdminControls;
