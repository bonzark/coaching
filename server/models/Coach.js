const mongoose = require("mongoose");

const availabilitySchema = new mongoose.Schema({
  day: {
    type: String,
    enum: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    required: true,
  },
  timeSlots: [
    {
      start: {
        type: String,
        required: true,
      },
      end: {
        type: String,
        required: true,
      },
      maxClients: {
        type: Number,
        required: true,
      },
    },
  ],
});

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
  image: {
    type: String,
  },
  availableFrom: {
    type: String,
  },
  availableTo: {
    type: String,
  },
  sessionFees: {
    oneToOnePrice: {
      type: String,
      required: true,
    },
    groupPrice: {
      type: String,
      required: true,
    },
  },
  availableDays: [
    {
      type: String,
      enum: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
    },
  ],
  sessions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Session",
      required: true,
    },
  ],
  // availability: [availabilitySchema],
});

module.exports = mongoose.model("coaches", coachSchema);