'use client';
import { ApiPathEnum, convertSlug } from '@/api/api.path.enum';
import axios from '@/api/axios.instance';
import Fancybox from '@/components/FancyBox';
import Footer from '@/components/Footer';
import { ICategory } from '@/types/categories/categories.interface';
import { IProduct } from '@/types/products/products.interface';
import { ApiResponse } from '@/types/utils/api-response.interface';
import {
    Box,
    CardMedia,
    Container,
    CssBaseline,
    Grid,
    Stack,
    ThemeProvider,
    Typography,
    useMediaQuery,
} from '@mui/material';
import Image from 'next/image';
import { CSSProperties, useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import BookIcon from '../../../assets/images/icon/book.png';
import Blog from '../../activity/component/Blog';
import GearSvg from './gear-svg';
import ProductBox from './product-box';
import theme from '../../theme';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import NewProductComponent from './new-product-box';

export default function ProductComponent() {
    const isDownMdScreen = useMediaQuery(theme.breakpoints.down('md'));
    const sliderItems = isDownMdScreen ? 1 : 3;
    const { t } = useTranslation();

    const styleTitle: CSSProperties = {
        fontFamily: 'Kanit',
        fontSize: '30px',
        color: theme.palette.primary.main,
        fontWeight: 'bold',
    };

    const [products, setProducts] = useState<IProduct[]>();
    const [newProducts, setNewProducts] = useState<IProduct[]>();
    const [potentialProducts, setPotentialProducts] = useState<IProduct[]>();
    const [categories, setCategories] = useState<ICategory[]>();

    const getProducts = () => {
        axios.get<ApiResponse<IProduct[]>>(ApiPathEnum.Product).then((res) => {
            if (res.status === 200) {
                setProducts(res.data.data as IProduct[]);
            }
        });
    };

    const getNewProduct = () => {
        axios
            .get<ApiResponse<IProduct[]>>(`${ApiPathEnum.Product}?isNew=true`)
            .then((res) => {
                if (res.status === 200) {
                    setNewProducts(res.data.data as IProduct[]);
                }
            });
    };

    const getPotentialProduct = () => {
        axios
            .get<
                ApiResponse<IProduct[]>
            >(`${ApiPathEnum.Product}?isPotential=true`)
            .then((res) => {
                if (res.status === 200) {
                    setPotentialProducts(res.data.data as IProduct[]);
                }
            });
    };

    const getCategories = () => {
        axios
            .get<ApiResponse<ICategory[]>>(ApiPathEnum.Category)
            .then((res) => {
                if (res.status === 200) {
                    setCategories(res.data.data as ICategory[]);
                }
            });
    };

    useEffect(() => {
        getProducts();
        getNewProduct();
        getPotentialProduct();
        getCategories();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ backgroundColor: '#fff', width: 1 }}>
                <Container sx={{ backgroundColor: '#fff', width: 1 }}>
                    <Grid container xs={12}>
                        <Grid
                            item
                            container
                            justifyContent={'center'}
                            xs={12}
                            alignItems={'center'}
                            my={3}
                        >
                            <Grid
                                item
                                xs={12}
                                mb={2}
                                justifyContent={'center'}
                                container
                            >
                                <svg
                                    width="550"
                                    height="60"
                                    viewBox="0 0 550 60"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2 4.79166L32.8476 57.6907L108.347 57.4427L138.173 4.3445L212.173 4.10148L238.346 57.0158L312.346 56.7728L328.25 3.72027L408.461 2.45665L438.345 56.359L517.671 56.0985L547.494 2"
                                        stroke="#401D59"
                                        strokeWidth="4"
                                    />
                                </svg>
                            </Grid>
                            <Typography sx={styleTitle}>
                                {t('product.newProduct')}
                            </Typography>
                        </Grid>
                        <NewProductComponent newProducts={newProducts} />
                        <Grid
                            item
                            container
                            justifyContent={'center'}
                            xs={12}
                            alignItems={'center'}
                            my={3}
                        >
                            <Grid
                                item
                                xs={12}
                                mb={2}
                                justifyContent={'center'}
                                container
                            >
                                <svg
                                    width="550"
                                    height="60"
                                    viewBox="0 0 550 60"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M2 4.79166L32.8476 57.6907L108.347 57.4427L138.173 4.3445L212.173 4.10148L238.346 57.0158L312.346 56.7728L328.25 3.72027L408.461 2.45665L438.345 56.359L517.671 56.0985L547.494 2"
                                        stroke="#401D59"
                                        strokeWidth="4"
                                    />
                                </svg>
                            </Grid>
                            <Typography sx={styleTitle}>
                                {t('product.groupProduct')}
                            </Typography>
                        </Grid>
                        <Grid item container xs={12} spacing={2}>
                            {categories?.map((category) => (
                                <Grid
                                    item
                                    xs={12}
                                    md={6}
                                    lg={3}
                                    key={category._id}
                                >
                                    <ProductBox
                                        data={category}
                                        type={'category'}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        justifyContent={'center'}
                        xs={12}
                        alignItems={'center'}
                        my={3}
                    >
                        <Grid
                            item
                            xs={12}
                            mb={2}
                            justifyContent={'center'}
                            container
                        >
                            <GearSvg />
                        </Grid>
                        <Typography sx={styleTitle}>
                            {t('product.introducePotentialProduct')}
                        </Typography>
                        <Grid item xs={12}>
                            {potentialProducts?.map((product) => (
                                <Link
                                    href={`/products/${convertSlug(product.name)}-${product._id}`}
                                    key={product._id}
                                >
                                    <Blog
                                        directionImg={'left'}
                                        data={product}
                                        type={'PRODUCT'}
                                        key={product._id}
                                    />
                                </Link>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        justifyContent={'center'}
                        xs={12}
                        alignItems={'center'}
                        my={3}
                    >
                        <Grid
                            item
                            container
                            justifyContent={'center'}
                            xs={12}
                            alignItems={'center'}
                            my={3}
                        >
                            <Grid
                                item
                                xs={12}
                                mb={2}
                                justifyContent={'center'}
                                container
                            >
                                <GearSvg />
                            </Grid>
                            <Stack
                                direction={'row'}
                                spacing={2}
                                alignItems={'center'}
                                mb={3}
                            >
                                <Image alt="book" src={BookIcon} />
                                <Typography sx={styleTitle}>
                                    {t('product.policyForAgency')}
                                </Typography>
                            </Stack>
                            <Box>
                                <Typography
                                    sx={{
                                        ...styleTitle,
                                        fontWeight: 'none',
                                        fontSize: 20,
                                    }}
                                >
                                    {t('product.policyDetail')}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
                <Grid xs={12}>
                    <Footer />
                </Grid>
            </Box>
        </ThemeProvider>
    );
}
