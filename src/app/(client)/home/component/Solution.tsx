"use client";
import { Grid, ThemeProvider, Typography } from "@mui/material";
import backgroundImg from "../../../assets/images/backgorundHomeComponent.jpg";
import theme from "../../theme";

export default function Soulution() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        justifyContent={"center"}
        xs={12}
        sx={{ backgroundColor: theme.palette.primary.contrastText }}
      >
        <Typography
          variant="h4"
          color={theme.palette.primary.main}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          {"Cung cấp các giải pháp sáng tạo để triển lãm thành công".toUpperCase()}
        </Typography>
        <Grid xs={10} container justifyContent={"center"} item>
          <Typography
            variant="h6"
            color={theme.palette.primary.main}
            textAlign={"justify"}
            sx={{ mt: 4, mb: 4 }}
          >
            Với lợi thế từ Hồng Hạc Group, công ty chúng tôi tự tin có thể cung
            cấp dịch vụ cho thuê cáp điện, máng bảo vệ dây điện và các phụ kiện
            đi kèm cho các công ty dịch vụ sự kiên trong nhà/ngoài trời. Bên
            cạnh đó, ePioneer còn hỗ trợ dịch vụ sau triển lãm cho các đơn vị
            xưởng trong và ngoài nước để tiếp cận khách hàng trong thời gian
            dài, nhằm tìm kiếm nhà phân phối/đại lý tại Việt Nam, nâng cao cơ
            hội hợp tác trong và ngoài nước
          </Typography>
        </Grid>

        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            backgroundImage: `url(${backgroundImg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            mt: 4,
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <Typography
            variant="h4"
            color={theme.palette.primary.contrastText}
            fontWeight={"bold"}
            textAlign={"center"}
            sx={{ p: 2 }}
          >
            {" Giải pháp cho triển lãm và hơn thế nữa".toUpperCase()}
          </Typography>
          <Grid xs={8} item>
            <Typography
              variant="h6"
              color={theme.palette.primary.contrastText}
              fontWeight={"bold"}
              textAlign={"center"}
              sx={{ p: 2 }}
            >
              Liên hệ với chúng tôi ngay hôm nay để thảo luận về nhu cầu triển
              lãm của bạn và nhận báo giá
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
