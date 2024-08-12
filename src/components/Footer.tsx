import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { MyGoogleMap } from "./GoogleMap";

export default function Footer() {
  return (
    <Box>
      <Grid
        xs={12}
        container
        justifyContent={"center"}
        sx={{
          backgroundColor: "#EFE1CE",
          color: "#401d59",
          paddingBottom: 5,
          paddingTop: 5,
        }}
      >
        <Grid xs={10} item container>
          <Grid item xs={12}>
            <Divider>
              <Stack
                direction="row"
                divider={<Box sx={{ width: 24 }} />}
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  sx={{
                    cursor: "pointer",
                    transition: "all 0.2 ease",
                    "&:hover": {
                      transform: "scale(1.2)",
                      opacity: 0.8,
                    },
                  }}
                >
                  <FacebookIcon />
                </Box>
                <Box
                  sx={{
                    cursor: "pointer",
                    transition: "all 0.2 ease",
                    "&:hover": {
                      transform: "scale(1.2)",
                      opacity: 0.8,
                    },
                  }}
                >
                  <InstagramIcon />
                </Box>
                <Box
                  sx={{
                    cursor: "pointer",
                    transition: "all 0.2 ease",
                    "&:hover": {
                      transform: "scale(1.2)",
                      opacity: 0.8,
                    },
                  }}
                >
                  <LinkedInIcon />
                </Box>
                <Box
                  sx={{
                    cursor: "pointer",
                    transition: "all 0.2 ease",
                    "&:hover": {
                      transform: "scale(1.2)",
                      opacity: 0.8,
                    },
                  }}
                >
                  <XIcon />
                </Box>
                <Box
                  sx={{
                    cursor: "pointer",
                    transition: "all 0.2 ease",
                    "&:hover": {
                      transform: "scale(1.2)",
                      opacity: 0.8,
                    },
                  }}
                >
                  <YouTubeIcon />
                </Box>
              </Stack>
            </Divider>
            <Typography
              textAlign={"center"}
              my={4}
              variant="h6"
            >
              LOGO
            </Typography>
            <Grid xs={12} container item justifyContent={"space-evenly"}>
              <Grid
                container
                justifyContent={"space-evenly"}
                spacing={4}
              >
                <Grid item xs={12} md={4}>
                  <Typography
                    textAlign={"left"}
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                  >
                    THÔNG TIN LIÊN HỆ
                  </Typography>
                  <Typography variant="body2">
                    <Box component="span" fontWeight="bold">
                      Địa chỉ:
                    </Box>{" "}
                    Địa chỉ cụ thể của công ty bạn
                  </Typography>
                  <Typography variant="body2">
                    <Box component="span" fontWeight="bold">
                      Thời gian làm việc:
                    </Box>{" "}
                    Thứ 2 - Thứ 6, 8h00 - 17h00
                  </Typography>
                  <Typography variant="body2">
                    <Box component="span" fontWeight="bold">
                      Hotline:
                    </Box>{" "}
                    <Link href="tel:0123456789">0123 456 789</Link>
                  </Typography>
                  <Typography variant="body2">
                    <Box component="span" fontWeight="bold">
                      Email:
                    </Box>{" "}
                    <Link href="mailto:contact@example.com">
                      contact@example.com
                    </Link>
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography
                    textAlign={"left"}
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                  >
                    Về EPIONEER
                  </Typography>
                  <Typography variant="body2">
                    Sản phẩm hàng hoá, thương mại.
                  </Typography>
                  <Typography variant="body2">
                    Dịch vụ cho thuê trang thiết bị hội chợ, triễn lãm.
                  </Typography>
                  <Typography variant="body2">
                    Dịch vụ thi công lắp đặt đèn chiếu sáng, nguồn điện.
                  </Typography>
                  <Typography variant="body2">
                    Dịch vụ sau triễn lãm.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                  >
                    GOOGLE MAP
                  </Typography>
                  <Grid xs={12} md={12}>
                    <MyGoogleMap />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
