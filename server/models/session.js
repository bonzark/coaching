const mongoose = require("mongoose");

const sessionSchemaObj = {
  coach: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "coaches", // Reference to the coach (user) who created the session
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
  calendlyLink: {
    type: String,
    required: true
  },
  stripeProductId: {
    type: String,
    required: true
  }
};

const sessionSchema = new mongoose.Schema(sessionSchemaObj);

const Session = mongoose.model("Session", sessionSchema);
module.exports = Session;
