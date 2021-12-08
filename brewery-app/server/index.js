const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/brewery", (req, res) => {
  res.json({message: "Howdy from the server :D"})
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});