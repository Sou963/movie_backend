const express = require("express");
const cors = require("cors");
const path = require("path");

const { connectDB } = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// connect DB only once
connectDB();

// routes
app.use("/api/auth", authRoutes);

//test routes
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "reg.html"));
});

app.get("/", (req, res) => {
  res.json({ message: "API running on Vercel 🚀" });
});

module.exports = app;
