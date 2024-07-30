import { Card, CardMedia, CardContent, Stack, Typography } from '@mui/material';
import { CSSProperties } from 'react';

const ProductBox = ({ data }: { data: any }) => {
  const styleProductTitle: CSSProperties = {
    fontFamily: 'Inika',
    fontSize: '20px',
    fontWeight: 'bold',
  };

  return (
    <Card key={data.name} variant='outlined'>
      <CardMedia component='img' height='300' image={data.img} alt={data.alt} />
      <CardContent>
        <Stack direction={'row'} justifyContent={'center'}>
          <Typography sx={styleProductTitle}>{data.name}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProductBox;
