import mongoose from "mongoose";
import { db_USERNAME } from "../constants.js";

const connectDB = async() => {
    try {
      const connectionInstance =  await mongoose.connect(`${process.env.MONGO_URI}/${db_USERNAME}`)
      console.log(`\nMongo DB connected ${connectionInstance.connection.host}`  );
     
    } catch (error) {
        console.log("Mongo DB connection error", error);
        process.exit(1)
    }
}

export default connectDB
