const express = require("express");
const bodyParser = require("body-parser");
const xml2js = require("xml2js");
const cors = require("cors");

const app = express();
const apiRoutes = require("./routes/apiRoutes");

app.use(bodyParser.json());
app.use(cors());

app.use("/api", apiRoutes);

app.listen(5000, () => {
  console.log("server run on port 5000");
});
