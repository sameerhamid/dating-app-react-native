const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const crypto = require('crypto');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

const http = require('http').createServer(app);
const io = require('socket.io')(http);
const jwt = require('jsonwebtoken');

app.use(cors());
app.use(bodyParser({extended: false}));
app.use(bodyParser.json());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log('Connected to monogdb');
  })
  .catch(err => {
    console.log(`MongoDB connection error>>> ${err}`);
  });

app.listen(port, () => {
  console.log(`Server running on port>>> ${port}`);
});

const User = require('./models/user.model.js');

app.post('/register', async (req, res) => {
  try {
    console.log('request data>>>', req.query);
    const userData = req.body; // gets details from the request
    const newUser = new User(userData); // creates user instance
    await newUser.save(); // save th user into mongodb
    const secretKey = process.env.SECRET_KEY;
    console.log('secret key>>>', secretKey);
    const token = jwt.sign({userId: newUser._id}, secretKey);
    res.status(200).json({token});
  } catch (error) {
    console.log(`Error creating user >>> ${error}`);
    res.status(500).json({error: 'Internal server error'});
  }
});
