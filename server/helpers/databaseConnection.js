const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
const db = process.env.MONGODB_URL;

const DBConnect = async () => {
  try {
    await mongoose.connect(db);
    console.log("Database connected!");
  } catch (err) {
    console.log("Error connecting to MongoDB:", err);
  }
};

module.exports = DBConnect;
