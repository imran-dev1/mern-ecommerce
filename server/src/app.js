const express = require('express');
const cors = require('cors');
require('dotenv').config()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => { 
    res.send('Welcome to the MERN-ecommerce server!')
})

module.exports = app;