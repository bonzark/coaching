const express = require("express");
const router = express.Router();
const coachController = require("../controllers/coachController");
const multer = require("multer");
const { validateCoach } = require("../middlewares/validation");

// Multer setup for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Route to create a new coach
router.get("/list", coachController.getCoachList);

router.post(
  "/create",
  validateCoach,
  upload.single("image"),
  coachController.createCoach
);

router.put("/update/:coachId", validateCoach, coachController.updateCoach);

router.delete("/:coachId", coachController.deleteCoach);

router.get("/:coachId", coachController.getCoachById);

module.exports = router;
