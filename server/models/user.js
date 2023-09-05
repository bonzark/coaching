const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
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
  isVerified: Boolean,
  verificationToken: String,
  resetToken: String,
  sessions: [
    {
      date: Date,
      time: String,
      price: Number,
      isFirstSessionFree: Boolean,
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
