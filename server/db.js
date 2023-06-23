// Import modules
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

// Connection
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DB, {});
    }catch(err){
        console.log(`Error: DB connection - ${err}`);
    }
}

// Export
export default connectDB