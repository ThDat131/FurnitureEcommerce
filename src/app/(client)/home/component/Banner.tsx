'use client';
import { ApiPathEnum } from '@/api/api.path.enum';
import axios from '@/api/axios.instance';
import { IBanner } from '@/types/products/products.interface';
import {
    Box,
    Grid,
    ThemeProvider
} from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import bannerImg from '../../../assets/images/bannerFurniture.jpg';
import theme from '../../theme';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

export default function Banner() {
    const [banner, setBanner] = useState<IBanner>();

    const getBanner = () => {
        axios.get(`${ApiPathEnum.Banner}?name=homeBannerImg`).then((res) => {
            if (res.status === 200) {
                setBanner(res.data.data[0]);
                console.log('data: ', res.data.data[0])
            }
        });
    };

    useEffect(() => {
        getBanner();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Box>
                <Grid xs={12}>
                    <Image src={banner?.image.url as string} alt="Banner" layout="responsive" width={100} height={100}/>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}
