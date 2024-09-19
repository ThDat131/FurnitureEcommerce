'use client';
import { ApiPathEnum } from '@/api/api.path.enum';
import axios from '@/api/axios.instance';
import { IProduct } from '@/types/products/products.interface';
import { ApiResponse } from '@/types/utils/api-response.interface';
import {
    Box,
    Grid,
    ThemeProvider,
    Typography,
    useMediaQuery
} from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import shape from '../../../assets/images/shape/waveImg.png';
import ProductBox from '../../products/components/product-box';
import theme from '../../theme';

export default function TrendingProduct() {
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const [newProduct, setNewProducts] = useState<IProduct[]>();

    const getNewProduct = () => {
        axios
            .get<ApiResponse<IProduct[]>>(`${ApiPathEnum.Product}?isNew=true`)
            .then((res) => {
                if (res.status === 200) {
                    setNewProducts(res.data.data as IProduct[]);
                }
            });
    };

    useEffect(() => {
        getNewProduct();
    }, []);

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

                <Grid
                    xs={12}
                    justifyContent={'center'}
                    alignItems={'center'}
                    item
                    container
                >
                    <Grid
                        item
                        container
                        xs={10}
                        justifyContent={'space-evenly'}
                        spacing={2}
                    >
                        {newProduct?.map((product) => (
                            <Grid item xs={12} md={6} lg={3} key={product._id}>
                                <ProductBox data={product} type={'product'} />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}
