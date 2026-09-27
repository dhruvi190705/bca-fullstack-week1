// Week 9 - MongoDB and Mongoose
// QuickBite Online Food Ordering System

const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const Food = require("./models/Food");

const app = express();

const PORT = 5000;

// Connect MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to QuickBite Backend Server!");
});

// Existing Food Menu Data
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

// GET - Display existing food menu
app.get("/api/foods", (req, res) => {
  res.json(foods);
});

// POST - Add Food to MongoDB
app.post("/api/foods", async (req, res) => {
  try {
    const food = new Food(req.body);

    const savedFood = await food.save();

    res.status(201).json({
      message: "Food added successfully!",
      food: savedFood,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding food",
      error: error.message,
    });
  }
});

// GET - Get Foods from MongoDB
app.get("/api/foods/db", async (req, res) => {
  try {
    const foodsFromDB = await Food.find();

    res.json(foodsFromDB);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching food data",
      error: error.message,
    });
  }
});

// PUT - Update Food in MongoDB
app.put("/api/foods/:id", async (req, res) => {
  try {
    const updatedFood = await Food.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedFood) {
      return res.status(404).json({
        message: "Food not found",
      });
    }

    res.json({
      message: "Food updated successfully!",
      food: updatedFood,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating food",
      error: error.message,
    });
  }
});

// DELETE - Delete Food from MongoDB
app.delete("/api/foods/:id", async (req, res) => {
  try {
    const deletedFood = await Food.findByIdAndDelete(req.params.id);

    if (!deletedFood) {
      return res.status(404).json({
        message: "Food not found",
      });
    }

    res.json({
      message: "Food deleted successfully!",
      food: deletedFood,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting food",
      error: error.message,
    });
  }
});

// POST - Place a Food Order
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