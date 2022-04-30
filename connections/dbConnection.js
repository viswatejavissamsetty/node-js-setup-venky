const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://viswa:Test123@cluster0.n6vlu.mongodb.net/practice-database?retryWrites=true&w=majority";

mongoose.connect(connectionString, (err) => {
  if (err) {
    console.log("Error connecting to database");
  } else {
    console.log("Connected to database");
  }
});
