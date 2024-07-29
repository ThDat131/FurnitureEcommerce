'use client';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Stack,
  ThemeProvider,
  Typography,
} from '@mui/material';
import theme from '../theme';
import { CSSProperties, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { items } from '@/app/static';
const Products = () => {
  const sliderItems = 3;

  const styleTitle: CSSProperties = {
    fontFamily: 'Kanit',
    fontSize: '30px',
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  };

  const styleProductTitle: CSSProperties = {
    fontFamily: 'Inika',
    fontSize: '20px',
    fontWeight: 'bold',
  };

  const showProductsCarousel = () => {
    const renderItems = [];
    for (let i = 0; i < items.length; i += sliderItems) {
      if (i % sliderItems === 0) {
        renderItems.push(
          <Grid container xs={12} p={5} spacing={2}>
            {items.slice(i, i + sliderItems).map((x: any) => (
              <Grid item xs={4} key={x.name}>
                <Card key={x.name} variant='outlined'>
                  <CardMedia
                    component='img'
                    height='300'
                    image={x.img}
                    alt={x.alt}
                  />
                  <CardContent>
                    <Stack direction={'row'} justifyContent={'center'}>
                      <Typography sx={styleProductTitle}>{x.name}</Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        );
      }
    }

    return renderItems;
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid container>
        <Grid
          item
          container
          justifyContent={'center'}
          xs={12}
          alignItems={'center'}
          my={3}
        >
          <Grid item xs={12} mb={2} justifyContent={'center'} container>
            <svg
              width='550'
              height='60'
              viewBox='0 0 550 60'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M2 4.79166L32.8476 57.6907L108.347 57.4427L138.173 4.3445L212.173 4.10148L238.346 57.0158L312.346 56.7728L328.25 3.72027L408.461 2.45665L438.345 56.359L517.671 56.0985L547.494 2'
                stroke='#401D59'
                stroke-width='4'
              />
            </svg>
          </Grid>
          <Typography sx={styleTitle}>SẢN PHẨM MỚI</Typography>
        </Grid>
        <Grid item container p={3} xs={12}>
          <Grid
            item
            container
            xs={12}
            sx={{ backgroundColor: theme.palette.primary.main }}
            p={5}
          >
            <Carousel
              NextIcon={<ArrowForwardIosIcon />}
              PrevIcon={<ArrowBackIosNewIcon />}
              sx={{ width: 1 }}
            >
              {showProductsCarousel().map((x) => x)}
            </Carousel>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Products;
