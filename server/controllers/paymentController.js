const stripe = require("../utils/stripe");

const handleWebhookEvent = async (req, res) => {
  try {
    const signature = req.headers["stripe-signature"];
    const verifiedEvent = stripe.webhooks.constructEvent(
      req.body,
      signature,
      "whsec_8f746867c3f7b78adec58ee7753add72f916a9a92763edb7796c92a6b693e7f8"
    );

    // Handle the event based on its type
    switch (verifiedEvent.type) {
      case "payment_intent.succeeded":
        // Handle successful payment intent
        // You can perform actions like updating the order status, sending email notifications, etc.
        break;
      case "payment_intent.failed":
        // Handle failed payment intent
        // You can take actions like notifying the customer about the payment failure
        break;
      // Add more event types and handlers as needed
      default:
        console.log(`Unhandled event type: ${verifiedEvent.type}`);
    }

    res.status(200).send("Webhook received and processed successfully.");
  } catch (error) {
    console.error("Error handling webhook:", error);
    res.status(400).send("Webhook error");
  }
};

module.exports = {
  handleWebhookEvent,
};
