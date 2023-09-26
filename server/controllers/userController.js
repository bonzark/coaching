const User = require("../models/user");

// Function to get a list of all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password").populate("bookedSession"); // Exclude password field from the response

    return res.status(200).json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
