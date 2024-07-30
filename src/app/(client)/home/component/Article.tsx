"use client";
import { createTheme, Grid, ThemeProvider, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import articleImg from "../../../assets/images/articleImg.jpg";

export default function Article() {
  const [hovered, setHovered] = useState(false);

  const theme = createTheme();

  theme.typography.h4 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
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
      <Grid
        xs={12}
        container
        justifyContent={"space-evenly"}
        alignItems={"center"}
      >
        <Grid
          xs={10}
          md={6}
          item
          borderRadius={8}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          sx={{
            position: "relative",
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          <Image
            src={articleImg}
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
              variant="h4"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "#EFE1CE",
                textShadow: "0 0 5px black",
                zIndex: 1,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Chi tiết
            </Typography>
          )}
        </Grid>
        <Grid xs={10} md={4} item sx={{ mt: 2, mb: 2 }}>
          <Typography
            variant="h4"
            sx={{
              color: "#EFE1CE",
              textShadow: "0 0 5px black",
              fontFamily: "TimesNewRomanPS-ItalicMT",
              marginBottom: "30px",
            }}
          >
            <i>ƯU ĐIỂM CỦA GỖ TRONG THIẾT KẾ NỘI THẤT</i>
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#EFE1CE",
              textShadow: "0 0 5px black",
              fontFamily: "HelveticaNeue",
              fontWeight: "lighter",
              textAlign: "justify",
              marginBottom: 2,
            }}
          >
            Thiết kế bài trí với nội thất gỗ phù hợp đem lại sự thanh lịch và
            tạo nên sự tôn trọng khách. Ở những nơi cần sự nghiêm túc như văn
            phòng làm việc chẳng hạn hầu hết cũng được sử dụng nội thất gỗ.
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#EFE1CE",
              textShadow: "0 0 5px black",
              fontFamily: "HelveticaNeue",
              fontWeight: "lighter",
              textAlign: "justify",
              marginBottom: 2,
            }}
          >
            Xét về độ thân thiện, gỗ được xếp hàng đầu. Một bộ bàn ghế sofa gỗ
            hài hòa cùng đồ dùng trang trí phù hợp tạo nên không gian không chỉ
            thanh lịch mà còn vô cùng thân thiện khi tiếp khách.
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#EFE1CE",
              textShadow: "0 0 5px black",
              fontFamily: "HelveticaNeue",
              fontWeight: "lighter",
              textAlign: "justify",
              marginBottom: 2,
            }}
          >
            Điểm mạnh của sự sang trọng được nhắm đến đầu tiên trong mọi không
            gian, dù bất kì kiến trúc nào đi chăng nữa thì việc sở hữu không
            gian sang trọng cũng khiến chủ nhân tự tin và thể hiện được gu thẩm
            mỹ.
          </Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
