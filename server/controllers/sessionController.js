const { validate } = require('../middlewares/validation');
const Session = require('../models/session');
const User = require('../models/user');

// Function to book a coaching session
exports.bookSession = async (req, res) => {
  try {
    const { sessionId, userId } = req.params;

    // Find the session by ID
    const session = await Session.findById(sessionId);

    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }

    // Check if the session is already booked by the user
    if (session.users.includes(userId)) {
      return res.status(400).json({ error: 'Session is already booked by the user' });
    }

    // Check if there is a session at the same date and time
    const conflictingSession = await Session.findOne({
      date: session.date,
      time: session.time,
      users: userId,
    });

    if (conflictingSession) {
      return res
        .status(400)
        .json({ error: 'User has already booked a session at the same date and time' });
    }

    // Add the user to the list of booked users
    session.users.push(userId);
    await session.save();

    return res.status(200).json({ message: 'Session booked successfully', session });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getAllSessionsForUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const sessions = await Session.find({ user: userId });

    return res.status(200).json({ sessions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getAllSessions = async (req, res) => {
  try {
    const sessions = await Session.find().populate('coach');

    return res.status(200).json({ sessions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getSessionById = async (req, res) => {
  try {
    const { sessionId } = req.params; // Assuming you pass the sessionId as a parameter in the route

    // Find the session by its ID
    const session = await Session.findById(sessionId).populate('coach');

    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }

    return res.status(200).json({ session });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Function to create a coaching session by a coach
exports.createSessionByCoach = [
  validate,
  async (req, res) => {
    try {
      const { coachId, date, time, price, title, details } = req.body;

      const existingSession = await Session.findOne({ coach: coachId, date, time });

      if (existingSession) {
        return res
          .status(400)
          .json({ error: 'Session with the same coach, date, and time already exists' });
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

      return res.status(201).json({ message: 'Coaching session created successfully', session });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
];

exports.getSessionsByCoachId = async (req, res) => {
  try {
    const { coachId } = req.params;

    // Find sessions by coach ID
    const sessions = await Session.find({ coach: coachId }).populate('coach');

    return res.status(200).json({ sessions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
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
      res.status(500).json({ error: 'Internal Server Error' });
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
        return res.status(404).json({ error: 'Session not found' });
      }

      return res.status(200).json({ message: 'Session updated successfully', session });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
];

exports.deleteSession = async (req, res) => {
  try {
    const { sessionId } = req.params;

    // Find and delete the session by ID
    const deletedSession = await Session.findByIdAndRemove(sessionId);

    if (!deletedSession) {
      return res.status(404).json({ error: 'Session not found' });
    }

    return res.status(200).json({ message: 'Session deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
