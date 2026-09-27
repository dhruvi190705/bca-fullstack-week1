// Week 10 - REST API Development
// QuickBite - Online Food Ordering System

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


// ==========================================
// HOME ROUTE
// ==========================================

app.get("/", (req, res) => {
  res.send("Welcome to QuickBite REST API Server!");
});


// ==========================================
// EXISTING FOOD MENU
// ==========================================

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


// ==========================================
// GET - EXISTING FOOD MENU
// ==========================================

app.get("/api/foods", (req, res) => {
  res.status(200).json(foods);
});


// ==========================================
// REST API - GET ALL FOODS FROM MONGODB
// ==========================================

app.get("/api/rest/foods", async (req, res) => {
  try {
    const foodsFromDB = await Food.find();

    res.status(200).json({
      success: true,
      count: foodsFromDB.length,
      foods: foodsFromDB,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching foods",
      error: error.message,
    });
  }
});


// ==========================================
// REST API - GET FOOD BY ID
// ==========================================

app.get("/api/rest/foods/:id", async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);

    if (!food) {
      return res.status(404).json({
        success: false,
        message: "Food not found",
      });
    }

    res.status(200).json({
      success: true,
      food: food,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching food",
      error: error.message,
    });
  }
});


// ==========================================
// REST API - POST / CREATE FOOD
// ==========================================

app.post("/api/rest/foods", async (req, res) => {
  try {
    const { name, price, category } = req.body;

    if (!name || price === undefined || !category) {
      return res.status(400).json({
        success: false,
        message: "Name, price and category are required",
      });
    }

    const food = new Food({
      name: name,
      price: price,
      category: category,
    });

    const savedFood = await food.save();

    res.status(201).json({
      success: true,
      message: "Food added successfully!",
      food: savedFood,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error adding food",
      error: error.message,
    });
  }
});


// ==========================================
// REST API - PUT / UPDATE FOOD
// ==========================================

app.put("/api/rest/foods/:id", async (req, res) => {
  try {
    const updatedFood = await Food.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedFood) {
      return res.status(404).json({
        success: false,
        message: "Food not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Food updated successfully!",
      food: updatedFood,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating food",
      error: error.message,
    });
  }
});


// ==========================================
// REST API - DELETE FOOD
// ==========================================

app.delete("/api/rest/foods/:id", async (req, res) => {
  try {
    const deletedFood = await Food.findByIdAndDelete(req.params.id);

    if (!deletedFood) {
      return res.status(404).json({
        success: false,
        message: "Food not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Food deleted successfully!",
      food: deletedFood,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting food",
      error: error.message,
    });
  }
});


// ==========================================
// OLD POST - ADD FOOD
// ==========================================

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


// ==========================================
// OLD GET - MONGODB FOODS
// ==========================================

app.get("/api/foods/db", async (req, res) => {
  try {
    const foodsFromDB = await Food.find();

    res.status(200).json(foodsFromDB);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching food data",
      error: error.message,
    });
  }
});


// ==========================================
// OLD PUT - UPDATE FOOD
// ==========================================

app.put("/api/foods/:id", async (req, res) => {
  try {
    const updatedFood = await Food.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedFood) {
      return res.status(404).json({
        message: "Food not found",
      });
    }

    res.status(200).json({
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


// ==========================================
// OLD DELETE - DELETE FOOD
// ==========================================

app.delete("/api/foods/:id", async (req, res) => {
  try {
    const deletedFood = await Food.findByIdAndDelete(req.params.id);

    if (!deletedFood) {
      return res.status(404).json({
        message: "Food not found",
      });
    }

    res.status(200).json({
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


// ==========================================
// ORDER API
// ==========================================

app.post("/api/orders", (req, res) => {
  const order = req.body;

  if (
    !order ||
    !Array.isArray(order.items) ||
    order.items.length === 0
  ) {
    return res.status(400).json({
      message: "Please add food items to your order.",
    });
  }

  res.status(201).json({
    message: "Order received successfully!",
    order: order,
  });
});


// ==========================================
// START SERVER
// ==========================================

app.listen(PORT, () => {
  console.log(
    `QuickBite REST API server is running on http://localhost:${PORT}`
  );
});