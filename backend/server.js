const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

const authRoutes = require("./routes/authRoutes");
const claimRoutes = require("./routes/claimRoutes");

app.use("/api/auth", authRoutes);
app.use("/api", claimRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
