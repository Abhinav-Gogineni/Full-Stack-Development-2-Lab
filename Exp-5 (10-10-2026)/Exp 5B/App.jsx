function App() {
  const name = "ReactJS";

  return (
    <div>
      <h1>Welcome to {name}</h1>
      <p>JSX allows us to write HTML-like markup in JavaScript.</p>

      <h2>Features of JSX</h2>
      <ul style={{ display: "inline-block", textAlign: "left" }}>
        <li>Easy to write</li>
        <li>Readable syntax</li>
        <li>Supports JavaScript expressions</li>
      </ul>
    </div>
  );
}

export default App;
