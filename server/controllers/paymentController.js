const stripe = require('stripe')(process.env.STRIPE_SECRET)
const express = require('express')
const app = express();

const CLIENT_URL = process.env.CLIENT_URL
// Find your endpoint's secret in your Dashboard's webhook settings, populate using .env
const endpointSecret = 'whsec_15c5365887cc04b3f75bf532f7791fa9399153909601716bfe8cdb32bb0cf94a';

const fulfillOrder = (lineItems) => {
    // TODO: fill me in
    console.log("Fulfilling order", lineItems);
    console.log('--------')
}

exports.paymentSession = async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: [
                {
                    //Price Id can be retrived from products page, a single product will have a unique priceId
                    price: req.body.price_id ?? 'price_1NtwGWSFygNTJvTO4irLPEiE',
                    quantity: 1,
                }
            ],
            // On success, redirect to:
            success_url: `${CLIENT_URL}?success=true`,
            // On failure, redirect to:
            cancel_url: `${CLIENT_URL}?canceled=true`,
        });

        //Redirect user to this url. It is a stripe url, payment page.
        res.json({ url: session.url });
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
};

exports.paymentCompleted = async (req, res) => {
    const payload = req.body;
    console.log('payload', JSON.stringify(payload))
    console.log('----------------------------')
    const sig = req.headers['stripe-signature']

    // let event;
    // try {
    //     event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    // } catch (err) {
    //     console.error(err);
    //     return res.status(400).send(`Webhook Error: ${err.message}`)
    // }

    if (payload.type === 'checkout.session.completed') {
        // const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
        //     payload.data.object.id,
        //     {
        //         expand: ['line-items']
        //     }
        // );
        // const lineItems = sessionWithLineItems.line_items;
        console.log("Success!!!!");
    }

}