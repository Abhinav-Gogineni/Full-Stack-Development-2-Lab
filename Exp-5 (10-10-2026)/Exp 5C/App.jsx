import React, { Component } from "react";

// Functional Component
function Header() {
  return <h1>Welcome to ReactJS</h1>;
}

// Class Component
class Message extends Component {
  render() {
    return <p>This is a class component.</p>;
  }
}

// Nested Components
function App() {
  return (
    <div>
      <Header />
      <Message />
      <p>Components can be nested inside other components.</p>
    </div>
  );
}

export default App;
