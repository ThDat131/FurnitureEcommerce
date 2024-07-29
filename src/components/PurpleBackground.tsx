import { Box } from '@mui/material';
import Image from 'next/image';
import extBackground from '../app/assets/images/ext-background.png';

const PurpleBackground = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: '#401d59',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      />
      <Image
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          objectFit: 'cover',
          objectPosition: 'left',
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
        alt=''
        src={extBackground}
      />
    </>
  );
};

export default PurpleBackground;
