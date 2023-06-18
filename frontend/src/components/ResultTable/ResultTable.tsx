import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Button,
  Skeleton,
} from "@mui/material";
import axios from "axios";
import dayjs from "dayjs";

export default function ResultTable() {
  const [loading, setLoading] = useState<boolean>(true);
  const [rowsRender, setRowRender] = useState<any[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);
  const [formState, setFormState] = useState<{ year: string; round: string }>({
    year: dayjs().year().toString(),
    round: "1",
  });
  const [data, setData] = useState<{
    raceName: string;
    date: string | number;
    circuit: any;
    year: string;
    round: string;
    dataRace: any[];
  }>({
    raceName: "",
    date: "",
    circuit: null,
    year: dayjs().year().toString(),
    round: "1",
    dataRace: [],
  });

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API + "apiT/f1/current/last/results")
      .then((response) => {
        console.log(response);
        const dataRes = response.data.MRData.RaceTable[0];
        if (dataRes.Race) {
          setData({
            raceName: dataRes.Race[0].RaceName[0],
            date: dataRes.Race[0].Date[0],
            circuit: {
              id: dataRes.Race[0].Circuit[0].$.circuitId,
              location: {
                country: dataRes.Race[0].Circuit[0].Location[0].Country[0],
                locality: dataRes.Race[0].Circuit[0].Location[0].Locality[0],
                lat: dataRes.Race[0].Circuit[0].Location[0].$.lat,
                long: dataRes.Race[0].Circuit[0].Location[0].$.long,
              },
            },
            year: dataRes.$.season,
            round: dataRes.$.round,
            dataRace: dataRes.Race[0].ResultsList[0].Result,
          });
          setFormState({ year: dataRes.$.season, round: dataRes.$.round });
          setLoading(false);
        } else {
          console.log("hi");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const rows: any[] = [];

    data.dataRace.forEach((el, index) => {
      function createData(
        pos: string,
        No: string,
        driverName: string,
        constructorName: string,
        laps: string,
        grid: string,
        time: string,
        status: string,
        points: string
      ) {
        return {
          pos,
          No,
          driverName,
          constructorName,
          laps,
          grid,
          time,
          status,
          points,
        };
      }

      rows.push(
        createData(
          el.$.position,
          el.$.number,
          el.Driver[0].GivenName[0] + " " + el.Driver[0].FamilyName[0],
          el.Constructor[0].Name[0],
          el.Laps[0],
          el.Grid[0],
          "time",
          el.Status[0]._,
          el.$.points
        )
      );
      setRowRender(rows);
    });
  }, [data]);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    axios
      .get(
        process.env.REACT_APP_API +
          `apiT/f1/${formState.year}/${formState.round}/results`
      )
      .then((response) => {
        const dataRes = response.data.MRData.RaceTable[0];
        setData({
          raceName: dataRes.Race[0].RaceName[0],
          date: dataRes.Race[0].Date[0],
          circuit: {
            id: dataRes.Race[0].Circuit[0].$.circuitId,
            location: {
              country: dataRes.Race[0].Circuit[0].Location[0].Country[0],
              locality: dataRes.Race[0].Circuit[0].Location[0].Locality[0],
              lat: dataRes.Race[0].Circuit[0].Location[0].$.lat,
              long: dataRes.Race[0].Circuit[0].Location[0].$.long,
            },
          },
          year: dataRes.$.season,
          round: dataRes.$.round,
          dataRace: dataRes.Race[0].ResultsList[0].Result,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box component={"div"} sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        fontFamily="fontRegular"
        fontSize="2rem"
        fontWeight={800}
        mb={3}
      >
        FORMULA 1 ROUND {data.round} SEASON {data.year}
      </Typography>
      <form
        style={{
          border: "1px solid #ddd",
          padding: "1rem",
          borderRadius: "0.5rem",
        }}
        onSubmit={handleSubmit}
      >
        <Box component="div" sx={{ minWidth: 120, display: "flex", mb: 1 }}>
          <FormControl sx={{ width: "50%", mr: 1 }}>
            <InputLabel id="demo-simple-select-label">Year</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formState.year}
              label="Year"
              onChange={(e) =>
                setFormState((b) => {
                  return { ...b, year: e.target.value };
                })
              }
            >
              <MenuItem value={"2020"}>2020</MenuItem>
              <MenuItem value={"2021"}>2021</MenuItem>
              <MenuItem value={"2022"}>2022</MenuItem>
              <MenuItem value={"2023"}>2023</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ width: "50%", ml: 1 }}>
            <InputLabel id="demo-simple-select-label">Round</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formState.round}
              label="Round"
              onChange={(e) =>
                setFormState((b) => {
                  return { ...b, round: e.target.value };
                })
              }
            >
              <MenuItem value={"1"}>1</MenuItem>
              <MenuItem value={"2"}>2</MenuItem>
              <MenuItem value={"3"}>3</MenuItem>
              <MenuItem value={"4"}>4</MenuItem>
              <MenuItem value={"5"}>5</MenuItem>
              <MenuItem value={"6"}>6</MenuItem>
              <MenuItem value={"7"}>7</MenuItem>
              <MenuItem value={"8"}>8</MenuItem>
              <MenuItem value={"9"}>9</MenuItem>
              <MenuItem value={"10"}>10</MenuItem>
              <MenuItem value={"11"}>11</MenuItem>
              <MenuItem value={"12"}>12</MenuItem>
              <MenuItem value={"13"}>13</MenuItem>
              <MenuItem value={"14"}>14</MenuItem>
              <MenuItem value={"15"}>15</MenuItem>
              <MenuItem value={"16"}>16</MenuItem>
              <MenuItem value={"17"}>17</MenuItem>
              <MenuItem value={"18"}>18</MenuItem>
              <MenuItem value={"19"}>19</MenuItem>
              <MenuItem value={"20"}>20</MenuItem>
              <MenuItem value={"21"}>21</MenuItem>
              <MenuItem value={"22"}>22</MenuItem>
              <MenuItem value={"23"}>23</MenuItem>
              <MenuItem value={"24"}>24</MenuItem>
              <MenuItem value={"25"}>25</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button
          type="submit"
          variant="contained"
          sx={{
            width: "100%",
            backgroundColor: "#25252d",
            border: "2px solid #25252d",
            transition: "border 0.5s",
            "&:hover": {
              borderBottomColor: "#e10600",
              borderRightColor: "#e10600",
              backgroundColor: "#25252d",
            },
          }}
        >
          Submit
        </Button>
      </form>
      {loading ? (
        <Skeleton animation="wave" sx={{ alignSelf: "center" }}>
          <Typography
            textAlign="center"
            fontWeight={600}
            fontSize="1.2rem"
            mt={5}
            fontFamily="fontRegular"
          >
            edfgsdgdgsdgdsfgggggddg
          </Typography>
        </Skeleton>
      ) : (
        <Typography
          textAlign="center"
          fontWeight={600}
          fontSize="1.2rem"
          mt={5}
          fontFamily="fontRegular"
        >
          {data.raceName}
        </Typography>
      )}
      {loading ? (
        <Skeleton animation="wave" sx={{ alignSelf: "flex-end" }}>
          <Typography textAlign="right" fontFamily="fontRegular">
            <strong>Date: </strong>
            04-06-2023
          </Typography>
        </Skeleton>
      ) : (
        <Typography textAlign="right" fontFamily="fontRegular">
          <strong>Date: </strong>
          {dayjs(data.date).format("DD-MM-YYYY")}
        </Typography>
      )}
      <TableContainer component={Paper} sx={{ mt: 2, mb: 5 }}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: 50, fontFamily: "fontRegular" }}>
                {loading ? <Skeleton animation="wave" /> : "Pos"}
              </TableCell>
              <TableCell align="right" sx={{ fontFamily: "fontRegular" }}>
                {loading ? <Skeleton animation="wave" /> : "No"}
              </TableCell>
              <TableCell align="right" sx={{ fontFamily: "fontRegular" }}>
                {loading ? <Skeleton animation="wave" /> : "Driver Name"}
              </TableCell>
              <TableCell align="right" sx={{ fontFamily: "fontRegular" }}>
                {loading ? <Skeleton animation="wave" /> : "Constructor"}
              </TableCell>
              <TableCell align="right" sx={{ fontFamily: "fontRegular" }}>
                {loading ? <Skeleton animation="wave" /> : "Laps"}
              </TableCell>
              <TableCell align="right" sx={{ fontFamily: "fontRegular" }}>
                {loading ? <Skeleton animation="wave" /> : "Grid"}
              </TableCell>
              <TableCell align="right" sx={{ fontFamily: "fontRegular" }}>
                {loading ? <Skeleton animation="wave" /> : "Time"}
              </TableCell>
              <TableCell align="right" sx={{ fontFamily: "fontRegular" }}>
                {loading ? <Skeleton animation="wave" /> : "Status"}
              </TableCell>
              <TableCell align="right" sx={{ fontFamily: "fontRegular" }}>
                {loading ? <Skeleton animation="wave" /> : "Points"}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsRender &&
              rowsRender.map((row, index) => {
                const constructor = row.constructorName;
                return (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ fontFamily: "fontRegular", textAlign: "center" }}
                    >
                      {loading ? <Skeleton animation="wave" /> : row.pos}
                    </TableCell>
                    <TableCell align="right" sx={{ fontFamily: "fontRegular" }}>
                      {loading ? <Skeleton animation="wave" /> : row.No}
                    </TableCell>
                    <TableCell align="right" sx={{ fontFamily: "fontRegular" }}>
                      {loading ? <Skeleton animation="wave" /> : row.driverName}
                    </TableCell>
                    <TableCell align="right" sx={{ fontFamily: "fontRegular" }}>
                      {loading ? <Skeleton animation="wave" /> : constructor}
                    </TableCell>
                    <TableCell align="right" sx={{ fontFamily: "fontRegular" }}>
                      {loading ? <Skeleton animation="wave" /> : row.laps}
                    </TableCell>
                    <TableCell align="right" sx={{ fontFamily: "fontRegular" }}>
                      {loading ? <Skeleton animation="wave" /> : row.grid}
                    </TableCell>
                    <TableCell align="right" sx={{ fontFamily: "fontRegular" }}>
                      {loading ? <Skeleton animation="wave" /> : row.time}
                    </TableCell>
                    <TableCell align="right" sx={{ fontFamily: "fontRegular" }}>
                      {loading ? <Skeleton animation="wave" /> : row.status}
                    </TableCell>
                    <TableCell align="right" sx={{ fontFamily: "fontRegular" }}>
                      {loading ? <Skeleton animation="wave" /> : row.points}
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
