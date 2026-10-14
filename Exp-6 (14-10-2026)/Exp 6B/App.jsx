import React from "react";
import "./App.css";
import "./App.scss";

function App() {
  const student = {
    name: "Abhinav",
    course: "B.Tech",
    branch: "CSE - AI & ML",
    college: "VVIT"
  };

  return (
    <div className="container">
      <h1 className="title">Student Details</h1>

      <div className="card">
        <h2>{student.name}</h2>
        <p>Course: {student.course}</p>
        <p>Branch: {student.branch}</p>
        <p>College: {student.college}</p>
      </div>
    </div>
  );
}

export default App;
