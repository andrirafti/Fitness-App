import React from "react";
import { useState } from "react";

const Reply = () => {
  const [reply, setReply] = useState("");
  return (
    <div>
      <input
        type="text"
        value={reply}
        onChange={(e) => setReply(e.target.value)}
      />
    </div>
  );
};

export default Reply;
