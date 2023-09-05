const express = require("express");
const router = express.Router();
const sessionController = require("../controllers/sessionController");

router.post("/book", sessionController.bookSession);

router.get("/", sessionController.getAllSessions);
router.get("/:sessionId", sessionController.getSessionById);
router.get("/user/:userId", sessionController.getAllSessionsForUser);

module.exports = router;
