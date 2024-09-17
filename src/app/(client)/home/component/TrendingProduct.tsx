'use client';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {
    Box,
    createTheme,
    Grid,
    Paper,
    ThemeProvider,
    Typography,
    useMediaQuery,
} from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import shape from '../../../assets/images/shape/waveImg.png';
import axios from '@/api/axios.instance';
import { ApiResponse } from '@/types/utils/api-response.interface';
import { IProduct } from '@/types/products/products.interface';
import { ApiPathEnum, convertSlug } from '@/api/api.path.enum';
import theme from '../../theme';
import Link from 'next/link';

interface TrendingProductProps {
    items: any[];
}

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
                    <Link
                        href={`/products/${convertSlug(item.name)}-${item._id}`}
                    >
                        <Image
                            src={item.images[0].url}
                            alt={item.alt}
                            layout="responsive"
                            width={300}
                            height={300}
                            style={{
                                transition:
                                    'transform 0.3s ease, filter 0.3s ease',
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
                    </Link>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default function TrendingProduct() {
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const [newProduct, setNewProducts] = useState<IProduct[]>();

    const getNewProduct = () => {
        axios
            .get<ApiResponse<IProduct[]>>(`${ApiPathEnum.Product}?isNew=true`)
            .then((res) => {
                if (res.status === 200) {
                    setNewProducts(res.data.data as IProduct[]);
                    console.log(res.data.data);
                }
            });
    };

    useEffect(() => {
        getNewProduct();
    });

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    backgroundColor: theme.palette.primary.contrastText,
                    color: theme.palette.primary.main,
                }}
            >
                <Grid container justifyContent={'center'} alignItems={'center'}>
                    <Image
                        src={shape}
                        alt="photo"
                        width={isMobile ? 50 : 100}
                    />
                    <Typography
                        variant="h5"
                        sx={{
                            textShadow: '0 0 2px black',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            padding: isMobile ? 2 : 4,
                        }}
                    >
                        <b>SẢN PHẨM NỔI BẬT</b>
                    </Typography>
                    <Image
                        src={shape}
                        alt="photo"
                        width={isMobile ? 50 : 100}
                        style={{ transform: 'scaleX(-1)' }}
                    />
                </Grid>
                <Grid xs={12} justifyContent={'center'} alignItems={'center'}>
                    <Carousel
                        NextIcon={<ChevronRightIcon />}
                        PrevIcon={<ChevronLeftIcon />}
                    >
                        {newProduct?.map((product, i) => (
                            <Item key={i} item={product} isMobile={isMobile} />
                        ))}
                    </Carousel>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}
