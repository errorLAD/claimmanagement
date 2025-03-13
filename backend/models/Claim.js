const mongoose = require("mongoose");

const ClaimSchema = new mongoose.Schema({
  name: String,
  email: String,
  amount: Number,
  description: String,
  status: { type: String, default: "Pending" },
  submissionDate: { type: Date, default: Date.now },
  approvedAmount: Number,
  insurerComments: String,
  documentUrl: String,
});

module.exports = mongoose.model("Claim", ClaimSchema);