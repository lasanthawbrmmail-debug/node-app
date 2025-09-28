const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// simple route
app.get("/", (req, res) => {
  res.send("<h1>Hello Azure!</h1><p>This is my simple Node.js app.</p>");
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
