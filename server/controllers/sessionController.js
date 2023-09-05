const Session = require("../models/session");
const User = require("../models/user");

// Function to book a coaching session
exports.bookSession = async (req, res) => {
  try {
    const { userId, date, time, price } = req.body; // Assuming you have these values in the request

    // Check if the user has already booked a session
    const user = await User.findById(userId).populate("sessions");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if the user's first session is free
    if (user.sessions.length === 0) {
      const session = new Session({
        user: userId,
        date: new Date(),
        time: new Date().toUTCString(),
        price: 0,
        isFirstSessionFree: true,
      });

      await session.save();
      user.sessions.push(session);
      await user.save();

      return res.status(201).json({ message: "Session booked for free" });
    } else {
      const session = new Session({
        user: userId,
        date: new Date(),
        time: new Date().toUTCString(),
        price,
        isFirstSessionFree: false,
      });

      await session.save();
      user.sessions.push(session);
      await user.save();

      return res.status(201).json({ message: "Session booked" });
    }
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
    const sessions = await Session.find();

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
    const session = await Session.findById(sessionId);

    if (!session) {
      return res.status(404).json({ error: "Session not found" });
    }

    return res.status(200).json({ session });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
