import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => 
      console.log("MongoDB connected successfully"));
     await mongoose.connect(`mongodb+srv://fmamo3375:mamofiraol123@cluster0.gjptmdl.mongodb.net/greencart`)
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

export default connectDB;

