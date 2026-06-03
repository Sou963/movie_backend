const { MongoClient } = require("mongodb");

// Try standard connection format instead of SRV
const uri = "mongodb://souravbosu844_db_user:6ovZZ4y8WwMTIYXd@cluster003-shard-00-00.gpl6v8i.mongodb.net:27017,cluster003-shard-00-01.gpl6v8i.mongodb.net:27017,cluster003-shard-00-02.gpl6v8i.mongodb.net:27017/movieapp?ssl=true&replicaSet=atlas-r0gzul-shard-0&authSource=admin&retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverSelectionTimeoutMS: 10000,
  connectTimeoutMS: 10000
});

async function test() {
  try {
    console.log("Testing standard connection format...");
    await client.connect();
    console.log("✓ Connected successfully!");
  } catch (err) {
    console.error("✗ Still failed:", err.message);
  } finally {
    await client.close();
  }
}

test();
