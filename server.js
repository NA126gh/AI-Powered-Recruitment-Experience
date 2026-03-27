const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Dummy database (in-memory)
let candidates = [];

// Save profile
app.post("/api/save-profile", (req, res) => {
  const profile = req.body;
  candidates.push(profile);
  res.json({ message: "Profile saved successfully" });
});

// Get all candidates
app.get("/api/candidates", (req, res) => {
  res.json(candidates);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});