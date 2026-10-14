import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("Click the button!");

  function handleClick() {
    setMessage("Button clicked successfully!");
  }

  return (
    <div>
      <h1>ReactJS Event Handling</h1>
      <p>{message}</p>

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default App;
