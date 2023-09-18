const express = require("express");
const router = express.Router();
const sessionController = require("../controllers/sessionController");
const {
  validateSessionData,
  validateGetSessionDate,
} = require("../middlewares/validation");

router.post("/:coachId/book/:userId", sessionController.bookSession);
router.post(
  "/create",
  validateSessionData,
  sessionController.createSessionByCoach
);
router.post(
  "/getByDateAndCoach",
  validateGetSessionDate,
  sessionController.getSessionsByDateAndCoach
);

router.put(
  "/:sessionId/update",
  validateSessionData,
  sessionController.updateSession
);

router.delete("/:sessionId/delete", sessionController.deleteSession);

router.get("/", sessionController.getAllSessions);
router.get("/:sessionId", sessionController.getSessionById);
router.get("/coach/:coachId", sessionController.getSessionsByCoachId);
router.get("/user/:userId", sessionController.getAllSessionsForUser);

module.exports = router;
