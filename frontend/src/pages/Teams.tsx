import {
  Typography,
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import axios from "axios";
import { useEffect } from "react";

export default function Teams() {
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API + `api/team-ranking`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
          F1 Teams
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
          Check out this season's official F1 line-up. Full breakdown of
          drivers, points and current positions. Follow your favourite F1
          drivers on and off the track.
        </Typography>
      </Box>
    </div>
  );
}

function TeamCard() {
  return <Box component="div">fsbf</Box>;
}
