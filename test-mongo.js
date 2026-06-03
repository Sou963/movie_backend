const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://souravbosu844_db_user:6ovZZ4y8WwMTIYXd@cluster003.gpl6v8i.mongodb.net/movieapp?retryWrites=true&w=majority";

async function test() {
  const client = new MongoClient(uri, { 
    serverSelectionTimeoutMS: 5000,
    connectTimeoutMS: 10000 
  });
  
  try {
    console.log("Attempting to connect...");
    await client.connect();
    console.log("✓ Connected successfully!");
    
    const db = client.db("movieapp");
    const collections = await db.listCollections().toArray();
    console.log("Collections:", collections.map(c => c.name));
  } catch (err) {
    console.error("✗ Connection failed:", err.message);
    console.error("Error code:", err.code);
  } finally {
    await client.close();
  }
}

test();
