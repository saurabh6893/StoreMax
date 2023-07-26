import mongoose from "mongoose";

const connectToDb = async () => {
  try {
    const conection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongose connected :${conection.connection.host}`);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

export default connectToDb;
