
import express from "express";
import Stripe from "stripe";
import prices from "../data/prices.js";

const router = express.Router();

router.post("/create-session", async (req, res) => {
  try {
    const { items } = req.body;

    if (!Array.isArray(items) || items.length === 0 || items.length > 20) {
      return res.status(400).json({ message: "Cart is empty or invalid" });
    }

     const lineItems = [];

    for (const item of items) {
      const product = prices[item.id];
      const quantity = Number(item.quantity);

      if (!product) {
        return res.status(400).json({ message: "Unknown product in cart" });
      }
      if (!Number.isInteger(quantity) || quantity < 1 || quantity > 10) {
        return res.status(400).json({ message: "Invalid quantity" });
      }

      lineItems.push({
        quantity,
        price_data: {
          currency: "lkr",
          unit_amount: product.price * 100,
          product_data: { name: product.name },
        },
      });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    });

     res.json({ url: session.url });
  } catch (error) {
    console.error("Stripe session error:", error.message);
    res.status(500).json({ message: "Could not start checkout. Please try again." });
  }
});

export default router;