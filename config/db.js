const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGODB_URI);

let db;

const connectDB = async () => {
  try {
    await client.connect();
    db = client.db("movieapp");
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("DB Error:", err.message);
    throw new Error("Failed to connect to MongoDB: " + err.message);
  }
};

const getDB = () => {
  if (!db) {
    throw new Error("Database not connected yet");
  }
  return db;
};

module.exports = { connectDB, getDB };
