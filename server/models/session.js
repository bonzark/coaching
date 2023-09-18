const mongoose = require("mongoose");

const sessionSchemaObj = {
  coach: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Coach", // Reference to the coach (user) who created the session
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the coach (user) who created the session
    required: true,
  },
  date: {
    type: String,
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
  sessionType: {
    type: String,
    enum: ["group", "oneToOne"],
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
};

const sessionSchema = new mongoose.Schema(sessionSchemaObj);

const Session = mongoose.model("Session", sessionSchema);
module.exports = Session;
