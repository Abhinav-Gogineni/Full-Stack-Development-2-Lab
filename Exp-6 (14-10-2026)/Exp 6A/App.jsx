import React, { useState } from "react";

// Child Component using Props
function Student(props) {
  return <h2>Student Name: {props.name}</h2>;
}

// Main Component using State
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Props and State in ReactJS</h1>

      <Student name="Abhinav" />

      <h3>Counter: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default App;
