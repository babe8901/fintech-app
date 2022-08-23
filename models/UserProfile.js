const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema(
  {
    middle_name: {
      type: String,
    },
    DOB: {
      type: Date,
      required: [true, "Please provide aadhar id"],
    },
    gender: {
      type: String,
      enum: ["male", "female", "transgender", "Do not want to specify"],
      default: "Do not want to specify",
    },
    aadhar_id: {
      type: String,
      required: [true, "Please provide aadhar id"],
    },
    pan_id: {
      type: String,
      required: [true, "Please provide pan id"],
    },
    passport_id: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User Profile", userProfileSchema);
