'use client';
import { ApiPathEnum } from '@/api/api.path.enum';
import axios from '@/api/axios.instance';
import { items } from '@/app/static';
import Footer from '@/components/Footer';
import { ICategory } from '@/types/categories/categories.interface';
import { IProduct } from '@/types/products/products.interface';
import { ApiResponse } from '@/types/utils/api-response.interface';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Container,
    CssBaseline,
    Grid,
    Stack,
    ThemeProvider,
    Typography,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { CSSProperties, useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import BookIcon from '../../../assets/images/icon/book.png';
import Blog from '../../activity/component/Blog';
import theme from '../../theme';
import GearSvg from './gear-svg';
import ProductBox from './product-box';

export default function ProductComponent() {
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

    const [products, setProducts] = useState<IProduct[]>();
    const [categories, setCategories] = useState<ICategory[]>();

    const getProducts = () => {
        axios.get<ApiResponse<IProduct[]>>(ApiPathEnum.Product).then((res) => {
            if (res.status === 200) {
                setProducts(res.data.data as IProduct[]);
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

    const showProductsCarousel = () => {
        const renderItems = [];
        for (let i = 0; i < items.length; i += sliderItems) {
            if (i % sliderItems === 0) {
                renderItems.push(
                    <Grid
                        container
                        xs={12}
                        p={5}
                        spacing={2}
                        key={`carousel-item-${i}`}
                    >
                        {items.slice(i, i + sliderItems).map((item: any) => (
                            <Grid item xs={4} key={item.id}>
                                <Card key={item.name} variant="outlined">
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image={item.img}
                                        alt={item.alt}
                                    />
                                    <CardContent>
                                        <Stack
                                            direction={'row'}
                                            justifyContent={'center'}
                                        >
                                            <Typography sx={styleProductTitle}>
                                                {item.name}
                                            </Typography>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>,
                );
            }
        }

        return renderItems;
    };

    useEffect(() => {
        getProducts();
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
                                SẢN PHẨM MỚI
                            </Typography>
                        </Grid>
                        <Grid item container p={3} xs={12}>
                            <Grid
                                item
                                container
                                xs={12}
                                sx={{
                                    backgroundColor: theme.palette.primary.main,
                                }}
                                p={5}
                            >
                                <Carousel
                                    NextIcon={<ArrowForwardIosIcon />}
                                    PrevIcon={<ArrowBackIosNewIcon />}
                                    sx={{ width: 1 }}
                                >
                                    {showProductsCarousel().map((x) => x)}
                                </Carousel>
                                <Grid item xs={12} mt={4}>
                                    <Link
                                        href={`/productFilter?isNew=true.html`}
                                    >
                                        <Typography
                                            variant="subtitle2"
                                            textAlign={'center'}
                                        >
                                            <i>
                                                <u>
                                                    <Grid
                                                        item
                                                        container
                                                        alignItems={'center'}
                                                        justifyContent={
                                                            'center'
                                                        }
                                                    >
                                                        Xem thêm{' '}
                                                        <ArrowRightAltIcon />
                                                    </Grid>
                                                </u>
                                            </i>
                                        </Typography>
                                    </Link>
                                </Grid>
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
                                NHÓM SẢN PHẨM
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
                            GIỚI THIỆU SẢN PHẨM TIỀM NĂNG
                        </Typography>
                        <Blog directionImg={'right'} />
                        <Blog directionImg={'left'} />
                        <Blog directionImg={'right'} />
                        <Grid item xs={12} mt={4}>
                            <Link href={`/productFilter?isPotential=true.html`}>
                                <Typography
                                    variant="subtitle2"
                                    textAlign={'center'}
                                    color={theme.palette.primary.main}
                                >
                                    <i>
                                        <u>
                                            <Grid
                                                item
                                                container
                                                alignItems={'center'}
                                                justifyContent={'center'}
                                            >
                                                Xem thêm <ArrowRightAltIcon />
                                            </Grid>
                                        </u>
                                    </i>
                                </Typography>
                            </Link>
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
                                    CHÍNH SÁCH DÀNH CHO ĐẠI LÝ
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
                                    NỘI DUNG MẪU Sản phẩm hết hạn bảo hành (Vui
                                    lòng tra cứu thời hạn bảo qua số 0979 227
                                    227). Sản phẩm đã bị thay đổi, sửa chữa
                                    không thuộc các Trung Tâm Bảo Hành Ủy Quyền
                                    của Hãng. Sản phẩm lắp đặt, bảo trì, sử dụng
                                    không đúng theo hướng dẫn của Nhà sản xuất
                                    gây ra hư hỏng. Sản phẩm trong tình trạng bị
                                    khóa tài khoản cá nhân như: Tài khoản khóa
                                    máy/màn hình, khóa tài khoản trực tuyến
                                    Gmail, iCloud… Khách hàng sử dụng phần mềm,
                                    ứng dụng không chính Hãng, không bản quyền.
                                    Màn hình có từ bốn (04) điểm chết trở lên
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
