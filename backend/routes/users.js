const express = require("express");
const router = express.Router();
const db = require("../config/db");

// Get All Users
router.get("/", async (req, res) => {
  try {
    const [users] = await db.query("SELECT * FROM users");
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
