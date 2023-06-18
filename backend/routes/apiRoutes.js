const express = require("express");
const router = express.Router();

const axios = require("axios");
const xml2js = require("xml2js");

router.get(`/test`, (req, res, next) => {
  axios
    .get(`http://ergast.com/api/f1/drivers?=123&limit=40&offset=0`)
    .then((response) => {
      const xmlData = response.data;
      xml2js.parseString(xmlData, (err, result) => {
        res.send(result);
      });
    })
    .catch((err) => console.log(err));
});

// Drivers API
// List of all drivers
router.get("/f1/drivers", (req, res, next) => {
  axios
    .get(`http://ergast.com/api/f1/drivers`)
    .then((response) => {
      const xmlData = response.data;
      xml2js.parseString(xmlData, (err, result) => {
        res.send(result);
      });
    })
    .catch((err) => console.log(err));
});
// List of all drivers within a year
router.get("/f1/:year/drivers", (req, res, next) => {
  const year = req.params.year;
  axios
    .get(`http://ergast.com/api/f1/${year}/drivers`)
    .then((response) => {
      const xmlData = response.data;
      xml2js.parseString(xmlData, (err, result) => {
        res.send(result);
      });
    })
    .catch((err) => console.log(err));
});
// List of all drivers within a race in a year
router.get("/f1/:year/:round/drivers", (req, res, next) => {
  const year = req.params.year;
  const round = req.params.round;
  axios
    .get(`http://ergast.com/api/f1/${year}/${round}/drivers`)
    .then((response) => {
      const xmlData = response.data;
      xml2js.parseString(xmlData, (err, result) => {
        res.send(result);
      });
    })
    .catch((err) => console.log(err));
});
// Drivers information
router.get("/f1/drivers/:driverid", (req, res, next) => {
  const driverid = req.params.driverid;
  axios
    .get(`http://ergast.com/api/f1/drivers/${driverid}`)
    .then((response) => {
      const xmlData = response.data;
      xml2js.parseString(xmlData, (err, result) => {
        res.send(result);
      });
    })
    .catch((err) => console.log(err));
});

// Constructors API
// List of all contructors
router.get("/f1/constructors", (req, res, next) => {
  axios
    .get(`http://ergast.com/api/f1/constructors`)
    .then((response) => {
      const xmlData = response.data;
      xml2js.parseString(xmlData, (err, result) => {
        res.send(result);
      });
    })
    .catch((err) => console.log(err));
});
// List of all contructors within year
router.get("/f1/:year/constructors", (req, res, next) => {
  const year = req.params.year;
  axios
    .get(`http://ergast.com/api/f1/${year}/constructors`)
    .then((response) => {
      const xmlData = response.data;
      xml2js.parseString(xmlData, (err, result) => {
        res.send(result);
      });
    })
    .catch((err) => console.log(err));
});
// List of all contructors within a race in a year
router.get("/f1/:year/:round/constructors", (req, res, next) => {
  const year = req.params.year;
  const round = req.params.round;
  axios
    .get(`http://ergast.com/api/f1/${year}/${round}/constructors`)
    .then((response) => {
      const xmlData = response.data;
      xml2js.parseString(xmlData, (err, result) => {
        res.send(result);
      });
    })
    .catch((err) => console.log(err));
});
// Contructors information
router.get("/f1/constructors/:constructorid", (req, res, next) => {
  const constructorid = req.params.constructorid;
  axios
    .get(`http://ergast.com/api/f1/constructors/${constructorid}`)
    .then((response) => {
      const xmlData = response.data;
      xml2js.parseString(xmlData, (err, result) => {
        res.send(result);
      });
    })
    .catch((err) => console.log(err));
});

// Circuits API
// List of all Circuits
router.get("/f1/circuits", (req, res, next) => {
  axios
    .get(`http://ergast.com/api/f1/circuits.json`)
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => console.log(err));
});
// List of all circuits within year
router.get("/f1/:year/circuits", (req, res, next) => {
  const year = req.params.year;
  axios
    .get(`http://ergast.com/api/f1/${year}/circuits`)
    .then((response) => {
      const xmlData = response.data;
      xml2js.parseString(xmlData, (err, result) => {
        res.send(result);
      });
    })
    .catch((err) => console.log(err));
});
// List of all circuits within a race in a year
router.get("/f1/:year/:round/circuits", (req, res, next) => {
  const year = req.params.year;
  const round = req.params.round;
  axios
    .get(`http://ergast.com/api/f1/${year}/${round}/circuits`)
    .then((response) => {
      const xmlData = response.data;
      xml2js.parseString(xmlData, (err, result) => {
        res.send(result);
      });
    })
    .catch((err) => console.log(err));
});
// Contructors information
router.get("/f1/circuits/:circuitid", (req, res, next) => {
  const constructorid = req.params.constructorid;
  axios
    .get(`http://ergast.com/api/f1/circuits/${constructorid}`)
    .then((response) => {
      const xmlData = response.data;
      xml2js.parseString(xmlData, (err, result) => {
        res.send(result);
      });
    })
    .catch((err) => console.log(err));
});

// Seasons API
router.get("/f1/seasons", (req, res, next) => {
  axios
    .get(`http://ergast.com/api/f1/seasons`)
    .then((response) => {
      const xmlData = response.data;
      xml2js.parseString(xmlData, (err, result) => {
        res.send(result);
      });
    })
    .catch((err) => console.log(err));
});

// Results Race API
// Race result
router.get(`/f1/:year/:round/results`, (req, res, next) => {
  const year = req.params.year;
  const round = req.params.round;
  axios
    .get(`http://ergast.com/api/f1/${year}/${round}/results`)
    .then((response) => {
      const xmlData = response.data;
      xml2js.parseString(xmlData, (err, result) => {
        res.send(result);
      });
    })
    .catch((err) => console.log(err));
});
// Most recent race result
router.get(`/f1/current/last/results`, (req, res, next) => {
  axios
    .get(`http://ergast.com/api/f1/current/last/results`)
    .then((response) => {
      const xmlData = response.data;
      xml2js.parseString(xmlData, (err, result) => {
        res.send(result);
      });
    })
    .catch((err) => res.status(500).send(err));
});

// qualifying API
router.get("/f1/:year/:round/qualifying", (req, res, next) => {
  const year = req.params.year;
  const round = req.params.round;
  axios
    .get(`http://ergast.com/api/f1/${year}/${round}/qualifying`)
    .then((response) => {
      const xmlData = response.data;
      xml2js.parseString(xmlData, (err, result) => {
        res.send(result);
      });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
