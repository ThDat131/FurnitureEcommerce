"use client";
import { Grid, ThemeProvider, Typography } from "@mui/material";
import Image from "next/image";
import emailImg from "../../../assets/images/icon/emailIcon.png";
import locationImg from "../../../assets/images/icon/locationIcon.png";
import phoneImg from "../../../assets/images/icon/phoneIcon.png";
import theme from "../../theme";

export default function Contact() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        justifyContent={"center"}
        sx={{ backgroundColor: theme.palette.primary.contrastText, paddingBottom: 4 }}
      >
        <Grid xs={12} item>
          <Typography
            variant="h4"
            color={theme.palette.primary.main}
            textAlign={"center"}
            fontWeight={"bold"}
            sx={{ paddingTop: 8, paddingBottom: 2 }}
          >
            {"Liên hệ nhân sự".toUpperCase()}
          </Typography>
        </Grid>
        <Grid xs={8} item>
          <Typography
            variant="h6"
            color={theme.palette.primary.main}
            textAlign={"center"}
            fontWeight={"bold"}
          >
            Nếu có thêm thắc mắc, vui lòng liên hệ với bộ phận nhân sự của chúng
            tôi.
          </Typography>
        </Grid>

        <Grid
          xs={10}
          container
          item
          justifyContent={"center"}
          sx={{ paddingTop: 4, paddingBottom: 4 }}
        >
          <Grid xs={4} item container>
            <Grid
              xs={12}
              item
              justifyContent={"center"}
              container
              sx={{ mb: 2 }}
            >
              <Image src={emailImg} alt="icon" />
            </Grid>
            <Grid xs={12} item justifyContent={"center"} container>
              <Typography
                variant="h5"
                color={theme.palette.primary.main}
                textAlign={"center"}
                fontWeight={"bold"}
              >
                Email
              </Typography>
            </Grid>
            <Grid xs={12} item justifyContent={"center"} container>
              <Typography
                variant="h6"
                color={theme.palette.primary.main}
                textAlign={"center"}
              >
                Gửi email cho chúng tôi ngay hôm nay!
              </Typography>
            </Grid>
            <Grid xs={12} item justifyContent={"center"} container>
              <Typography
                variant="h6"
                color={theme.palette.primary.main}
                textAlign={"center"}
              >
                <u>honghac.trading@gmail.com</u>
              </Typography>
            </Grid>
          </Grid>
          <Grid xs={4} item container>
            <Grid
              xs={12}
              item
              justifyContent={"center"}
              container
              sx={{ mb: 2 }}
            >
              <Image src={phoneImg} alt="icon" />
            </Grid>
            <Grid xs={12} item justifyContent={"center"} container>
              <Typography
                variant="h5"
                color={theme.palette.primary.main}
                textAlign={"center"}
                fontWeight={"bold"}
              >
                Phone
              </Typography>
            </Grid>
            <Grid xs={12} item justifyContent={"center"} container>
              <Typography
                variant="h6"
                color={theme.palette.primary.main}
                textAlign={"center"}
              >
                Hãy gọi cho chúng tôi ngay bây giờ!
              </Typography>
            </Grid>
            <Grid xs={12} item justifyContent={"center"} container>
              <Typography
                variant="h6"
                color={theme.palette.primary.main}
                textAlign={"center"}
              >
                <u>0903667510</u>
              </Typography>
            </Grid>
          </Grid>
          <Grid xs={4} item container>
            <Grid
              xs={12}
              item
              justifyContent={"center"}
              container
              sx={{ mb: 2 }}
            >
              <Image src={locationImg} alt="icon" />
            </Grid>
            <Grid xs={12} item justifyContent={"center"} container>
              <Typography
                variant="h5"
                color={theme.palette.primary.main}
                textAlign={"center"}
                fontWeight={"bold"}
              >
                Showroom
              </Typography>
            </Grid>
            <Grid xs={12} item justifyContent={"center"} container>
              <Typography
                variant="h6"
                color={theme.palette.primary.main}
                textAlign={"center"}
              >
                36 Đường số 2, KDC Cityland Park Hill, Phường 10, Gò Vấp, TP HCM
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
