import React from "react";
import axios from "axios";
import { URL1, config1 } from "../services";


const ShowAdminQuote = (props) => {
  const { quote } = props.andri.fields;
  //can have anything set after props so i used my own name hence why its used again in app.js //
  const removed = async () => {
    const link = `${URL1}/${props.andri.id}`;
    await axios.delete(link, config1);
    props.setToggleFetch((val) => !val)
    //reminder to self this is how the auto updater works.
    //must have andri=val in our app.js so andri 
  };



  return (
    <div>
      <div>
        <h4 id="quote">Admin Tip: {quote}</h4>
        <button id="quoteb" onClick={removed}>
          ❌
        </button>
      </div>
    </div>
  );
};

export default ShowAdminQuote;
