const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const crypto = require('crypto');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

const http = require('http').createServer(app);
const io = require('socket.io')(http);
const jwt = require('jsonwebtoken');

app.use(cors('*'));
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

app.listen(port, '0.0.0.0', () => {
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
    const token = jwt.sign({userId: newUser._id}, secretKey);
    res.status(200).json({token});
  } catch (error) {
    console.log(`Error creating user >>> ${error}`);
    res.status(500).json({error: 'Internal server error'});
  }
});

// fetch users data

app.get('/users/:userId', async (req, res) => {
  try {
    const {userId} = req.params;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(500).json({message: 'User not found'});
    }
    return res.status(200).json({user});
  } catch (error) {
    res.status(500).json({message: 'Error fetching the user details'});
  }
});

// login user

app.post('/login', async (req, res) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if (!user) {
      return res.status(401).json({message: 'Invalid Email'});
    }
    if (user.password !== password) {
      return res.status(401).json({message: 'Invalid password'});
    }

    return res.status(200).json({user});
  } catch (error) {
    res.status(500).json({message: 'Error logging in'});
  }
});

// matches

app.get('/matches', async (req, res) => {
  try {
    const {userId} = req.query;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({message: 'User not found'});
    }
    let filter = {};
    if (user.gender === 'Men' || user.gender === 'men') {
      filter.gender = 'Women';
    } else if (user.gender === 'Women' || user.gender === 'women') {
      filter.gender = 'Men';
    }
    let query = {
      _id: {$ne: userId},
    };
    if (user.type) {
      filter.type = user.type;
    }
    const currentUser = await User.findById(userId)
      .populate('matches', '_id')
      .populate('likedProfiles', '_id');

    const friendsIds = currentUser.matches.map(friend => friend._id);
    const likedIds = currentUser.likedProfiles.map(liked => liked._id);
    const matches = await User.find(filter)
      .where('_id')
      .nin([userId, ...friendsIds, ...likedIds]);

    return res.status(200).json({matches});
  } catch (error) {
    res.status(500).json({message: 'InternalServerError'});
  }
});
