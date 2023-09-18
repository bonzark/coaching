const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  coach: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Coach', // Reference to the coach (user) who created the session
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  //TODO: Move to booked session
  // users: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'User', // Reference to the User model
  //   },
  // ],
});

const Session = mongoose.model('Session', sessionSchema);
module.exports = Session;
