const express = require("express");
const cors = require("cors");
const languageRoutes = require("./routes/languages.route");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/languages", languageRoutes);

// Base route
app.get("/", (req, res) => {
  res.json({ message: "Indian Languages API is running 🚀" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});