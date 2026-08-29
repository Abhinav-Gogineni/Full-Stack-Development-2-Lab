const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    const student = {
        name: "Abhi",
        course: "B.Tech",
        branch: "CSM"
    };

    res.render('index', { student: student });
});

app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});
