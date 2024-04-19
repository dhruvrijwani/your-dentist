import mongoose from "mongoose";


export const dbConnection = () => {
  // Connect to MongoDB
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "",
    })
    .then(() => {
      console.log("Data Base Connection Successfully");
    })
    .catch((err) => {
      console.log("Failed to connect to MongoDB:", err);
    });
};
