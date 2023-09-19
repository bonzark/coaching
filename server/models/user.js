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
      type: mongoose.Schema.Types.ObjectId,
      ref: "Session",
      required: true,
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
