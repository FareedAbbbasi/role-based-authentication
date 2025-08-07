import mongoose from "mongoose";

const ConnectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/rolebasedauth");
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1); // Exit with failure
    }
};

export default ConnectDB;
