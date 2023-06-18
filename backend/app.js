const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const apiRoutes = require("./routes/apiRoutes");
const api = require("./routes/api");

app.use(bodyParser.json());
app.use(cors());

app.use("/api", api);
app.use("/apiT", apiRoutes);

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.jyxohlo.mongodb.net/${process.env.MONGO_DATABASE}`
  )
  .then(() => {
    app.listen(5000, (err) => {
      if (err) {
        throw err;
      }
      console.log("> Ready on http://localhost:5000");
    });
    console.log("Conected Database by MongoDB " + process.env.MONGO_USER);
  });
