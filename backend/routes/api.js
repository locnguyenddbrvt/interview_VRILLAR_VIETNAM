const express = require("express");
const router = express.Router();

const axios = require("axios");

const DriverTop = require("../models/DriverTop");
const Team = require("../models/Team");
const Driver = require("../models/Driver");

// test
router.get("/test", async (req, res, next) => {
  axios.get();
  res.end();
});

// get Top 20 drivers Ranking
router.get("/:year/top-20-driver", async (req, res, next) => {
  const year = req.params.year;
  try {
    const driverTop = await DriverTop.findOne({ year: year }).populate([
      "data.driver",
      "data.team",
    ]);
    if (!driverTop) {
      const options = {
        method: "GET",
        url: "https://api-formula-1.p.rapidapi.com/rankings/drivers",
        params: { season: year },
        headers: {
          "X-RapidAPI-Key": process.env.RAPID_API_KEY,
          "X-RapidAPI-Host": "api-formula-1.p.rapidapi.com",
        },
      };
      const response = await axios.request(options);
      const data = response.data.response;

      const dataNewDriverTop = [];
      for (let i = 0; i < data.length; i++) {
        console.log(i);
        const el = data[i];
        const team = await Team.findOne({ id: el.team.id });
        const driver = await Driver.findOne({ id: el.driver.id });
        if (!driver) {
          const optionss = {
            method: "GET",
            url: "https://api-formula-1.p.rapidapi.com/drivers",
            params: { id: el.driver.id },
            headers: {
              "X-RapidAPI-Key": process.env.RAPID_API_KEY,
              "X-RapidAPI-Host": "api-formula-1.p.rapidapi.com",
            },
          };
          const responseDriver = await axios.request(optionss);
          const driverData = responseDriver.data.response[0];
          const teamsOfDriver = [];
          for (let i = 0; i < driverData.teams.length; i++) {
            const teamResultFound = await Team.findOne({
              id: driverData.teams[i].team.id,
            });
            const teamEachSeason = {
              season: driverData.teams[i].season,
              team: teamResultFound._id,
            };
            teamsOfDriver.push(teamEachSeason);
          }
          const newDriver = new Driver({
            ...driverData,
            teams: teamsOfDriver,
          });
          const resultDriverSave = await newDriver.save();
          // console.log(100, resultDriverSave);
          dataNewDriverTop.push({
            position: el.position,
            driver: resultDriverSave._id,
            team: team._id,
          });
        } else {
          dataNewDriverTop.push({
            position: el.position,
            driver: driver._id,
            team: team._id,
          });
        }
      }

      const newTopDriver = new DriverTop({
        year: year,
        data: dataNewDriverTop,
      });
      const result = await newTopDriver.save();
      res.send(result);
    } else {
      res.send(driverTop);
    }
  } catch (err) {
    console.log(err);
    if (err.status === 429) {
      res.status(429).json({ message: "Sever quá tải,try again", err: err });
    } else {
      res.status(500).json(err);
    }
  }
});

// get driver detail by id
router.get("/:driverid/:driverId/driver", async (req, res, next) => {
  try {
    const driverid = req.params.driverid;
    const driverId = req.params.driverId;
    const driverResult = await Driver.findById(driverid)
      .populate(["teams.team"])
      .exec();
    if (driverResult) {
      res.send(driverResult);
    } else {
      // send request
      console.log("Not fount driver in database");
      const optionss = {
        method: "GET",
        url: "https://api-formula-1.p.rapidapi.com/drivers",
        params: { id: driverId },
        headers: {
          "X-RapidAPI-Key": process.env.RAPID_API_KEY,
          "X-RapidAPI-Host": "api-formula-1.p.rapidapi.com",
        },
      };
      const responseDriver = await axios.request(optionss);
      const data = responseDriver.data.response;
      const newDriver = new Driver(data);
      const driverDataSend = await newDriver.save();

      res.send(driverDataSend);
    }
    res.end();
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// data chartResult
router.get("/:year/chart-result/all-year", async (req, res, next) => {
  try {
    const year = req.params.year;
    console.log(year);
    const promiseArr = [];
    promiseArr.push(
      axios.get(`https://ergast.com/api/f1/${year}/drivers.json`)
    );
    for (let i = 1; i <= 20; i++) {
      promiseArr.push(
        axios.get(`http://ergast.com/api/f1/${year}/${i}/results.json`)
      );
    }
    const resultRes = await Promise.all(promiseArr);
    const driverId = resultRes[0].data.MRData.DriverTable.Drivers.map(
      (el, ind) => {
        return { id: el.driverId, name: el.givenName + " " + el.familyName };
      }
    );
    console.log(161, "driverId", driverId);
    const dataEachRound = [];
    resultRes.forEach((el, ind) => {
      if (ind !== 0) {
        if (el.data.MRData.RaceTable.Races[0]) {
          const round = el.data.MRData.RaceTable.Races[0].Results.map(
            (element) => {
              return {
                driverId: element.Driver.driverId,
                driverName:
                  element.Driver.givenName + " " + element.Driver.familyName,
                points: element.points,
              };
            }
          );
          dataEachRound.push({ round: ind.toString(), data: round });
        } else {
          const round = resultRes[1].data.MRData.RaceTable.Races[0].Results.map(
            (element) => {
              return {
                driverId: element.Driver.driverId,
                driverName:
                  element.Driver.givenName + " " + element.Driver.familyName,
                points: "0",
              };
            }
          );
          dataEachRound.push({ round: ind.toString(), data: round });
        }
      }
    });
    console.log(196, "dataEachRound", dataEachRound[0]);
    const resultSend = driverId.map((driver, ind) => {
      const dataPoint = dataEachRound.map((el, index) => {
        // console.log(el.data.find((data) => data.driverId === id));
        return {
          round: el.round,
          point: el.data.find((data) => data.driverId === driver.id).points,
        };
      });
      return {
        driverId: driver.id,
        driverName: driver.name,
        data: dataPoint,
      };
    });
    res.send(resultSend);
  } catch (err) {
    console.log(err);
    res.status(400);
  }
});

// get team ranking
router.get("/team-ranking", async (req, res, next) => {
  const TeamData = await Team.find();
  res.send(TeamData);
});

module.exports = router;
