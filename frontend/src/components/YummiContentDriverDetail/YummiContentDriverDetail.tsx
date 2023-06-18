import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Grid,
  Stack,
  Button,
  Modal,
} from "@mui/material";
import TypographyJoy from "@mui/joy/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import CarouselsImg3D from "../Carousels_Img_3D/Carousels_Img_3D";

export default function YummiContentDriverDetail() {
  const [open, setOpen] = useState<boolean>(false);

  const imgCarousels: string[] = [
    "https://media.formula1.com/content/dam/fom-website/sutton/2022/Bahrain/Thursday/1385964789.jpg.img.2048.medium.jpg/1647524214746.jpg",
    "https://media.formula1.com/content/dam/fom-website/sutton/2022/BahrainTesting/Saturday/1384546342.jpg.img.2048.medium.jpg/1647089855347.jpg",
    "https://media.formula1.com/content/dam/fom-website/sutton/2022/BahrainTesting/Saturday/1384546294.jpg.img.2048.medium.jpg/1647089538607.jpg",
    "https://media.formula1.com/content/dam/fom-website/sutton/2022/BahrainTesting/Saturday/1384464758.jpg.img.2048.medium.jpg/1647074594605.jpg",
    "https://media.formula1.com/content/dam/fom-website/sutton/2022/BahrainTesting/Friday/1384260863.jpg.img.2048.medium.jpg/1647007135821.jpg",
    "https://media.formula1.com/content/dam/fom-website/sutton/2022/BahrainTesting/Thursday/1383948022.jpg.img.2048.medium.jpg/1646933464726.jpg",
  ];
  return (
    <Box component="div" sx={{ py: 2 }}>
      {/* Acticle card */}
      <Grid container>
        {[
          {
            time: "09 JUN 2023",
            title:
              "‘He has nothing to lose now’ – Horner tips Perez to rediscover his form after Monaco and Spain setbacks Spain setbacks",
            img: "https://media.formula1.com/image/upload/f_auto/q_auto/v1686297878/fom-website/2023/Miscellaneous/horner-perez-2023.png",
          },
          {
            time: "05 JUN 2023",
            title:
              "‘It is what it is’ – Perez rues costly qualifying display in Spain but aims to reset and ‘come back strong’,‘come back strong’",
            img: "https://media.formula1.com/image/upload/f_auto/q_auto/v1685898228/fom-website/2023/Spain/perez-spain-race-2023.png",
          },
          {
            time: "02 JUN 2023",
            title:
              "Verstappen says ‘everything looked good’ en route to Friday practice double in Spain,en route in Spain.en route in Spain",
            img: "https://media.formula1.com/image/upload/f_auto/q_auto/v1685728465/fom-website/2023/Spain/verstappen-barcelona-friday-practice-2023-2.png",
          },
          {
            time: "02 JUN 2023",
            title:
              "‘We cannot afford any more slip-ups’ says Perez as he looks to fight back against Verstappen in title race en route in Spain",
            img: "https://media.formula1.com/image/upload/f_auto/q_auto/v1685631012/fom-website/2023/Spain/perez-spain-2023-garage.png",
          },
        ].map((el, index) => {
          return (
            <Grid
              key={index}
              lg={3}
              md={6}
              item
              p="2px"
              sx={{
                "&:hover .Driver-detail-text-article": {
                  color: "#ddd",
                },
                "&:hover .Driver-detail-article-card": {
                  backgroundColor: "#171717",
                },
                "&:hover .Driver-detail-title-article": {
                  color: "#fff",
                },
              }}
              onClick={() => {
                window.location.href =
                  "https://www.formula1.com/en/latest/article.he-has-nothing-to-lose-now-horner-tips-perez-to-rediscover-his-form-after.66YDvGXclaGCyp7KoZ0rid.html";
              }}
            >
              <Card
                className="Driver-detail-article-card"
                sx={{
                  width: "100%",
                  transition: "background 1s",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={el.img}
                    alt="green iguana"
                  />
                  <CardContent>
                    <TypographyJoy
                      startDecorator={
                        <AccessTimeIcon sx={{ fontSize: "1rem" }} />
                      }
                      sx={{ fontSize: "0.75rem", color: "#949498" }}
                    >
                      {el.time}
                    </TypographyJoy>
                    <Typography
                      fontFamily="fontRegular"
                      gutterBottom
                      component="div"
                      className="Driver-detail-title-article"
                      sx={{ transition: "color 0.75s" }}
                    >
                      {el.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="white"
                      className="Driver-detail-text-article"
                      sx={{ transition: "color 1s" }}
                    >
                      NEWS
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Box component="div" sx={{ padding: "40px 20px" }}>
        <Typography
          mb={2}
          fontFamily="fontRegular"
          fontWeight={400}
          fontSize="2rem"
        >
          Biography
        </Typography>
        <Typography mb={1} color="#747474">
          He’s the fighter with a gentle touch from the land of the Lucha Libre.
        </Typography>
        <Typography mb={1} color="#747474">
          Perez’s reputation in F1 has been built on opposite approaches to
          Grand Prix racing. On the one hand, he is a punchy combatant who
          wrestles his way through the pack and into the points. Never afraid to
          add a bit of spice to his on-track encounters, even his team mates
          don’t always escape the Mexican’s heat.
        </Typography>
        <Typography mb={1} color="#747474">
          Then on the other hand, Perez is a smooth operator, a master at
          managing tyres to eke out extra performance and give him the upper
          hand on strategy. A firm favourite on the grid after his time with
          Sauber, McLaren, Force India and Racing Point, Perez has matured into
          an analytical racer and team player.
        </Typography>
        <Typography mb={1} color="#747474">
          A proud countryman, the Guadalajara gunslinger has amassed more points
          than any other Mexican in the history of F1. In Sakhir 2020 he also
          matched hero and compatriot Pedro Rodriguez by taking the chequered
          flag in first – a performance that landed him a seat with title
          contenders Red Bull.
        </Typography>
        <Typography mb={1} color="#747474">
          There he provided strong support to Max Verstappen’s 2021 and '22
          championship-winning campaigns, also adding a further three victories
          to his own tally. More wins may not be assured, especially with
          Verstappen as team mate, but Perez working hard and racing with his
          heart are.
        </Typography>
      </Box>
      <Box component="div">
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box
            component="div"
            sx={{
              position: "absolute" as "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              boxShadow: 24,
              width: { lg: "85vw", md: "90vw", sm: "90vw", xs: "90vw" },
            }}
          >
            <CarouselsImg3D
              imgCarousels={imgCarousels}
              heightImg={"auto"}
              isModal={true}
            />
          </Box>
        </Modal>
        <CarouselsImg3D
          imgCarousels={imgCarousels}
          heightImg={{ md: "800px", sm: "auto", xs: "auto" }}
          isModal={false}
        />
      </Box>
      <Box component="div" mt={5}>
        <Typography variant="h4" fontFamily="fontBold" mb={3}>
          YOU MIGHT ALSO LIKE
        </Typography>
        <Grid container width="100%">
          {[
            {
              img: "https://media.formula1.com/content/dam/fom-website/sutton/2022/Brazil/Sunday/1441230430.jpg.img.320.medium.jpg",
              text1: "TEAMS / TEAMS",
              text2: "RED BULL",
            },
            {
              img: "https://media.formula1.com/content/dam/fom-website/drivers/2023Drivers/verstappen.jpg.img.320.medium.jpg",
              text1: "DRIVERS / DRIVERS",
              text2: "Max Verstrappen",
            },
            {
              img: "https://media.formula1.com/content/dam/fom-website/sutton/2022/Mexico/Sunday/1437787129.jpg.img.320.medium.jpg",
              text1: "SCHEDULE / 2023",
              text2: "Mexico",
            },
          ].map((el: any, index: number) => {
            return (
              <Grid key={index} item lg={3} md={4} sm={4} xs={12} sx={{ p: 1 }}>
                <Box
                  component="div"
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderBottomLeftRadius: "12px",
                    borderBottomRightRadius: "12px",
                    position: "relative",
                  }}
                >
                  <img
                    alt="img"
                    height="100%"
                    width="100%"
                    src={el.img}
                    style={{
                      borderBottomLeftRadius: "12px",
                      borderBottomRightRadius: "12px",
                    }}
                  />
                  <Box
                    component="div"
                    sx={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      top: 0,
                      overflow: "hidden",
                      borderBottomLeftRadius: "12px",
                      borderBottomRightRadius: "12px",
                      "&:hover .Yummi-driver-detail-related-card": {
                        transform: "translateY(15%)",
                      },
                      "&:hover": { cursor: "pointer" },
                    }}
                  >
                    <Stack
                      sx={{
                        width: "100%",
                        height: "100%",
                        backgroundImage:
                          "linear-gradient(to top,rgba(0,0,0,0.8) 30%, rgba(0,0,0,0) )",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        pb: "20%",
                        pl: 2,
                        transition: "transform 1s",
                        transform: "translateY(20%)",
                      }}
                      className="Yummi-driver-detail-related-card"
                    >
                      <Typography
                        sx={{ color: "#b0b0b0", fontSize: "0.75rem", pl: 1 }}
                      >
                        TEAMS / TEAMS
                      </Typography>
                      <Typography
                        sx={{
                          color: "white",
                          fontFamily: "fontRegular",
                          pb: 2,
                          pt: 1,
                        }}
                      >
                        RED BULL
                      </Typography>
                    </Stack>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
