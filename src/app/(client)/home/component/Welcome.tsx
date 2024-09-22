'use client';
import { Grid, ThemeProvider, Typography } from '@mui/material';
import theme from '../../theme';
import toolImg from '../../../assets/images/articleTool.png';
import logoImg from '../../../assets/images/articleLogo.jpg';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function Welcome() {
    const {t} = useTranslation()

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
                    <Image src={toolImg} alt="tool" layout="responsive" />
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
                            {t('home.welcome').toUpperCase()}
                        </Typography>
                    </Grid>
                    <Grid xs={12} item>
                        <Typography
                            variant="h6"
                            color={theme.palette.primary.main}
                            textAlign={'center'}
                        >
                            {t('home.weProvideCreativeSolution')}
                        </Typography>
                    </Grid>
                    <Grid xs={1.5} item>
                        <Image src={logoImg} alt="sample" layout="responsive" />
                    </Grid>0
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
