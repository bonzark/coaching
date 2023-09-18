const { validate } = require('../middlewares/validation');
const Coach = require('../models/Coach');

// Function to create a new coach
exports.createCoach = [
  validate,
  async (req, res) => {
    try {
      const { firstName, lastName, email, about } = req.body;

      // Create a new coach
      const coach = new Coach({
        firstName,
        lastName,
        email,
        about // full desc,
        //TOOD: intro //short desc
        //TOOD: img //short desc
        // Add other coach-specific fields here
      });

      await coach.save();

      return res.status(201).json({ message: 'Coach created successfully', coach });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
];

exports.getCoachList = async (req, res) => {
  try {
    const coaches = await Coach.find(); // Retrieve all coaches

    return res.status(200).json({ coaches });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateCoach = async (req, res) => {
  try {
    const { coachId } = req.params;
    const { firstName, lastName, email, about } = req.body; // Update data in the request body

    // Update the coach record
    const updatedCoach = await Coach.findByIdAndUpdate(
      coachId,
      { firstName, lastName, email, about },
      { new: true }
    );

    if (!updatedCoach) {
      return res.status(404).json({ error: 'Coach not found' });
    }

    return res.status(200).json({ message: 'Coach updated successfully', coach: updatedCoach });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Function to delete a coach by ID
exports.deleteCoach = async (req, res) => {
  try {
    const { coachId } = req.params;

    // Delete the coach record
    const deletedCoach = await Coach.findByIdAndRemove(coachId);

    if (!deletedCoach) {
      return res.status(404).json({ error: 'Coach not found' });
    }

    return res.status(200).json({ message: 'Coach deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getCoachById = async (req, res) => {
  try {
    const { coachId } = req.params;

    // Find the coach by their ID
    const coach = await Coach.findById(coachId);

    if (!coach) {
      return res.status(404).json({ error: 'Coach not found' });
    }

    return res.status(200).json({ coach });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
