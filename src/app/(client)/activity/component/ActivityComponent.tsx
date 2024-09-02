"use client";
import Footer from "@/components/Footer";
import { Grid, ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import theme from "../../theme";
import Blog from "./Blog";

const ActivityComponent = () => {
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

export default ActivityComponent;
