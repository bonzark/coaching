const stripe = require("stripe")(process.env.STRIPE_SECRET);
const PaymentDetail = require("../models/paymentDetails");
const BookedSession = require("../models/bookedSession");
const User = require("../models/user");

const CLIENT_URL = process.env.HOST_URL;

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
      cancel_url: `${CLIENT_URL}?cancelled=true`,
      metadata: {
        userId: userId,
        sessionId: sessionId,
      },
    });

    //Redirect user to this url. It is a stripe url, payment page.
    res.json({ url: session.url });
  } catch (e) {
    console.log("error", e);
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
      `${process.env.STRIPE_WEBHOOK_SECRET}`
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
    res.status(200).redirect(process.env.HOST_URL);
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
