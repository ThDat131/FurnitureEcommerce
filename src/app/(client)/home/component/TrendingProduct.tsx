"use client";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Box,
  createTheme,
  Grid,
  Paper,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import shape from "../../../assets/images/shape/waveImg.png";

interface TrendingProductProps {
  items: any[];
}

function Item({item, isMobile}: any) {
  const [hovered, setHovered] = useState(false);

  return (
    <Paper>
      <Grid
        xs={12}
        container
        justifyContent={"space-evenly"}
        alignItems={"center"}
      >
        <Grid xs={10} md={4}>
          <Typography
            variant="h4"
            sx={{
              color: "#401d59",
              marginBottom: "30px",
              textAlign: isMobile ? "center" : "right",
              fontWeight: "bold",
            }}
          >
            <i>{item.name.toUpperCase()}</i>
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#401d59",
              fontWeight: "lighter",
              textAlign: "justify",
              marginBottom: 2,
            }}
          >
            {item.description}
          </Typography>
        </Grid>
        <Grid
          xs={10}
          md={6}
          sx={{
            borderRadius: 8,
            overflow: "hidden",
            position: "relative",
            cursor: "pointer",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image
            src={item.img}
            alt={item.alt}
            unoptimized
            layout="responsive"
            width={300}
            height={300}
            style={{
              transition: "transform 0.3s ease, filter 0.3s ease",
              transform: hovered ? "scale(1.1)" : "scale(1)",
              filter: hovered ? "brightness(0.7)" : "brightness(1)",
            }}
          />
          {hovered && (
            <Typography
              variant="h4"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#EFE1CE",
                zIndex: 1,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Chi tiết
            </Typography>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default function TrendingProduct({ items }: TrendingProductProps) {
  const theme = createTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {}, []);

  theme.typography.h4 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
  };

  theme.typography.h5 = {
    fontSize: "1rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
  };

  theme.typography.subtitle1 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.2rem",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: "#fff", color: "#401d59" }}>
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Image src={shape} alt="photo" width={isMobile ? 50 : 100} />
          <Typography
            variant="h5"
            sx={{
              textShadow: "0 0 2px black",
              textAlign: "center",
              fontWeight: "bold",
              padding: isMobile ? 2 : 4
            }}
          >
            <b>SẢN PHẨM NỔI BẬT</b>
          </Typography>
          <Image
            src={shape}
            alt="photo"
            width={isMobile ? 50 : 100}
            style={{ transform: "scaleX(-1)" }}
          />
        </Grid>
        <Grid xs={12} justifyContent={"center"} alignItems={"center"}>
          <Carousel
            NextIcon={<ChevronRightIcon />}
            PrevIcon={<ChevronLeftIcon />}
          >
            {items.map((item, i) => (
              <Item key={i} item={item} isMobile={isMobile}/>
            ))}
          </Carousel>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
