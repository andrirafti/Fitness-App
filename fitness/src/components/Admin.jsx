import { useState } from "react";
import { useHistory } from "react-router-dom";


const Admin = () => {
  const [user, setUser] = useState("");
  const history = useHistory();
  const [pass, setPass] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === "andri" && pass ===  "Matilda") {
      alert("Welcome Admin");
      history.push("/adminpage");
      window.location.reload();
    } else alert("You are not an Admin... Goodbye");
    setPass("");
    setUser("");
  };

  return (
    <div id="adminlogin">
      <form onSubmit={handleSubmit}>
        <h1>Welcome Admin</h1>
        <p>Please Input login credentials below.</p>
        <div>
          <label>Admin-Id</label>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div>
          <label>Admin-Password</label>
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Admin;
