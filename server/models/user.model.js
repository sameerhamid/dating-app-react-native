const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    },
    hometown: {
      type: String,
      required: true,
    },
    datingPrefrence: [
      {
        type: String,
      },
    ],
    lookingFor: {
      type: String,
      required: true,
    },
    imageUrls: [
      {
        type: String,
      },
    ],
    prompts: [
      {
        question: {
          type: String,
          // required: true,
        },
        answer: {
          type: String,
          // required: true,
        },
      },
    ],
    likedProfiles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    recievedLikes: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          // required: true,
        },
        image: {
          type: String,
          // required: true,
        },
        comment: {
          type: String,
        },
      },
    ],
    matches: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    blockedUsers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {timestamps: true},
);

const User = mongoose.model('User', userSchema);

module.exports = User;
