const express = require("express");
const cors = require("cors");
const { connectDB } = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

// CORS configuration for Vercel
// app.use(
//   cors({
//     origin: ["https://moviesite.vercel.app", "http://localhost:3000"],
//     credentials: true,
//   })
// );
app.use(express.json());

// THIS FIX IS IMPORTANT FOR VERCEL
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.error("DB connection failed:", err);
    res.status(500).json({
      success: false,
      error: "Database connection failed",
      message: err.message,
    });
  }
});

app.use("/api/auth", authRoutes);

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "Backend is running" });
});

module.exports = app;
