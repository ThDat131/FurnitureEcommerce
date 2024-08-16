"use client";
import Footer from "@/components/Footer";
import {
  Box,
  Button,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import contactImg from "../../assets/images/contact.png";
import Image from "next/image";
import theme from "../theme";
import { useEffect, useState } from "react";

const Contact = () => {
  const [isSend, setIsSend] = useState(false);

  const contactTheme = theme;

  const handleSend = () => {
    setIsSend(true);
  };

  useEffect(() => {
    setIsSend(false);
  }, []);

  return (
    <ThemeProvider theme={contactTheme}>
      <Box sx={{ backgroundColor: "#fff" }}>
        {!isSend ? (
          <Grid
            xs={12}
            container
            justifyContent={"space-evenly"}
            sx={{ pt: 6, pb: 6 }}
          >
            <Grid xs={10} md={5} item container justifyContent={"center"}>
              <Grid
                xs={12}
                item
                container
                justifyContent={"center"}
                alignItems={"center"}
              >
                <LocalPhoneOutlinedIcon
                  fontSize="large"
                  sx={{ color: contactTheme.palette.primary.main }}
                />
                <Typography
                  variant="h5"
                  fontWeight={"bold"}
                  color={contactTheme.palette.primary.main}
                  sx={{ ml: 1 }}
                >
                  CONTACT US
                </Typography>
              </Grid>
              <Grid xs={12}>
                <TextField
                  id="name"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  color="primary"
                  placeholder="Ursa Joanna"
                />
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  color="primary"
                  placeholder="example@gmail.com"
                />
                <TextField
                  id="message"
                  label="Message"
                  multiline
                  fullWidth
                  margin="normal"
                  rows={4}
                  color="primary"
                  placeholder="Your message"
                />
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{
                    color: "#fff",
                    backgroundColor: contactTheme.palette.primary.main,
                    "&:hover": {
                      backgroundColor: contactTheme.palette.primary.main,
                    },
                  }}
                  onClick={handleSend}
                >
                  SEND
                </Button>
              </Grid>
            </Grid>
            <Grid xs={10} md={5} item container justifyContent={"center"}>
              <Image
                src={contactImg}
                alt="contact image"
                layout="responesive"
                objectFit="contain"
                style={{ width: "100%", height: "auto" }}
              />
            </Grid>
          </Grid>
        ) : (
          <Grid
            xs={12}
            container
            justifyContent={"space-evenly"}
            sx={{ pt: 6, pb: 6 }}
          >
            <Grid xs={12}>
              <Typography
                variant="h4"
                color={theme.palette.primary.main}
                fontWeight={"bold"}
                textAlign={"center"}
              >
                THÔNG TIN CỦA BẠN ĐÃ GỬI THÀNH CÔNG !
              </Typography>
              <Typography
                variant="h6"
                color={theme.palette.primary.main}
                fontWeight={"bold"}
                textAlign={"center"}
              >
                CHÚNG TÔI SẼ LIÊN HỆ BẠN SỚM NHẤT CÓ THỂ
              </Typography>
            </Grid>
            <Grid xs={12} container justifyContent={"center"}>
              <Grid xs={10} md={5} item container justifyContent={"center"}>
                <Image
                  src={contactImg}
                  alt="contact image"
                  layout="responesive"
                  objectFit="contain"
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
            </Grid>
            <Grid xs={12}>
              <Typography
                variant="h4"
                color={theme.palette.primary.main}
                fontWeight={"bold"}
                textAlign={"center"}
              >
                CẢM ƠN BẠN !
              </Typography>
              <Typography
                variant="h6"
                color={theme.palette.primary.main}
                textAlign={"center"}
              >
                TIẾP TỤC KHÁM PHÁ NHỮNG SẢN PHẨM VÀ DỊCH VỤ CỦA EPIONEER
              </Typography>
            </Grid>
          </Grid>
        )}

        <Grid xs={12}>
          <Footer />
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default Contact;
