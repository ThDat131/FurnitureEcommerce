"use client";
import { Grid, ThemeProvider, Typography } from "@mui/material";
import theme from "../../theme";
import Image from "next/image";
import img from "../../../assets/images/blog1.jpg";

export default function ProductDetail() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        xs={12}
        justifyContent={"center"}
        minHeight={"calc(100vh - 113px)"}
        sx={{ backgroundColor: theme.palette.primary.contrastText }}
      >
        <Typography
          variant="h4"
          textAlign={"center"}
          fontWeight={"bold"}
          color={theme.palette.primary.main}
          sx={{ paddingTop: 4, paddingBottom: 4 }}
        >
          {"Đèn chiếu biển số nhà".toUpperCase()}
        </Typography>
        <Grid xs={10} container item justifyContent={"space-between"}>
          <Grid xs={5} item>
            <Image src={img} alt="" layout="responsive" />
          </Grid>
          <Grid xs={5} item>
            <Typography variant="h4" color={theme.palette.primary.main}>
              Mã sản phẩm
            </Typography>
            <Typography
              variant="h4"
              color={theme.palette.primary.main}
              sx={{ paddingTop: 4, paddingBottom: 4 }}
            >
              Thông số kỹ thuật
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
