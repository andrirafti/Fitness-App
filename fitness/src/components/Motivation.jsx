import React from "react";
import { useState } from "react";
import axios from "axios";
import { URL2, config1 } from "../services";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
const Motivation = () => {
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();
  const onSub = async (e) => {
    e.preventDefault();
    const motivation = {
      user,
      message,
    };
    await axios.post(URL2, { fields: motivation }, config1);
    history.push("/viewforum");
    window.location.reload();
  };

  return (
    <form onSubmit={onSub}>
      <Link id="back" to="/signUp">
        🔙
      </Link>
      <div id="setmoti">
        <h1>
          
          Welcome All Users! Please motivate each other to finish your workout!!
        </h1>
        <div>
          <label>User:</label>
          <input
            required
            type="text"
            value={user}
            placeholder="UserName"
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div>
          <label>Message:</label>
          <input
            required
            type="text"
            value={message}
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button id="btn5" type="submit">
          Post!
        </button>

        <Link id="link" to="/viewforum">
          View Forum
        </Link>
      </div>
    </form>
  );
};

export default Motivation;
