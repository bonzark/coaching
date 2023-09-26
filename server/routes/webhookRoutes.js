const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");
const sessionController = require("../controllers/sessionController");

// Route to payment
router.post(
  "/",
  express.json({
    verify: (req, res, buf) => {
      req.rawBody = buf; // Store the raw request body
    },
  }),
  paymentController.paymentCompleted
);

router.post("/create-invitee", sessionController.inviteeCreated);

module.exports = router;
