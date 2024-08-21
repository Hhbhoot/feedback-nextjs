import mongoose from "mongoose";

type connectionObject = {
  isConnected?: number;
};

const connecton: connectionObject = {};

async function dbConnect(): Promise<void> {
  if (connecton.isConnected) {
  console.log("Already Connected to database");
    return;
  }
   
  try {

    const db = await mongoose.connect(process.env.MONGODB_URI || "",{});
    connecton.isConnected = db.connections[0].readyState;
    console.log("Connected to MongoDB");
  }
  catch(error){
    console.error(`Error connecting to MongoDB`, error);
    process.exit(1);
  }

}

export default dbConnect;