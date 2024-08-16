"use client";
import { Box, Grid, ThemeProvider, Typography } from "@mui/material";
import backgroundImg from "../../../assets/images/recruitment.jpg";
import theme from "../../theme";

export default function Banner() {
  return (
    <ThemeProvider theme={theme}>
      <Grid xs={12}>
        <Box>
          <Grid
            container
            sx={{
              backgroundImage: `url(${backgroundImg.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            <Grid xs={6} item container justifyContent={"left"}>
              <Typography
                variant="h6"
                color={theme.palette.primary.main}
                textAlign={"center"}
              >
                Khám phá những cơ hội nghề nghiệp thú vị tại ePioneer thúc đẩy
                tính toàn diện và phát triển cá nhân
              </Typography>
              <Grid xs={12}>
                <Typography
                  variant="h4"
                  color={theme.palette.primary.main}
                  textAlign={"center"}
                  fontWeight={"bold"}
                  sx={{ paddingTop: 4, paddingBottom: 4 }}
                >
                  MỞ KHOÁ TIỀM NĂNG CỦA BẠN
                </Typography>
              </Grid>
              <Typography
                variant="h6"
                color={theme.palette.primary.main}
                textAlign={"center"}
              >
                Hãy tham gia cùng chúng tôi và phát huy hết tiềm năng của bạn
                trong một môi trường năng động và hỗ trợ.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </ThemeProvider>
  );
}
