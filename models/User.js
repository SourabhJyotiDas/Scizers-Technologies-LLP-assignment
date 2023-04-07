const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
   name: {
      type: String,
      required: [true, "Please enter a name"],
   },

   mobileNo: {
      type: String,
      required: [true, "Please enter your Number"],
      unique: [true, "Entered Number is already exists"],
   },

});

module.exports = mongoose.model("User", userSchema);