const { connectDB } = require("../config/db");

const users = async () => {
  const db = await connectDB();
  return db.collection("users");
};

module.exports = users;
