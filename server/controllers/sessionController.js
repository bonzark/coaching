const { validate } = require("../middlewares/validation");
const Coach = require("../models/Coach");
const Session = require("../models/session");
const User = require("../models/user");

// Function to book a coaching session
exports.bookSession = async (req, res) => {
  try {
    const userId = req.params.userId;
    const coachId = req.params.coachId;
    const { date, time, sessionType } = req.body;

    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Find the coach by ID
    const coach = await Coach.findById(coachId);

    if (!coach) {
      return res.status(404).json({ error: "Coach not found" });
    }

    const inputDate = date;
    const dateObj = new Date(inputDate);
    const dayOfWeek = dateObj.getDay();
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dayName = daysOfWeek[dayOfWeek];

    const coachAvailability = coach.availableDays.find(
      (day) => day === dayName
    );

    if (coachAvailability) {
      if (coach.sessions.length === 0) {
        const session = new Session({
          coach: coachId,
          user: userId,
          date: date,
          time: time,
          price:
            sessionType === "group"
              ? coach.sessionFees.groupPrice
              : coach.sessionFees.oneToOnePrice,
          sessionType,
          title: "testing",
          details:
            "testing testing testing testing testing testing testing testing ",
        });

        await session.save();
        coach.sessions.push(session);
        coach.save();
        return res
          .status(201)
          .json({ message: "Coaching session appoint successfully", session });
      }
    } else {
      return res.status(400).json({
        error: `coach is not availabe on ${dayName}`,
      });
    }
    // // Check if the user already has an appointment at the same time slot on the same day
    // const existingAppointment = coach.availability.find((appointment) => {
    //   return (
    //     appointment.client.toString() === userId &&
    //     appointment.day === appointmentData.day &&
    //     appointment.timeSlots.some((timeSlot) => {
    //       return (
    //         timeSlot.start === appointmentData.timeSlots[0].start &&
    //         timeSlot.end === appointmentData.timeSlots[0].end
    //       );
    //     })
    //   );
    // });

    // if (existingAppointment) {
    //   return res.status(400).json({
    //     error:
    //       "User already has an appointment at this time slot on the same day",
    //   });
    // }

    // Create a new appointment
    // const appointment = {
    //   client: user._id, // Reference to the user
    //   ...appointmentData,
    // };

    // Add the appointment to the coach's availability
    // coach.availability.push(appointment);

    // Save the updated coach to the database
    // await coach.save();

    // res.status(201).json(coachAvailability);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getAllSessionsForUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const sessions = await Session.find({ user: userId });

    return res.status(200).json({ sessions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getAllSessions = async (req, res) => {
  try {
    const sessions = await Session.find().populate("coach");

    return res.status(200).json({ sessions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getSessionById = async (req, res) => {
  try {
    const { sessionId } = req.params; // Assuming you pass the sessionId as a parameter in the route

    // Find the session by its ID
    const session = await Session.findById(sessionId).populate("coach");

    if (!session) {
      return res.status(404).json({ error: "Session not found" });
    }

    return res.status(200).json({ session });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Function to create a coaching session by a coach
exports.createSessionByCoach = [
  validate,
  async (req, res) => {
    try {
      const { coachId, date, time, price, title, details } = req.body;

      const existingSession = await Session.findOne({
        coach: coachId,
        date,
        time,
      });

      if (existingSession) {
        return res.status(400).json({
          error: "Session with the same coach, date, and time already exists",
        });
      }

      // Create a new session
      const session = new Session({
        coach: coachId,
        date,
        time,
        price,
        title,
        details,
      });

      await session.save();

      return res
        .status(201)
        .json({ message: "Coaching session created successfully", session });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
];

exports.getSessionsByCoachId = async (req, res) => {
  try {
    const { coachId } = req.params;

    // Find sessions by coach ID
    const sessions = await Session.find({ coach: coachId }).populate("coach");

    return res.status(200).json({ sessions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getSessionsByDateAndCoach = [
  validate,
  async (req, res) => {
    try {
      const { date, coachId } = req.body;

      // Find sessions by date and coach ID
      const sessions = await Session.find({ date, coach: coachId });

      return res.status(200).json({ sessions });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
];

exports.updateSession = [
  validate,
  async (req, res) => {
    try {
      const { sessionId } = req.params;
      const { coachId, date, time, price, title, details } = req.body;

      // Find the session by ID
      const session = await Session.findByIdAndUpdate(
        sessionId,
        {
          coach: coachId,
          date,
          time,
          price,
          title,
          details,
        },
        { new: true }
      );

      if (!session) {
        return res.status(404).json({ error: "Session not found" });
      }

      return res
        .status(200)
        .json({ message: "Session updated successfully", session });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
];

exports.deleteSession = async (req, res) => {
  try {
    const { sessionId } = req.params;

    // Find and delete the session by ID
    const deletedSession = await Session.findByIdAndRemove(sessionId);

    if (!deletedSession) {
      return res.status(404).json({ error: "Session not found" });
    }

    return res.status(200).json({ message: "Session deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
