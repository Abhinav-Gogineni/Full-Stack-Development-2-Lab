const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

let students = [
    { id: 1, name: "Abhinav", course: "FSD" },
    { id: 2, name: "Sai", course: "AI" }
];

// GET API
app.get("/api/students", (req, res) => {
    res.json(students);
});

// POST API
app.post("/api/students", (req, res) => {
    const student = {
        id: Date.now(),
        name: req.body.name,
        course: req.body.course
    };

    students.push(student);
    res.json(student);
});

// DELETE API
app.delete("/api/students/:id", (req, res) => {
    const id = Number(req.params.id);
    students = students.filter(s => s.id !== id);
    res.send("Student deleted successfully");
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
