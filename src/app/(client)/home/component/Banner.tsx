"use client";
import {
  Box,
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import banner from "../../../assets/images/bannerFurniture.jpg";

export default function Banner() {
  const [hovered, setHovered] = useState(false);

  const theme = createTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  theme.typography.h3 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        sx={{
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
        }}
      >
        <Grid xs={12}>
          <Image
            src={banner}
            alt="Banner"
            layout="responsive"
            style={{
              transition: "transform 0.3s ease, filter 0.3s ease",
              transform: hovered ? "scale(1.1)" : "scale(1)",
              filter: hovered ? "brightness(0.7)" : "brightness(1)",
            }}
          />
          {hovered && (
            <Typography
              variant="h3"
              sx={{
                position: "absolute",
                top: isMobile ? "50%" : "80%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#EFE1CE",
                textShadow: "0 0 5px black",
                zIndex: 1,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              NỘI THẤT CỦA BẠN, CÂU CHUYỆN CỦA CHÚNG TÔI
            </Typography>
          )}
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
