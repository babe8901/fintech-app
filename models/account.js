const mongoose = require("mongoose");

const accountSchema = mongoose.Schema(
  {
    number: {
      type: String,
      required: [true, "PLease provide an account number"],
    },
    type: {
      type: String,
      enum: ["savings", "current", "loan", "overdraft"],
      required: [true, "Please provide an account type"],
    },
    user: {
      type: String,
      required: [true, "Please provide an account user"],
    },
    balance: {
      type: mongoose.Decimal128,
      default: 0.0,
    },
    debit_cards: {
      type: [mongoose.Types.ObjectId],
    },
    status: {
      type: Boolean,
      default: true,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Account", accountSchema);
