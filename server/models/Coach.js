const mongoose = require("mongoose");

const coachSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  about: {
    type: String,
  },
  intro: {
    type: String,
    required: true,
  },
  Image: {
    data: Buffer,
    contentType: String,
    title: String,
  },
  // Other fields specific to coaches can be added here, such as certifications, specialties, etc.
});

module.exports = mongoose.model("Coach", coachSchema);
