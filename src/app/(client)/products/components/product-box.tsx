import { Card, CardMedia, CardContent, Stack, Typography, Box } from '@mui/material';
import { CSSProperties } from 'react';
import theme from '../../theme';

const ProductBox = ({ data }: { data: any }) => {
  const styleProductTitle: CSSProperties = {
    fontFamily: 'Inika',
    fontSize: '20px',
    fontWeight: 'bold',

  };

  return (
    <Card key={data.name} variant='outlined'
      sx={{
        '&:hover': {
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText
        },
        '&:hover img': {
          transition: 'transform 0.5s ease-in-out',
          transform: 'scale(1.1)',
        }
      }}>
      <CardContent>
        <Box sx={{ overflow: 'hidden' }} height='300px'>
          <CardMedia component='img' image={data.img} alt={data.alt} height={'100%'} width={1} />
        </Box>
        <Stack direction={'row'} justifyContent={'center'} mt={2}>
          <Typography sx={styleProductTitle}>{data.name}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProductBox;
