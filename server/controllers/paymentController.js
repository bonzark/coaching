const stripe = require("stripe")(process.env.STRIPE_SECRET);
const express = require("express");
const PaymentDetail = require("../models/paymentDetails");
const BookedSession = require("../models/bookedSession");
const User = require("../models/user");
const app = express();

const CLIENT_URL = process.env.HOST_URL;
// Find your endpoint's secret in your Dashboard's webhook settings, populate using .env
const endpointSecret =
  "whsec_94eee311d8673d5488126063108dec9e61a5a632e5c69d0761905620210097f7";

const fulfillOrder = (lineItems) => {
  // TODO: fill me in
  console.log("Fulfilling order", lineItems);
  console.log("--------");
};

exports.paymentSession = async (req, res) => {
  try {
    const userId = req.body.userId;
    const sessionId = req.body.sessionId;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          //Price Id can be retrived from products page, a single product will have a unique priceId
          price: req.body.price_id ?? "price_1NtwGWSFygNTJvTO4irLPEiE",
          quantity: 1,
        },
      ],
      // On success, redirect to:
      success_url: `${CLIENT_URL}?success=true`,
      // On failure, redirect to:
      cancel_url: `${CLIENT_URL}?canceled=true`,
      metadata: {
        userId: userId,
        sessionId: sessionId,
      },
    });

    //Redirect user to this url. It is a stripe url, payment page.
    res.json({ url: session.url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.paymentCompleted = async (req, res) => {
  const event = req.rawBody;

  // Verify the webhook event (optional but recommended)
  try {
    const signature = req.headers["stripe-signature"];
    const verifiedEvent = stripe.webhooks.constructEvent(
      event,
      signature,
      "whsec_94eee311d8673d5488126063108dec9e61a5a632e5c69d0761905620210097f7"
    );

    // Store the event in MongoDB

    if (verifiedEvent.type === "payment_intent.succeeded") {
      const paymentIntent = verifiedEvent.data.object;

      const checkoutSession = await getCheckoutSessionByPaymentIntentId(
        paymentIntent.id
      );

      const userId = checkoutSession.metadata.userId;
      const sessionId = checkoutSession.metadata.sessionId;
      const user = await User.findById(userId);

      const paymentDetail = new PaymentDetail({
        id: paymentIntent.id,
        details: paymentIntent,
        session: sessionId,
        user: userId,
      });

      const purchasedSession = new BookedSession({
        session: sessionId,
        user: userId,
        purchaseDate: paymentIntent.created,
        status: "purchased",
      });
      await paymentDetail.save();
      await purchasedSession.save();
      user.purchasedSession.push(purchasedSession);
      await user.save();
    }

    res.sendStatus(200); // Respond to the webhook request with a 200 status code
  } catch (error) {
    console.error("Error handling webhook event:", error);
    res.sendStatus(400); // Respond with an error status code
  }
};

async function getCheckoutSessionByPaymentIntentId(paymentIntentId) {
  try {
    // List all Checkout Sessions
    const sessions = await stripe.checkout.sessions.list({ limit: 100 }); // Adjust limit as needed

    // Filter the sessions to find the one associated with the PaymentIntent ID
    const session = sessions.data.find((session) => {
      return session.payment_intent === paymentIntentId;
    });

    return session;
  } catch (error) {
    console.error("Error retrieving Checkout Session:", error);
    throw error;
  }
}
