'use client';
import { Grid, ThemeProvider, Typography } from '@mui/material';
import theme from '../../theme';
import toolImg from '../../../assets/images/articleTool.png';
import logoImg from '../../../assets/images/articleLogo.jpg';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Welcome() {
    useEffect(() => {}, []);

    return (
        <ThemeProvider theme={theme}>
            <Grid
                xs={12}
                container
                justifyContent={'space-evenly'}
                sx={{
                    backgroundColor: theme.palette.primary.contrastText,
                    paddingTop: 6,
                    paddingBottom: 6,
                }}
            >
                <Grid md={5} xs={12} item>
                    <Image src={toolImg} alt="" layout="responsive" />
                </Grid>
                <Grid
                    md={5}
                    xs={12}
                    item
                    container
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Grid xs={8} item>
                        <Typography
                            variant="h4"
                            color={theme.palette.primary.contrastText}
                            textAlign={'center'}
                            sx={{
                                backgroundColor: theme.palette.primary.main,
                                borderRadius: 8,
                                padding: 2,
                            }}
                        >
                            CHÀO MỪNG ĐẾN EPIONEER
                        </Typography>
                    </Grid>
                    <Grid xs={12} item>
                        <Typography
                            variant="h6"
                            color={theme.palette.primary.main}
                            textAlign={'center'}
                        >
                            Chúng tôi cung cấp các giải pháp sáng tạo và chất
                            lượng
                        </Typography>
                    </Grid>
                    <Grid xs={1.5} item>
                        <Image src={logoImg} alt="" layout="responsive" />
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
