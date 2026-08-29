const express = require("express");

const app = express();
const PORT = 3000;

// Middleware to read form data
app.use(express.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set("view engine", "ejs");

// Display the form
app.get("/", (req, res) => {
    res.render("form");
});

// Handle form submission
app.post("/submit", (req, res) => {
    const { name, email, course } = req.body;

    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Form Data</title>
        </head>
        <body>
            <h1>Form Data Received</h1>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Course:</strong> ${course}</p>

            <br>
            <a href="/">Go Back</a>
        </body>
        </html>
    `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
