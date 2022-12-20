import { MongoClient } from "mongodb";
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "nodejs_backend_tut";

async function connect() {
  await client.connect();
  console.log("Connected successfully to db");
  const db = await client.db(dbName);
  return db;
}

export default connect;
