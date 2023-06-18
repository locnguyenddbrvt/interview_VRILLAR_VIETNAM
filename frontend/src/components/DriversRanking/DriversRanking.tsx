import {
  Typography,
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import axios from "axios";

export default function DriversRanking() {
  const navigate = useNavigate();
  const [drivers, setDrivers] = useState<null | any[]>(null);
  const [year, setYear] = useState<string>(dayjs().year().toString());

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleChange = (event: SelectChangeEvent) => {
    setYear(event.target.value as string);
  };

  const yearArr: number[] = [];
  for (let i: number = dayjs().year(); i >= 2020; i--) {
    yearArr.push(i);
  }

  useEffect(() => {
    console.log(year);

    axios
      .get(process.env.REACT_APP_API + `api/${year}/top-20-driver`)
      .then((response) => {
        console.log(response.data.data);
        setDrivers(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [year]);

  return (
    <div>
      <Box
        component="div"
        sx={{
          borderTop: "12px solid #000",
          borderRight: "12px solid #000",
          borderTopRightRadius: "1rem",
          py: 2,
        }}
      >
        <Typography
          component="h2"
          variant="h3"
          sx={{
            fontWeight: 800,
            fontSize: { lg: 54, xs: 38 },
            fontFamily: "fontBlack",
            letterSpacing: "-4px",
          }}
        >
          F1 Drivers Ranking {year}
        </Typography>
      </Box>
      <Box
        component="div"
        sx={{
          backgroundColor: "#f9f9f9",
          padding: "1.25rem",
          borderRadius: 2,
          mt: 3,
        }}
      >
        <Typography sx={{ fontSize: "0.8rem" }}>
          Discover everything you need to know about this year's Formula 1 teams
          - drivers, podium finishes, points earned and championship titles.
        </Typography>
      </Box>
      <Box component="div" sx={{ mt: 2 }}>
        <FormControl fullWidth>
          <InputLabel id="year-select-label">
            Choose F1 Ranking Drivers Year
          </InputLabel>
          <Select
            labelId="year-select-label"
            id="year-select"
            value={year}
            label="Choose F1 Ranking Drivers Year"
            onChange={handleChange}
            MenuProps={MenuProps}
          >
            {yearArr.map((el, index) => {
              return (
                <MenuItem key={index} value={el.toString()}>
                  {el.toString()}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      <Box component="div" mt={3}>
        {drivers && drivers.length === 0 && (
          <Typography sx={{ textAlign: "center" }}>No result data.</Typography>
        )}
        <Grid container spacing={0}>
          {drivers &&
            drivers.length !== 0 &&
            drivers.map((el: any, index: number) => {
              const name: string = el.driver.name;
              const value1: string = name[0];
              const value2: string =
                name.split(" ")[0].substring(0, 3).toUpperCase() +
                name.split(" ")[1].substring(0, 3).toUpperCase();
              const value3: string = name.split(" ")[0];
              const value4: string = name.split(" ")[1];
              const value5: string =
                name.split(" ")[0].substring(0, 3).toUpperCase() +
                name.split(" ")[1].substring(0, 3).toUpperCase();

              return (
                <Grid
                  key={index}
                  item
                  onClick={() => {
                    navigate(`/driver/${el.driver._id}/${el.driver.id}`);
                  }}
                  xs={12}
                  sm={6}
                  lg={4}
                  xl={
                    el.position === 1 || el.position === 2 || el.position === 3
                      ? 4
                      : 3
                  }
                >
                  <Box
                    component="div"
                    sx={{
                      // border: "1px solid #ddd",
                      borderTop: "3px solid #000",
                      borderRight: "3px solid #000",
                      borderTopRightRadius: "0.5rem",
                      p: 1,
                      m: 1,
                      transition: "padding margin 1s",
                      "&:hover": {
                        borderColor: "green",
                        cursor: "pointer",
                        mt: 0,
                        pt: 2,
                      },
                    }}
                  >
                    <Box
                      component="div"
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        pb: 1,
                        borderBottom: "1px solid #000",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "fontBlack",
                          fontWeight: 600,
                          fontSize: 24,
                        }}
                      >
                        {el.position}
                      </Typography>
                      <Box
                        component="div"
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography sx={{ fontFamily: "fontBlack" }}>
                          {el.driver.career_points}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "fontBlack",
                            backgroundColor: "#000",
                            color: "white",
                            px: 1,
                            borderRadius: 1,
                          }}
                        >
                          PTS
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      component="div"
                      sx={{
                        py: 1,
                        display: "flex",
                        justifyContent: "space-between",
                        borderBottom: "1px solid #000",
                        alignItems: "center",
                      }}
                    >
                      <Box
                        component="div"
                        sx={{
                          borderLeft: "4px solid green",
                          pl: 1,
                        }}
                      >
                        <Typography
                          sx={{ fontFamily: "fontRegular", fontSize: "0.8rem" }}
                        >
                          {el.driver.name.split(" ")[0]}
                        </Typography>
                        <Typography
                          sx={{ fontFamily: "fontBlack", fontSize: "0.8rem" }}
                        >
                          {el.driver.name.split(" ")[1]}
                        </Typography>
                      </Box>
                      <img src={el.team.logo} alt="logo-team" height={40} />
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: "fontRegular",
                        color: "#363636",
                        mt: 1,
                      }}
                    >
                      {el.team.name}
                    </Typography>
                    <Box
                      component="div"
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "fontBlack",
                          fontSize: "2.75rem",
                          alignSelf: "flex-end",
                        }}
                      >
                        {el.driver.number}
                      </Typography>
                      <Box component="div" sx={{ maxWidth: "206px" }}>
                        <img
                          // src={el.driver.image}
                          src={`https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/${value1}/${value2}01_${value3}_${value4}/${value5}01.png.transform/2col/image.png`}
                          alt="img_driver"
                          height="100%"
                          width="100%"
                        />
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </div>
  );
}
