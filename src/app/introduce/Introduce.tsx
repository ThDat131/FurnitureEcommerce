import { Box, Grid, Typography } from "@mui/material";
import boxImg from "../assets/images/introduce/box.png";
import settingImg from "../assets/images/introduce/setting.png";
import toolImg from "../assets/images/introduce/tool.png";
import lightImg from "../assets/images/introduce/light.png";
import lineTopLeft from "../assets/images/introduce/topleft.png";
import lineTopRight from "../assets/images/introduce/topright.png";
import lineBottomLeft from "../assets/images/introduce/bottomleft.png";
import lineBottomRight from "../assets/images/introduce/bottomright.png";
import Image from "next/image";

function Item() {
  return (
    <Grid
      xs={12}
      container
      justifyContent={"center"}
      direction={"column"}
      alignItems={"center"}
      minHeight={200}
      sx={{ position: "relative" }}
    >
      <Image
        src={boxImg}
        alt="icon"
        layout="responsive"
        style={{ maxWidth: 100 }}
      />
      <Grid xs={8} container justifyContent={"center"}>
        <Typography
          variant="h6"
          fontWeight={"bold"}
          textAlign={"center"}
          sx={{ marginTop: 2 }}
        >
          HOÀNG HOÁ, SẢN PHẨM THƯƠNG MẠI
        </Typography>
      </Grid>
      <Image
        src={lineTopLeft}
        alt="line"
        layout="responsive"
        style={{
          maxWidth: 500,
          position: "absolute",
          bottom: -80,
          left: 0,
        }}
      />
    </Grid>
  );
}

function Item2() {
  return (
    <Grid
      xs={12}
      container
      justifyContent={"center"}
      direction={"column"}
      alignItems={"center"}
      minHeight={200}
      sx={{ position: "relative" }}
    >
      <Image
        src={toolImg}
        alt="icon"
        layout="responsive"
        style={{ maxWidth: 100 }}
      />
      <Grid xs={8} container justifyContent={"center"}>
        <Typography
          variant="h6"
          fontWeight={"bold"}
          textAlign={"center"}
          sx={{ marginTop: 2 }}
        >
          CHO THUÊ THIẾT BỊ HỘI CHỢ, TRIỂN LÃM
        </Typography>
      </Grid>
      <Image
        src={lineTopRight}
        alt="line"
        layout="responsive"
        style={{ maxWidth: 500, position: "absolute", bottom: -80, right: -10 }}
      />
    </Grid>
  );
}

function Item3() {
  return (
    <Grid
      xs={12}
      container
      justifyContent={"center"}
      direction={"column"}
      alignItems={"center"}
      minHeight={200}
      sx={{ position: "relative" }}
    >
      <Grid xs={8} container justifyContent={"center"}>
        <Typography
          variant="h6"
          fontWeight={"bold"}
          textAlign={"center"}
          sx={{ marginTop: 2, marginBottom: 2 }}
        >
          THI CÔNG LẮP ĐẶT ĐÈN CHIẾU SÁNG, NGUỒN ĐIỆN
        </Typography>
      </Grid>
      <Image
        src={settingImg}
        alt="icon"
        layout="responsive"
        style={{ maxWidth: 100 }}
      />
      <Image
        src={lineBottomLeft}
        alt="line"
        layout="responsive"
        style={{ maxWidth: 500, position: "absolute", top: -80, left: -10 }}
      />
    </Grid>
  );
}

function Item4() {
  return (
    <Grid
      xs={12}
      container
      justifyContent={"center"}
      direction={"column"}
      alignItems={"center"}
      minHeight={200}
      sx={{ position: "relative" }}
    >
      <Grid xs={8} container justifyContent={"center"}>
        <Typography
          variant="h6"
          fontWeight={"bold"}
          sx={{ marginTop: 2, marginBottom: 2 }}
          textAlign={"center"}
        >
          DỊCH VỤ SAU TRIỄN LÃM (LƯU KHO, TÌM KIẾM KHÁCH HÀNG)
        </Typography>
      </Grid>
      <Image
        src={lightImg}
        alt="icon"
        layout="responsive"
        style={{ maxWidth: 100 }}
      />
      <Image
        src={lineBottomRight}
        alt="line"
        layout="responsive"
        style={{ maxWidth: 500, position: "absolute", top: -80, right: -10 }}
      />
    </Grid>
  );
}

function RowItem() {
  return (
    <Grid xs={12} container justifyContent={"space-between"}>
      <Grid xs={5} item>
        <Item />
      </Grid>
      <Grid xs={5} item>
        <Item2 />
      </Grid>
    </Grid>
  );
}

function RowItem2() {
  return (
    <Grid xs={12} container justifyContent={"space-between"}>
      <Grid xs={5} item>
        <Item3 />
      </Grid>
      <Grid xs={5} item>
        <Item4 />
      </Grid>
    </Grid>
  );
}

export default function Introduce() {
  return (
    <Box>
      <Grid xs={12} container justifyContent={"center"}>
        <Grid xs={11} item sx={{ position: "relative", minHeight: "100vh" }}>
          <RowItem />
          <Typography
            variant="h2"
            fontWeight={"bold"}
            sx={{ marginTop: 6, marginBottom: 6 }}
            textAlign={"center"}
          >
            EPIONEER
          </Typography>
          <RowItem2 />
          <Typography
            variant="subtitle1"
            fontWeight={"bold"}
            textAlign={"left"}
            sx={{ position: "absolute", bottom: 30, left: 0 }}
          >
            Epioneer Company Ltd.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
