const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const crypto = require('crypto');

const app = express();
const port = 6000;
const cors = require('cors');

const http = require('http').createServer(app);
const io = require('socket.io')(http);
const jwt = require('jsonwebtoken');

app.use(cors());
app.use(bodyParser({extended: false}));
app.use(bodyParser.json());
app.use(express.json());

mongoose
  .connect('mongodb+srv://codewithsamiir:sameer@cluster0.hpeechq.mongodb.net/')
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
    const userData = req.body;
    const newUser = new User(userData);
    await newUser.save();
    const secretKey = crypto.randomBytes(32).toString('hex');
    const token = jwt.sing({userId: newUser._id, secretKey});
    res.status(200).json({token});
  } catch (error) {
    console.log(`Error creating user >>> ${error}`);
    res.status(500).json({error: 'Internal server error'});
  }
});
