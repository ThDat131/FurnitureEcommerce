'use client';

import React, { useEffect } from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import LanguageButton from './LanguageButton';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#3F0071',
  padding: '16px',
  zIndex: 1,
});

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const MenuItem = styled(Typography)({
  color: 'white',
  fontWeight: 'bold',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
  cursor: 'pointer',
  '&.selected': {
    color: '#3F0071',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '10px',
  },
});

const Header = () => {
  const router = useRouter();

  return (
    <StyledAppBar position='static'>
      <StyledToolbar>
        <Grid
          container
          justifyContent='space-between'
          alignItems='center'
          flexWrap={'nowrap'}
        >
          <Grid item>
            <Typography variant='h6'>LOGO</Typography>
          </Grid>
          <Grid
            item
            container
            spacing={5}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Grid item>
              <MenuItem
                className={usePathname() === '/home' ? 'selected' : ''}
                onClick={() => router.push('/home')}
                variant='body1'
              >
                TRANG CHỦ
              </MenuItem>
            </Grid>
            <Grid item>
              <MenuItem
                className={usePathname() === '/products' ? 'selected' : ''}
                onClick={() => router.push('/products')}
                variant='body1'
              >
                SẢN PHẨM
              </MenuItem>
            </Grid>
            <Grid item>
              <MenuItem
                className={usePathname() === '/service' ? 'selected' : ''}
                onClick={() => router.push('/service')}
                variant='body1'
              >
                DỊCH VỤ
              </MenuItem>
            </Grid>
            <Grid item>
              <MenuItem
                className={usePathname() === '/recruitment' ? 'selected' : ''}
                onClick={() => router.push('/recruitment')}
                variant='body1'
              >
                TUYỂN DỤNG
              </MenuItem>
            </Grid>
            <Grid item>
              <MenuItem
                className={usePathname() === '/activity' ? 'selected' : ''}
                onClick={() => router.push('/activity')}
                variant='body1'
              >
                HOẠT ĐỘNG
              </MenuItem>
            </Grid>
            <Grid item>
              <MenuItem
                className={usePathname() === '/contact' ? 'selected' : ''}
                onClick={() => router.push('/contact')}
                variant='body1'
              >
                LIÊN HỆ
              </MenuItem>
            </Grid>
          </Grid>
          <Grid item>
            <LanguageButton />
          </Grid>
        </Grid>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
