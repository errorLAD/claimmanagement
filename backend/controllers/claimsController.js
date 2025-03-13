const Claim = require("../models/Claim");

exports.createClaim = async (req, res) => {
  const { name, email, amount, description, documentUrl } = req.body;
  const claim = new Claim({ name, email, amount, description, documentUrl });
  await claim.save();
  res.status(201).json(claim);
};

exports.getClaims = async (req, res) => {
  const claims = await Claim.find();
  res.json(claims);
};

exports.updateClaim = async (req, res) => {
  const { id } = req.params;
  const { status, approvedAmount, insurerComments } = req.body;
  
  const updatedClaim = await Claim.findByIdAndUpdate(id, { status, approvedAmount, insurerComments }, { new: true });
  res.json(updatedClaim);
};
