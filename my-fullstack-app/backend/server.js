const cors = require("cors");
// Week 8 - Express.js Backend
// QuickBite Online Food Ordering System

const express = require("express");

const app = express();
app.use(cors());

const PORT = 5000;

// Middleware to read JSON data
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to QuickBite Backend Server!");
});

// Food Menu Data
const foods = [
  {
    id: 1,
    name: "Cheese Burger",
    price: 120,
    category: "Burger",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    price: 250,
    category: "Pizza",
  },
  {
    id: 3,
    name: "Veg Sandwich",
    price: 100,
    category: "Sandwich",
  },
  {
    id: 4,
    name: "French Fries",
    price: 80,
    category: "Snacks",
  },
  {
    id: 5,
    name: "Cold Coffee",
    price: 90,
    category: "Drinks",
  },
];

// GET Route - Display Food Menu
app.get("/api/foods", (req, res) => {
  res.json(foods);
});

// POST Route - Place a Food Order
app.post("/api/orders", (req, res) => {
  const order = req.body;

  if (!order || !Array.isArray(order.items) || order.items.length === 0) {
    return res.status(400).json({
      message: "Please add food items to your order.",
    });
  }

  res.status(201).json({
    message: "Order received successfully!",
    order: order,
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`QuickBite server is running on http://localhost:${PORT}`);
});