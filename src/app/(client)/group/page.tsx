"use client";
import { groupProduct } from "@/app/static";
import Footer from "@/components/Footer";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  ThemeProvider,
  Typography,
} from "@mui/material";
import theme from "../theme";

export default function Group() {
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        justifyContent={"space-evenly"}
        xs={12}
        sx={{ backgroundColor: theme.palette.primary.contrastText }}
      >
        <Typography
          variant="h4"
          textAlign={"center"}
          color={theme.palette.primary.main}
          fontWeight={"bold"}
          sx={{ paddingTop: 4, paddingBottom: 4 }}
        >
          ĐÈN NĂNG LƯỢNG MẶT TRỜI
        </Typography>
        <Grid xs={10} item>
          <Grid
            xs={12}
            container
            justifyContent={"space-evenly"}
            sx={{ mt: 6, mb: 6 }}
          >
            {groupProduct.map((group) => (
              <Grid xs={3}>
                <Card elevation={24}>
                  <CardActionArea>
                    <CardMedia
                      sx={{ height: 400 }}
                      image={group.img.src}
                      title={group.title}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        fontWeight={"bold"}
                        component="div"
                        textAlign={"center"}
                        color={theme.palette.primary.main}
                      >
                        {group.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        textAlign={"center"}
                        color={theme.palette.primary.main}
                        sx={{ mt: 4 }}
                      >
                        {group.idProduct}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </ThemeProvider>
  );
}
