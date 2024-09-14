'use client';
import { Grid, ThemeProvider, Typography } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import articleImg from '../../../assets/images/article3.jpg';
import theme from '../../theme';

export default function Article() {
    const [hovered, setHovered] = useState(false);

    useEffect(() => {}, []);

    return (
        <ThemeProvider theme={theme}>
            <Grid
                xs={12}
                container
                justifyContent={'space-evenly'}
                alignItems={'center'}
                sx={{
                    backgroundColor: theme.palette.primary.contrastText,
                    paddingTop: 6,
                    paddingBottom: 6,
                }}
            >
                <Grid xs={10} md={4} item sx={{ mt: 2, mb: 2 }}>
                    <Typography
                        variant="h4"
                        textAlign={'center'}
                        color={theme.palette.primary.main}
                        sx={{
                            marginBottom: '30px',
                        }}
                    >
                        <i>THAY ĐỔI CÁCH TRẢI NGHIỆM CỦA TRIỂN LÃM</i>
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color={theme.palette.primary.main}
                        sx={{
                            fontWeight: 'lighter',
                            textAlign: 'justify',
                            marginBottom: 2,
                        }}
                    >
                        ePioneer là cầu nối giữa các xưởng và đại lý bán sỉ. Để
                        giúp các đại lý lấy hàng tận nguồn với mức giá phải
                        chăng mà vẫn đảm bảo chất lượng, công ty chúng tôi đóng
                        vai trò làm cầu nối để thực hiện các bước đánh giá ban
                        đầu, hỗ trợ trong việc hậu cần, vận chuyển và đảm bảo
                        hàng hóa đến tay các đại lý một cách nhanh chóng, thuận
                        tiện và nguyên vẹn. Ngoài ra, đối với các sản phẩm có
                        tìm lực lớn, chúng tôi cũng hỗ trợ quảng bá và mở rộng
                        thị trường để tạo điều kiện cho các đại lý, nhà phân
                        phối sỉ dễ dàng tiếp cận người tiêu dùng hơn.
                    </Typography>
                </Grid>
                <Grid
                    xs={10}
                    md={6}
                    item
                    borderRadius={8}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    sx={{
                        position: 'relative',
                        overflow: 'hidden',
                        cursor: 'pointer',
                    }}
                >
                    <Image
                        src={articleImg}
                        alt="Banner"
                        layout="responsive"
                    />
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
