const BookedSession = require("../models/bookedSession");

const consumedSession = async () => {
  try {
    const currentUTCDate = new Date();

    const conditions = [
      { status: "booked" },
      { sessionEndDate: { $lt: currentUTCDate } },
    ];

    const updateQuery = { $and: conditions };

    const updateFields = {
      $set: { status: "booked" },
    };
    const data = await BookedSession.find(updateQuery);
    // await BookedSession.updateMany(updateQuery, updateFields)
    //   .then((result) => {
    //     console.log(`documents updated to "consumed"`);
    //   })
    //   .catch((err) => {
    //     console.error("Error updating consumed documents:", err);
    //   });
    return data;
  } catch (error) {
    return error;
  }
};

module.exports = consumedSession;
