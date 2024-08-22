"use client";
import { Grid, ThemeProvider } from "@mui/material";
import theme from "../theme";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import Blog from "./component/Blog";

const Activity = () => {
  const activityTheme = theme;

  useEffect(() => {}, []);

  return (
    <ThemeProvider theme={activityTheme}>
      <Grid
        container
        justifyContent={"center"}
        xs={12}
        alignItems={"center"}
        sx={{ backgroundColor: activityTheme.palette.primary.contrastText }}
      >
        <Grid xs={10} item>
          <Blog directionImg={"left"} />
        </Grid>
      </Grid>
      <Footer />
    </ThemeProvider>
  );
};

export default Activity;
