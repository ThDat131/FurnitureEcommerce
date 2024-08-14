"use client";
import { Grid, ThemeProvider } from "@mui/material";
import theme from "../theme";
import Footer from "@/components/Footer";
import Blog from "./Blog";
import { useEffect } from "react";

const Activity = () => {
  const activityTheme = theme;

  useEffect(() => {}, []);

  return (
    <ThemeProvider theme={activityTheme}>
      <Grid
        item
        container
        justifyContent={"center"}
        xs={12}
        alignItems={"center"}
        my={3}
      >
        <Grid xs={10} item>
          <Blog directionImg={"right"}/>
          <Blog directionImg={"left"}/>
        </Grid>
      </Grid>
      <Footer />
    </ThemeProvider>
  );
};

export default Activity;
