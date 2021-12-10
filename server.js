const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3001;


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

//GET route for homepage
app.get('/', (req,res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req,res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);