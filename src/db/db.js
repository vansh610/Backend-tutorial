import mongoose from "mongoose";

const connectDB = async () => {
    try {

        const connectionInstance = await mongoose.connect(
            "mongodb://127.0.0.1:27017/videotube"
        );

        console.log(`✅ MongoDB Connected: ${connectionInstance.connection.host}`);

    } catch (error) {

        console.log("❌ MongoDB Error:", error);

        process.exit(1);
    }
};

export default connectDB;