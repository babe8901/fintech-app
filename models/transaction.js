const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: [true, "Please provide transaction code"],
    },
    from: {
      type: mongoose.Types.ObjectId,
      required: [true, "Please provide origin of transaction"],
    },
    to: {
      type: mongoose.Types.ObjectId,
      required: [true, "Please provide destination of transaction"],
    },
    amount: {
      type: mongoose.Decimal128,
      required: [true, "Please provide an amount for the transaction"],
    },
    convenience_fees: {
      type: mongoose.Decimal128,
      default: 0.0,
    },
    status: {
      type: Boolean,
      default: true,
    },
    comments: {
      type: String,
    },
    tags: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);
