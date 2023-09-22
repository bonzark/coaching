const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

// Define the Stripe webhook route
router.post("/webhook", paymentController.handleWebhookEvent);

module.exports = router;
