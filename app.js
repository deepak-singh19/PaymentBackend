const express = require("express");
let fs = require('fs');
let path = require('path');


const app = express();

var cors = require('cors');

app.use(cors());

require("./src/db/conn")

app.use(express.json());
// const User = require("./src/models/editprofileSchema");
app.use(require("./router/auth")); //link the router file






app.get('/', (req, res) => {
    res.send(`Hello from Server`);
});

app.get('/mySession', (req, res) => {
    res.send(`Hello from Session`);
});

app.get('/mentors', (req, res) => {
    res.send(`Hello from Mentor`);
});

app.get('/contact', (req, res) => {
    res.send(`Hello from contact`);
});

app.listen(3000, () => {
    console.log(`server is running`);
})