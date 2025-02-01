const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample Route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Routes
const userRoutes = require("./routes/users");
app.use("/api/users", userRoutes);