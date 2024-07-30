import Footer from "@/components/Footer";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import contactImg from "../../assets/images/contact.png";
import Image from "next/image";

const Contact = () => {
  return (
    <Box sx={{ backgroundColor: "#fff" }}>
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
              sx={{ color: "#401D59" }}
            />
            <Typography
              variant="h5"
              fontWeight={"bold"}
              color={"#401D59"}
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
              color="secondary"
              placeholder="Ursa Joanna"
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              color="secondary"
              placeholder="example@gmail.com"
            />
            <TextField
              id="message"
              label="Message"
              multiline
              fullWidth
              margin="normal"
              rows={4}
              color="secondary"
              placeholder="Your message"
            />
            <Button
              variant="contained"
              fullWidth
              size="large"
              sx={{ color: "#fff", backgroundColor: "#401D59" }}
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
      <Grid xs={12}>
        <Footer />
      </Grid>
    </Box>
  );
};

export default Contact;
