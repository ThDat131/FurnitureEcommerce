'use client';
import { items } from '@/app/static';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Grid, Paper, ThemeProvider, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import theme from '../../theme';

function Item({ item, isMobile }: any) {
    const [hovered, setHovered] = useState(false);

    return (
        <Paper>
            <Grid
                xs={12}
                container
                justifyContent={'space-evenly'}
                alignItems={'center'}
            >
                <Grid xs={10} md={4}>
                    <Typography
                        variant="h4"
                        sx={{
                            color: '#401d59',
                            marginBottom: '30px',
                            textAlign: isMobile ? 'center' : 'right',
                            fontWeight: 'bold',
                        }}
                    >
                        <i>{item.name.toUpperCase()}</i>
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: '#401d59',
                            fontWeight: 'lighter',
                            textAlign: 'justify',
                            marginBottom: 2,
                        }}
                    >
                        {item.description}
                    </Typography>
                </Grid>
                <Grid
                    xs={10}
                    md={6}
                    sx={{
                        borderRadius: 8,
                        overflow: 'hidden',
                        position: 'relative',
                        cursor: 'pointer',
                    }}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <Image
                        src={item.img}
                        alt={item.alt}
                        unoptimized
                        layout="responsive"
                        width={300}
                        height={300}
                        style={{
                            transition: 'transform 0.3s ease, filter 0.3s ease',
                            transform: hovered ? 'scale(1.1)' : 'scale(1)',
                            filter: hovered
                                ? 'brightness(0.7)'
                                : 'brightness(1)',
                        }}
                    />
                    {hovered && (
                        <Typography
                            variant="h4"
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                color: '#EFE1CE',
                                zIndex: 1,
                                textAlign: 'center',
                                fontWeight: 'bold',
                            }}
                        >
                            Chi tiết
                        </Typography>
                    )}
                </Grid>
            </Grid>
        </Paper>
    );
}

export default function RecruitmentComponent() {
    return (
        <ThemeProvider theme={theme}>
            <Grid
                xs={12}
                justifyContent={'center'}
                alignItems={'center'}
                sx={{ backgroundColor: theme.palette.primary.contrastText }}
            >
                <Typography
                    variant="h4"
                    color={theme.palette.primary.main}
                    textAlign={'center'}
                    fontWeight={'bold'}
                    sx={{ paddingTop: 4, paddingBottom: 2 }}
                >
                    THÔNG TIN TUYỂN DỤNG
                </Typography>
                <Carousel
                    NextIcon={<ChevronRightIcon />}
                    PrevIcon={<ChevronLeftIcon />}
                >
                    {items.map((item, i) => (
                        <Item key={i} item={item} />
                    ))}
                </Carousel>
            </Grid>
        </ThemeProvider>
    );
}
