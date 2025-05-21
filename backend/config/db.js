import mongoose from "mongoose";
export const connectDB = async () => {
    console.log("Connecting to MongoDB with URI:", process.env.MONGO_URI);
    if (!process.env.MONGO_URI) {
        console.error("MONGO_URI is undefined! Check your .env file and dotenv.config()");
        process.exit(1);
    }
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
};