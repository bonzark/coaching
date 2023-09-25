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
  isFreeReadingBooked: Boolean,
  isVerified: Boolean,
  verificationToken: String,
  resetToken: String,
  //Changed it to BookedSessions as sessions not make any sense
  sessions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BookedSession",
      required: true,
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
