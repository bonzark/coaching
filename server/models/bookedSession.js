const mongoose = require("mongoose");

const sessionSchemaObj = {
  session: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Session", // Reference to the coach (user) who created the session
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
};

const sessionSchema = new mongoose.Schema(sessionSchemaObj);

const BookedSession = mongoose.model("BookedSession", sessionSchema);
module.exports = BookedSession;
