'use client';
import { Grid, ThemeProvider, Typography } from '@mui/material';
import theme from '../../theme';
import article1Img from '../../../assets/images/article1.png';
import article2Img from '../../../assets/images/article2.png';
import outlineImg from '../../../assets/images/Hexagonoutline.png';
import Image from 'next/image';
import DoneIcon from '@mui/icons-material/Done';
import { useEffect } from 'react';

export default function Service() {
    useEffect(() => {}, []);

    return (
        <ThemeProvider theme={theme}>
            <Grid
                sx={{
                    backgroundColor: theme.palette.primary.contrastText,
                    paddingTop: 6,
                    paddingBottom: 6,
                }}
            >
                <Grid xs={12} container justifyContent={'space-evenly'}>
                    <Grid xs={5} item sx={{ position: 'relative' }}>
                        <Image
                            src={article1Img}
                            alt=""
                            layout="responsive"
                            style={{
                                maxWidth: 500,
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                            }}
                        />
                        <Image src={outlineImg} alt="" layout="responsive" />
                    </Grid>
                    <Grid xs={5} item container alignContent={'center'}>
                        <Grid item xs={12}>
                            <Typography
                                variant="h4"
                                textAlign={'left'}
                                color={theme.palette.primary.main}
                                sx={{ mb: 6 }}
                            >
                                DỊCH VỤ CHO THUÊ THIẾT BỊ
                            </Typography>
                        </Grid>
                        <Grid
                            xs={12}
                            container
                            direction={'row'}
                            alignItems={'center'}
                            sx={{ mt: 4 }}
                            justifyContent={'left'}
                        >
                            <DoneIcon color="primary" fontSize="medium" />
                            <Typography
                                variant="h6"
                                color={theme.palette.primary.main}
                                fontWeight={'bold'}
                                sx={{ ml: 2 }}
                            >
                                Nhanh chóng
                            </Typography>
                        </Grid>
                        <Grid
                            xs={12}
                            container
                            direction={'row'}
                            alignItems={'center'}
                            sx={{ mt: 4 }}
                            justifyContent={'left'}
                        >
                            <DoneIcon color="primary" />
                            <Typography
                                variant="h6"
                                color={theme.palette.primary.main}
                                fontWeight={'bold'}
                                sx={{ ml: 2 }}
                            >
                                Tiết kiệm
                            </Typography>
                        </Grid>
                        <Grid
                            xs={12}
                            container
                            direction={'row'}
                            alignItems={'center'}
                            justifyContent={'left'}
                            sx={{ mt: 4 }}
                        >
                            <DoneIcon color="primary" />
                            <Typography
                                variant="h6"
                                color={theme.palette.primary.main}
                                fontWeight={'bold'}
                                sx={{ ml: 2 }}
                            >
                                Đơn giản
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid xs={12} container justifyContent={'space-evenly'}>
                    <Grid xs={5} item container alignContent={'center'}>
                        <Grid item xs={12}>
                            <Typography
                                variant="h4"
                                textAlign={'right'}
                                color={theme.palette.primary.main}
                                sx={{ mb: 6 }}
                            >
                                DỊCH VỤ SAU TRIỄN LÃM, HỘI CHỢ
                            </Typography>
                        </Grid>
                        <Grid
                            xs={12}
                            container
                            direction={'row'}
                            alignItems={'center'}
                            sx={{ mt: 4 }}
                            justifyContent={'right'}
                        >
                            <Typography
                                variant="h6"
                                color={theme.palette.primary.main}
                                fontWeight={'bold'}
                                sx={{ ml: 2 }}
                            >
                                Hội chợ quá ngắn
                            </Typography>
                        </Grid>
                        <Grid
                            xs={12}
                            container
                            direction={'row'}
                            alignItems={'center'}
                            sx={{ mt: 4 }}
                            justifyContent={'right'}
                        >
                            <Typography
                                variant="h6"
                                color={theme.palette.primary.main}
                                fontWeight={'bold'}
                                sx={{ ml: 2 }}
                            >
                                Giải pháp lâu dài
                            </Typography>
                        </Grid>
                        <Grid
                            xs={12}
                            container
                            direction={'row'}
                            alignItems={'center'}
                            justifyContent={'right'}
                            sx={{ mt: 4 }}
                        >
                            <Typography
                                variant="h6"
                                color={theme.palette.primary.main}
                                fontWeight={'bold'}
                                sx={{ ml: 2 }}
                            >
                                Kết nối với khách hàng
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid xs={5} item sx={{ position: 'relative' }}>
                        <Image
                            src={article2Img}
                            alt=""
                            layout="responsive"
                            style={{
                                maxWidth: 500,
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                            }}
                        />
                        <Image src={outlineImg} alt="" layout="responsive" />
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
