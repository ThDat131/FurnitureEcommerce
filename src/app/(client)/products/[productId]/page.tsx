"use client";
import { groupProduct } from "@/app/static";
import Fancybox from "@/components/FancyBox";
import Footer from "@/components/Footer";
import { Grid, ThemeProvider, Typography } from "@mui/material";
import Image from "next/image";
import Carousel from "react-material-ui-carousel";
import theme from "../../theme";

export default function ProductDetail() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        xs={12}
        justifyContent={"center"}
        minHeight={"calc(100vh - 113px)"}
        sx={{
          backgroundColor: theme.palette.primary.contrastText,
          paddingBottom: 10,
        }}
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
          <Grid xs={12} md={5} item>
            <Fancybox
              options={{
                Carousel: {
                  infinite: false,
                },
              }}
            >
              <Carousel>
                {groupProduct.map((product) => (
                  <div key={product.img.src}>
                    <a data-fancybox="gallery" href={product.img.src}>
                      <Image
                        src={product.img.src}
                        alt=""
                        layout="responsive"
                        width={100}
                        height={100}
                      />
                    </a>
                  </div>
                ))}
              </Carousel>
            </Fancybox>
          </Grid>
          <Grid xs={12} md={5} item>
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
      <Footer />
    </ThemeProvider>
  );
}
