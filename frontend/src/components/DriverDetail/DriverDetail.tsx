import { Box } from "@mui/joy";
import { Grid, Typography } from "@mui/material";
import axios from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YummiContentDriverDetail from "../YummiContentDriverDetail/YummiContentDriverDetail";

export default function DriverDetail() {
  const driverid = useParams().driverid;
  const driverId = useParams().driverId;
  const [driver, setDriver] = useState<any>(null);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API + `api/${driverid}/${driverId}/driver`)
      .then((response) => {
        console.log(response.data);
        console.log(response.data.name);

        setDriver(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [driverid, driverId]);
  return (
    <>
      {driver && (
        <Grid container sx={{ backgroundColor: "#f5f5f5" }}>
          <Grid item md={6} sm={12} xs={12}>
            <Box
              component="div"
              sx={{
                width: "100%",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                height: "450px",
              }}
            >
              <img
                src={`https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/${driver.name
                  .split(" ")[1]
                  .toLowerCase()}.jpg.img.2024/`}
                alt="driver-img"
                width="720px"
                height="720px"
              />
            </Box>
            <Box component="div" p={2}>
              <Box
                component="div"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Typography
                  fontSize={38}
                  fontFamily="fontRegular"
                  color="#808080"
                  mr={2}
                >
                  {driver.number}
                </Typography>
                <img
                  src={`https://media.formula1.com/content/dam/fom-website/flags/${driver.country.name}.gif`}
                  alt="flag"
                  style={{ borderRadius: "4px" }}
                  width={48}
                  height={32}
                />
              </Box>
              <Typography fontFamily="fontBold" fontWeight={800} fontSize={38}>
                {driver.name}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6} sm={12} xs={12} sx={{ p: "40px" }}>
            <Box
              component="div"
              sx={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <img
                src={`https://media.formula1.com/content/dam/fom-website/manual/Helmets2022/${driver.name
                  .split(" ")[1]
                  .toLowerCase()}.png`}
                alt="helmet"
                width="40%"
              />
              <Box component="div">
                <Typography
                  sx={{
                    fontFamily: "fontRegular",
                    fontWeight: 800,
                    color: "#ff1e00",
                    fontSize: "18px",
                  }}
                >
                  Official merchandise
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "fontRegular",
                    fontWeight: 800,
                    color: "#ff1e00",
                    fontSize: "18px",
                  }}
                >
                  Official memorabilia
                </Typography>
              </Box>
            </Box>
            <Box component="div" mt={2}>
              {[
                { left: "Team", right: driver.teams[0].team.name },
                { left: "Country", right: driver.country.name },
                { left: "Podiums", right: driver.podiums },
                {
                  left: "Grands Prix entered",
                  right: driver.grands_prix_entered,
                },
                {
                  left: "World Championships",
                  right: driver.world_championships,
                },
                {
                  left: "Highest race finish",
                  right:
                    driver.highest_race_finish.position +
                    ` (x${driver.highest_race_finish.number})`,
                },
                {
                  left: "Highest grid position",
                  right: driver.highest_grid_position,
                },
                {
                  left: "Date of birth",
                  right: dayjs(driver.birthdate).format("DD/MM/YYYY"),
                },
                { left: "Place of birth", right: driver.birthplace },
              ].map((el, index) => {
                return (
                  <Box key={index} component="div" sx={{ display: "flex" }}>
                    <Typography
                      sx={{
                        fontFamily: "fontRegular",
                        fontWeight: 800,
                        width: "50%",
                        p: "4px 0 4px 16px",
                      }}
                    >
                      {el.left}
                    </Typography>
                    <Typography sx={{ width: "50%", pl: 3 }}>
                      {el.right}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      )}
      <YummiContentDriverDetail />
    </>
  );
}
