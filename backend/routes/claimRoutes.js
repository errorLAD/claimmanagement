const express = require("express");
const { createClaim, getClaims, updateClaim } = require("../controllers/claimsController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/claims", protect, createClaim);
router.get("/claims", protect, getClaims);
router.put("/claims/:id", protect, updateClaim);

module.exports = router;
