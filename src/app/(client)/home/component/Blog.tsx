'use client';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  ThemeProvider,
  Typography,
} from '@mui/material';
import theme from '../../theme';
import { blogs } from '@/app/static';
import { useEffect } from 'react';

export default function Blog() {
  useEffect(() => { }, []);

  return (
    <ThemeProvider theme={theme}>
      <Grid
        xs={12}
        sx={{
          paddingBottom: 6,
          backgroundColor: theme.palette.primary.contrastText,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: theme.palette.primary.main,
            zIndex: 1,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          CUNG CẤP GIẢI PHÁP TRIỂN LÃM SÁNG TẠO
        </Typography>
        <Grid
          xs={12}
          container
          justifyContent={"space-evenly"}
          sx={{ mt: 6, mb: 6 }}
        >
          {blogs.map((blog) => (
            <Grid xs={10} md={3} key={blog.id} sx={{ mt: { xs: 4, md: 0 } }}>
              <Card elevation={24}>
                <CardActionArea>
                  <CardMedia
                    sx={{ height: 200 }}
                    image={blog.img.src}
                    title={blog.title}
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
                      {blog.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      textAlign={"justify"}
                      color={theme.palette.primary.main}
                      sx={{ mt: 4 }}
                    >
                      {blog.subtitle}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
