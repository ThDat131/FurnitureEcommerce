'use client';
import {
    Box,
    Grid,
    ThemeProvider,
    Typography,
    useMediaQuery,
} from '@mui/material';
import Image from 'next/image';
import packageimg from '../../../assets/images/package.png';
import warehouseImg from '../../../assets/images/warehouse.png';
import theme from '../../theme';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function StorageService() {
    const { t } = useTranslation();
    const storageTheme = theme;
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    theme.typography.h4 = {
        fontSize: '1.2rem',
        '@media (min-width:600px)': {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.4rem',
        },
    };

    useEffect(() => {}, []);

    return (
        <ThemeProvider theme={storageTheme}>
            <Box>
                <Grid
                    xs={12}
                    container
                    justifyContent={'space-evenly'}
                    alignItems={'center'}
                    sx={{
                        backgroundColor: storageTheme.palette.primary.main,
                        paddingTop: 12,
                        paddingBottom: isMobile ? 2 : 12,
                    }}
                >
                    <Grid item xs={12} md={3} sx={{ position: 'relative' }}>
                        <Image
                            src={packageimg}
                            alt={'Package image'}
                            layout="responsive"
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                maxWidth: isMobile ? 100 : 400,
                                zIndex: 2,
                            }}
                        />
                    </Grid>
                    <Grid item xs={10} md={3}>
                        <Typography
                            variant="h4"
                            sx={{
                                color: '#EFE1CE',
                                textShadow: '0 0 5px black',
                                zIndex: 1,
                                textAlign: 'center',
                                fontWeight: 'bold',
                                mt: isMobile ? 10 : 0,
                            }}
                        >
                            {t('home.storageService').toUpperCase()}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: '#EFE1CE',
                                textShadow: '0 0 5px black',
                                zIndex: 1,
                                textAlign: 'justify',
                                marginTop: 4,
                            }}
                        >
                            {t('home.storageContent1')}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: '#EFE1CE',
                                textShadow: '0 0 5px black',
                                zIndex: 1,
                                textAlign: 'justify',
                                marginTop: 4,
                            }}
                        >
                            {t('home.storageContent2')}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={10}
                        md={3}
                        justifyContent={'center'}
                        container
                    >
                        <Image
                            src={warehouseImg}
                            alt={'Warehouse image'}
                            layout="responsive"
                            style={{ maxWidth: isMobile ? 300 : 'auto' }}
                        />
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}
