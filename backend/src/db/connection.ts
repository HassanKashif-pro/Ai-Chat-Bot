import { connect, disconnect } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function connectToDatabase() {
  try {
    await connect(process.env.MONGODB_URL);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw new Error("Could not connect to MongoDB");
  }
}

async function disconnectFromDatabase() {
  try {
    await disconnect();
    console.log("Successfully disconnected from MongoDB");
  } catch (error) {
    console.error("Error disconnecting from MongoDB:", error.message);
    throw new Error("Could not disconnect from MongoDB");
  }
}

export { connectToDatabase, disconnectFromDatabase };
