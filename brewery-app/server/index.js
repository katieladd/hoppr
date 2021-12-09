require("dotenv/config");
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const {getByCity, getById} = require("../routes/breweries")

const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");

mongoose.connection.on("error", (err) => console.log(err.message));
mongoose.connection.on("open", () => console.log("connected to mongo server"));

mongoose.connect(
  process.env.DB_CONNECTION,
  {useUnifiedTopology: true, useNewUrlParser: true},
() => {
  console.log("connected to database")
});
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

app.route("/brewery?:id")
  .get(getById)

app.route("/breweries/city?:by_city")
  .get(getByCity);

// app.get("*", (req, res) => {
//    res.sendFile(path.join(__dirname, "../build"));
// });

app.listen(port, () => {
   console.log(`Server is up on port ${port}`);
});