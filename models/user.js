const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "Please provide first name"],
      maxlength: 20,
    },
    last_name: {
      type: String,
      required: [true, "Please provide last name"],
      maxlength: 20,
    },
    mobile_no: {
      type: String,
      required: [true, "Please provide mobile number"],
      match: [
        "^(+91[-s]?)?[0]?(91)?[789]d{9}$",
        "Please provide valid mobile number",
      ],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please provide email id"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "PLease provide valid email",
      ],
      unique: true,
    },
    user_profile_ref: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      // required: [true, "Please provide the user profile reference"],
    },
    password: {
      type: String,
      required: [true, "Please provide password"],
    },
    accounts: {
      type: [mongoose.Types.ObjectId],
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.createJWT = function () {
  return jwt.sign({ userId: this.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_LIFETIME,
  });
};

userSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

module.exports = mongoose.model("User", userSchema);
