const express = require("express");
const router = express.Router();

const axios = require("axios");
const xml2js = require("xml2js");

router.get("/f1/:year/:round/results", (req, res, next) => {
  axios
    .get(`http://ergast.com/api/f1/2022/1/results`)
    .then((response) => {
      const xmlData = response.data;
      xml2js.parseString(xmlData, (err, result) => {
        res.send(result);
      });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
