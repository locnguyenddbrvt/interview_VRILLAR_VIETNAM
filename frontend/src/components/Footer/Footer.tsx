import { useState } from "react";
import { ColorPaletteProp } from "@mui/joy/styles";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { Container, Grid, List, ListItem } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

import googlePlayDownload from "../../assets/google-play-badge.svg";
import appStoreDownload from "../../assets/download-on-the-app-store-apple.svg";
import logo1 from "./f1-logo-red.svg";
import logo2 from "./f1-logo-white.svg";

export default function Footer() {
  const [color, setColor] = useState<ColorPaletteProp>("neutral");

  const footerList = [
    ["Lastest News", "What is F1?", "Video", "Drivers", "Teams", "Schedule"],
    [
      "Standings",
      "2023 SEASON",
      "Driver Standings",
      "CONTRUCTORS STANDINGS",
      "ARCHIVE 1950-2022",
      "F1 AWARD",
    ],
    [
      "GAMING",
      "ESPORTS",
      "FANTASY",
      "F1 23",
      "F1 MANAGER 23",
      "F1 PLAY",
      "F1 MOBILE RACING",
      "F1 CLASH",
    ],
    ["Live Timming"],
    [
      "Tickets",
      "F1® Experiences",
      "Store",
      "Paddock Club",
      "F1® TV",
      "F1® Authentics",
    ],
    ["Rules & Regulations"],
  ];
  return (
    <Sheet
      variant="solid"
      color={color}
      invertedColors
      sx={{
        ...(color !== "warning" && {
          bgcolor: `${color}.800`,
        }),
        flexGrow: 1,
        p: 2,
        // mx: -3,
        my: -3,
        borderRadius: { xs: 0, sm: "xs" },
      }}
    >
      <Container maxWidth="xl">
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            flexDirection: {
              lg: "row",
              md: "column-reverse",
              sm: "column-reverse",
              xs: "column-reverse",
            },
            justifyContent: "center",
          }}
        >
          <Box component="div">
            <IconButton variant="plain">
              <FacebookRoundedIcon />
            </IconButton>
            <IconButton variant="plain">
              <TwitterIcon />
            </IconButton>
            <IconButton variant="plain">
              <InstagramIcon />
            </IconButton>
            <IconButton variant="plain" onClick={() => setColor("success")}>
              <YouTubeIcon />
            </IconButton>
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              ml: { lg: "auto", md: 0, sm: 0, xs: 0 },
              flexDirection: {
                lg: "row",
                md: "column",
                sm: "column",
                xs: "column",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "fontRegular",
                maxWidth: { lg: "125px", md: "auto", sm: "auto", xs: "auto" },
                fontSize: "0.8rem",
                mr: { lg: 1, md: 0, sm: 0, xs: 0 },
                mb: { lg: 0, md: 2, sm: 2, xs: 2 },
              }}
            >
              DOWNLOAD THE OFFICIAL F1 APP
            </Typography>
            <Box component="div">
              <img
                height={40}
                src={googlePlayDownload}
                alt="google-play-download"
                style={{ marginRight: "0.5rem" }}
              />
              <img height={40} src={appStoreDownload} alt="appstore-download" />
            </Box>
          </Box>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box component="div" sx={{ display: "flex", alignItems: "center" }}>
            <img src={logo1} alt="logo" />
            <Typography
              sx={{
                fontFamily: "fontRegular",
                fontWeight: 600,
                fontSize: "1.25rem",
                ml: 1,
                "&:hover": { cursor: "pointer" },
                "&:hover .footer-typo-icon": {
                  color: "red",
                },
              }}
              endDecorator={<ChevronRightIcon className="footer-typo-icon" />}
            >
              Our partners
            </Typography>
          </Box>
          <Box
            component="div"
            sx={{
              display: { lg: "none", md: "none", sm: "block", xs: "block" },
              width: "100%",
              py: 2,
              px: 5,
            }}
          >
            <List
              sx={{
                borderBottom: "10px  solid #38383f",
                borderRight: "10px  solid #38383f",
                borderBottomRightRadius: "1.25rem",
                p: 3,
              }}
            >
              {footerList.map((arr, index) => {
                return arr.map((el, ind) => {
                  return (
                    <div key={(index + ind).toString()}>
                      <ListItem
                      // sx={{
                      //   display: "flex",
                      //   justifyContent: "center",
                      //   alignItems: "center",
                      //   flexDirection: "column",
                      // }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "fontRegular",
                            fontSize: "0.8rem",
                            border: "1px solid transparent",
                            width: "fit-content",
                            "&:hover": {
                              borderBottom: "1px solid red",
                              cursor: "pointer",
                            },
                          }}
                        >
                          {el}
                        </Typography>
                      </ListItem>
                      <Divider />
                    </div>
                  );
                });
              })}
            </List>
          </Box>
          <Grid
            container
            mt={5}
            sx={{
              borderBottom: "10px  solid #38383f",
              borderRight: "10px  solid #38383f",
              borderBottomRightRadius: "1.25rem",
              pb: 5,
              display: { md: "flex", sm: "none", xs: "none" },
            }}
          >
            {footerList.map((column, index) => {
              return (
                <Grid key={index} item md={2}>
                  {column.map((el, index) => {
                    return (
                      <Box component="div" key={index} sx={{ py: 1, px: 2 }}>
                        <Typography
                          key={index}
                          sx={{
                            fontFamily: "fontRegular",
                            fontSize: "0.8rem",
                            border: "1px solid transparent",
                            width: "fit-content",
                            "&:hover": {
                              borderBottom: "1px solid red",
                              cursor: "pointer",
                            },
                          }}
                        >
                          {el}
                        </Typography>
                      </Box>
                    );
                  })}
                </Grid>
              );
            })}
          </Grid>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            flexDirection: { md: "row", sm: "column", xs: "column" },
          }}
        >
          <img src={logo2} alt="logo" />
          <Typography
            startDecorator={
              <Typography textColor="text.tertiary">by</Typography>
            }
            level="body2"
          >
            F1 Information
          </Typography>
          <Typography level="body3" sx={{ ml: { md: "auto", sm: 0, xs: 0 } }}>
            © 2003-2023 Formula One World Championship Limited
          </Typography>
        </Box>
      </Container>
    </Sheet>
  );
}
