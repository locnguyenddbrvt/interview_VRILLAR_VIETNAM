import { useEffect, useRef, useState } from "react";

import { Box, IconButton, Stack, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

interface CarouselsImg3DProps {
  imgCarousels: string[];
  heightImg: number | string | {};
  isModal: boolean;
}

export default function CarouselsImg3D({
  imgCarousels,
  heightImg,
  isModal,
}: CarouselsImg3DProps): JSX.Element {
  const imgContainerRef = useRef<any>(null);
  const [isHover, setIsHover] = useState<null | string>(null);
  const [currentTranslate, setCurrentTranslate] = useState<number>(0);

  useEffect(() => {
    if (imgContainerRef.current) {
      setCurrentTranslate(-imgContainerRef.current.clientWidth);
    }
  }, [imgContainerRef]);
  // useEffect(() => {
  //   console.log(currentTranslate);
  // }, [currentTranslate]);

  const style: {} =
    imgContainerRef.current &&
    (isHover
      ? (isHover === "left" && {
          display: "flex",
          width: "auto",
          transition: "transform 1s",
          transform: `translateX(${
            currentTranslate + imgContainerRef.current.clientWidth * 0.1
          }px)`,
        }) ||
        (isHover === "right" && {
          display: "flex",
          width: "auto",
          transform: `translateX(${
            currentTranslate - imgContainerRef.current.clientWidth * 0.1
          }px)`,
          transition: "transform 1s",
        })
      : {
          display: "flex",
          width: "auto",
          transition: "transform 1s",
          transform: `translateX(${currentTranslate}px)`,
        });

  return (
    <>
      <Box
        component="div"
        sx={{ width: "100%", position: "relative", overflow: "hidden" }}
      >
        <IconButton
          color="inherit"
          sx={{
            height: "100%",
            position: "absolute",
            zIndex: 9,
            width: "10%",
            borderRadius: 0,
            "&:hover": { cursor: "pointer" },
            "&:hover .Carousel-img-container": {
              transform: "translateX(10%)",
            },
          }}
          onMouseEnter={() => setIsHover("left")}
          onMouseLeave={() => setIsHover(null)}
          onClick={() =>
            setCurrentTranslate((b) =>
              b === -imgContainerRef.current.clientWidth
                ? -imgContainerRef.current.clientWidth * imgCarousels.length
                : b + imgContainerRef.current.clientWidth
            )
          }
        >
          <ChevronLeftIcon sx={{ fontSize: "5rem" }} />
        </IconButton>
        <IconButton
          color="inherit"
          sx={{
            height: "100%",
            position: "absolute",
            zIndex: 9,
            width: "10%",
            borderRadius: 0,
            right: 0,
          }}
          onMouseEnter={() => setIsHover("right")}
          onMouseLeave={() => setIsHover(null)}
          onClick={() =>
            setCurrentTranslate((b) => {
              if (
                b ===
                -imgContainerRef.current.clientWidth * imgCarousels.length
              ) {
                const updateCurrentTransplate: number =
                  -imgContainerRef.current.clientWidth;
                return updateCurrentTransplate;
              } else {
                const updateCurrentTransplate: number =
                  currentTranslate - imgContainerRef.current.clientWidth;
                return updateCurrentTransplate;
              }
            })
          }
        >
          <ChevronRightIcon sx={{ fontSize: "5rem" }} />
        </IconButton>
        <Box
          component="div"
          sx={{ height: heightImg, maxHeight: "70vh", overflow: "hidden" }}
        >
          <Stack
            ref={imgContainerRef}
            className="Carousel-img-container"
            direction="row"
            sx={style}
          >
            <img
              width="100%"
              src={imgCarousels[imgCarousels.length - 1]}
              alt="img"
            />
            {imgCarousels.map((el, index) => {
              return <img key={index} width="100%" src={el} alt="img" />;
            })}
            <img width="100%" src={imgCarousels[0]} alt="img" />
          </Stack>
        </Box>
        {imgContainerRef.current && (
          <Box
            component="div"
            sx={{ display: "flex", py: 4, backgroundColor: "#f5f5f5" }}
          >
            <Typography
              sx={{ width: "10%", textAlign: "center" }}
              fontFamily="fontRegular"
              fontSize="1.5rem"
            >
              <strong style={{ fontFamily: "fontBold" }}>
                {-currentTranslate / imgContainerRef.current.clientWidth}
              </strong>
              {`/${imgCarousels.length}`}
            </Typography>
            <Typography sx={{ width: "90%", color: "#545454" }}>
              {-currentTranslate / imgContainerRef.current.clientWidth === 1 &&
                "BAHRAIN, BAHRAIN - MARCH 17: Sergio Perez of Mexico and Oracle Red Bull Racing looks on in the Paddock during previews ahead of the F1 Grand Prix of Bahrain at Bahrain International Circuit on March 17, 2022 in Bahrain, Bahrain. (Photo by Mark Thompson/Getty Images) © 2022 Getty Images"}
              {-currentTranslate / imgContainerRef.current.clientWidth === 2 &&
                "BAHRAIN, BAHRAIN - MARCH 12: Sergio Perez of Mexico driving the (11) Oracle Red Bull Racing RB18 makes a pitstop during Day Three of F1 Testing at Bahrain International Circuit on March 12, 2022 in Bahrain, Bahrain. (Photo by Mark Thompson/Getty Images) © 2022 Getty Images"}
              {-currentTranslate / imgContainerRef.current.clientWidth === 3 &&
                "BAHRAIN, BAHRAIN - MARCH 12: Sergio Perez of Mexico and Oracle Red Bull Racing prepares to drive in the garage during Day Three of F1 Testing at Bahrain International Circuit on March 12, 2022 in Bahrain, Bahrain. (Photo by Mark Thompson/Getty Images) © 2022 Getty Images"}
              {-currentTranslate / imgContainerRef.current.clientWidth === 4 &&
                "BAHRAIN, BAHRAIN - MARCH 12: Sergio Perez of Mexico driving the (11) Oracle Red Bull Racing RB18 on track during Day Three of F1 Testing at Bahrain International Circuit on March 12, 2022 in Bahrain, Bahrain. (Photo by Dan Istitene - Formula 1/Formula 1 via Getty Images) © 2022 Formula One World Championship Limited"}
              {-currentTranslate / imgContainerRef.current.clientWidth === 5 &&
                "BAHRAIN, BAHRAIN - MARCH 11: Sergio Perez of Mexico and Oracle Red Bull Racing prepares to drive in the garage during Day Two of F1 Testing at Bahrain International Circuit on March 11, 2022 in Bahrain, Bahrain. (Photo by Mark Thompson/Getty Images) © 2022 Getty Images"}
              {-currentTranslate / imgContainerRef.current.clientWidth === 6 &&
                "BAHRAIN, BAHRAIN - MARCH 10: Sergio Perez of Mexico driving the (11) Oracle Red Bull Racing RB18 on track during Day One of F1 Testing at Bahrain International Circuit on March 10, 2022 in Bahrain, Bahrain. (Photo by Mark Thompson/Getty Images) © 2022 Getty Images"}
            </Typography>
          </Box>
        )}
      </Box>
    </>
  );
}
