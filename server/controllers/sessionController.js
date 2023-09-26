const { validate } = require("../middlewares/validation");
const Coach = require("../models/Coach");
const BookedSession = require("../models/bookedSession");
const Session = require("../models/session");
const User = require("../models/user");
const axios = require("axios");

exports.bookSession = async (req, res) => {
  try {
    const userId = req.params.userId;
    const sessionId = req.params.sessionId;
    const { date, time } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const session = await Session.findById(sessionId).populate("coach");
    const coach = session.coach;

    if (!session) {
      return res.status(404).json({ error: "session not found" });
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

    const conflictingCoachSession = await BookedSession.findOne({
      date: date,
      time: time,
      session: sessionId,
    });

    const conflictingUserSession = await BookedSession.findOne({
      date: date,
      time: time,
      user: userId,
    });

    if (coachAvailability) {
      if (conflictingCoachSession) {
        return res.status(400).json({
          error: `coach is not availabe on ${date}, ${time}. Please choose another slot`,
        });
      } else if (conflictingUserSession) {
        return res.status(400).json({
          error: `you have alredy booked session on ${date}, ${time}. Please choose another slot`,
        });
      } else {
        const bookedSession = new BookedSession({
          session: sessionId,
          user: userId,
          date: date,
          time: time,
        });

        await bookedSession.save();
        coach.sessions.push(bookedSession);
        user.sessions.push(bookedSession);
        coach.save();
        user.save();
        return res.status(201).json({
          message: "Coaching session appoint successfully",
          bookedSession,
        });
      }
    } else {
      return res.status(400).json({
        error: `coach is not availabe on ${dayName}`,
      });
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
    const sessions = await Session.find().populate("coach");
    return res.status(200).json({ sessions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.scheduledEventsCalendly = async (req, res) => {
  try {
    const options = {
      method: "GET",
      url: "https://api.calendly.com/scheduled_events",
      params: {
        organization:
          "https://api.calendly.com/organizations/e7cbbbf8-e5bd-4fa3-90fe-30ae3dd4fde1",
      },
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNjk1MjAxNjY0LCJqdGkiOiI3MDZjOGFmNy1jM2EyLTQ5ODAtOTZiNC1jZjcxZWM0MzNjYmQiLCJ1c2VyX3V1aWQiOiJjYTU5YzUwNS0xYzQ1LTRhZGMtOTI0MS1jNWIyOWRmZGNjMTgifQ.UEjNlxVzHBA3GtK-uLuPZYgdjtNdPxcADGZyKkxpXy0Tycl6hwEozDYZwDDrlWSfVlghreqIr7XGWYqbSXfsVg",
      },
    };

    // Example: Fetch upcoming events
    axios
      .request(options)
      .then(function (response) {
        return res.status(200).json(response.data);
      })
      .catch(function (error) {
        return res.status(500).json(error);
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
exports.inviteeCreated = async (req, res) => {
  //Webhook payload when invitee created

  // {
  //   "created_at": "2020-11-23T17:51:19.000000Z",
  //   "created_by": "https://api.calendly.com/users/AAAAAAAAAAAAAAAA",
  //   "event": "invitee.created",
  //   "payload": {
  //     "cancel_url": "https://calendly.com/cancellations/AAAAAAAAAAAAAAAA",
  //     "created_at": "2020-11-23T17:51:18.327602Z",
  //     "email": "test@example.com",
  //     "event": "https://api.calendly.com/scheduled_events/AAAAAAAAAAAAAAAA",
  //     "name": "John Doe",
  //     "new_invitee": null,
  //     "old_invitee": null,
  //     "questions_and_answers": [],
  //     "reschedule_url": "https://calendly.com/reschedulings/AAAAAAAAAAAAAAAA",
  //     "rescheduled": false,
  //     "status": "active",
  //     "text_reminder_number": null,
  //     "timezone": "America/New_York",
  //     "tracking": {
  //       "utm_campaign": null,
  //       "utm_source": null,
  //       "utm_medium": null,
  //       "utm_content": null,
  //       "utm_term": null,
  //       "salesforce_uuid": null
  //     },
  //     "updated_at": "2020-11-23T17:51:18.341657Z",
  //     "uri": "https://api.calendly.com/scheduled_events/AAAAAAAAAAAAAAAA/invitees/AAAAAAAAAAAAAAAA",
  //     "scheduled_event": {
  //       "uri": "https://api.calendly.com/scheduled_events/GBGBDCAADAEDCRZ2",
  //       "name": "15 Minute Meeting",
  //       "status": "active",
  //       "start_time": "2019-08-24T14:15:22.123456Z",
  //       "end_time": "2019-08-24T14:15:22.123456Z",
  //       "event_type": "https://api.calendly.com/event_types/GBGBDCAADAEDCRZ2",
  //       "location": {
  //         "type": "physical",
  //         "location": "string"
  //       },
  //       "invitees_counter": {
  //         "total": 0,
  //         "active": 0,
  //         "limit": 0
  //       },
  //       "created_at": "2019-01-02T03:04:05.678123Z",
  //       "updated_at": "2019-01-02T03:04:05.678123Z",
  //       "event_memberships": [
  //         {
  //           "user": "https://api.calendly.com/users/GBGBDCAADAEDCRZ2",
  //           "user_email": "user@example.com"
  //         }
  //       ],
  //       "event_guests": [
  //         {
  //           "email": "user@example.com",
  //           "created_at": "2019-08-24T14:15:22.123456Z",
  //           "updated_at": "2019-08-24T14:15:22.123456Z"
  //         }
  //       ]
  //     }
  //   }
  // }

  //TODO: Change status of bookedSession table. find entry with status purchased and with this user email and change that session to --> booked, populate other fields as well invite link(zoom or any), from and to dateTimes
  //TODO: Please update user flag isFreeReadingBooked to true if freeReading Is Booked
  try {
    console.log(res);
    return res
      .status(201)
      .json({ message: "Coaching session created successfully", session });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getSessionById = async (req, res) => {
  try {
    const { sessionId } = req.params;

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

exports.createSessionByCoach = async (req, res) => {
  try {
    const {
      coachId,
      title,
      details,
      sessionType,
      calendlyLink,
      stripePriceId,
    } = req.body;

    const coach = await Coach.findById(coachId);

    const existingSession = await Session.findOne({
      coach: coachId,
      sessionType,
    });

    if (existingSession) {
      return res.status(400).json({
        error: "Session with the same coach, sessionType already exists",
      });
    }

    // Create a new session
    const session = new Session({
      coach: coachId,
      title,
      details,
      sessionType,
      calendlyLink,
      stripePriceId,
    });

    await session.save();
    coach.sessions.push(session);
    await coach.save();

    return res
      .status(201)
      .json({ message: "Coaching session created successfully", session });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
exports.getSessionsByCoachId = async (req, res) => {
  try {
    const { coachId } = req.params;

    const sessions = await Session.find({ coach: coachId }).populate("coach");

    return res.status(200).json({ sessions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getAllBookedSessions = async (req, res) => {
  try {
    const bookedSessions = await BookedSession.find()
      .populate({
        path: "session",
        populate: {
          path: "coach",
          model: "coaches",
        },
      })
      .populate("user");
    return res.status(200).json({ bookedSessions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getAllBookedSessionsById = async (req, res) => {
  try {
    const { bookedId } = req.params;

    const bookedSessions = await BookedSession.findById(bookedId)
      .populate({
        path: "session",
        populate: {
          path: "coach",
          model: "coaches",
        },
      })
      .populate("user");

    if (!bookedSessions) {
      return res.status(404).json({ error: "Session not found" });
    }

    return res.status(200).json({ bookedSessions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getAllBookedSessionsByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    const bookedSessions = await BookedSession.find({ user: userId }).populate({
      path: "session",
      populate: {
        path: "coach",
        model: "coaches",
      },
    });

    if (!bookedSessions) {
      return res.status(404).json({ error: "Session not found" });
    }

    return res.status(200).json({ bookedSessions });
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
