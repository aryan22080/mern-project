const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// ✅ Routes
app.use("/api/users", require("./routes/user.js"));  // User routes
app.use("/api/items", require("./routes/item.js"));  // Item routes
app.use("/api/bids", require("./routes/bid.js"));    // Bid routes

// ✅ Test Route
app.get("/", (req, res) => res.send("Server running"));

// ✅ Start Server
app.listen(5000, () => console.log("Server running on port 5000"));
