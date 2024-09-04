'use client';
import {
    Box,
    createTheme,
    Grid,
    Tab,
    Tabs,
    ThemeProvider,
    Typography,
    useMediaQuery,
} from '@mui/material';
import Image from 'next/image';
import { SyntheticEvent, useEffect, useState } from 'react';
import banner from '../../../assets/images/bannerFurniture.jpg';
import banner2 from '../../../assets/images/banner2.jpg';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Banner() {
    const [value, setValue] = useState(0);
    const [hovered, setHovered] = useState(false);

    const theme = createTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    useEffect(() => {}, []);

    theme.typography.h3 = {
        fontSize: '1.2rem',
        '@media (min-width:600px)': {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '2.4rem',
        },
    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    width: '100%',
                    backgroundColor: theme.palette.primary.contrastText,
                    paddingBottom: 6,
                    paddingTop: 6,
                }}
            >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        textColor="secondary"
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                    >
                        <Tab
                            label="NEW"
                            {...a11yProps(0)}
                            sx={{ fontWeight: 'bold' }}
                        />
                        <Tab
                            label="ARRIVAL"
                            {...a11yProps(1)}
                            sx={{ fontWeight: 'bold' }}
                        />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Box
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        sx={{
                            position: 'relative',
                            overflow: 'hidden',
                            cursor: 'pointer',
                        }}
                    >
                        <Grid xs={12}>
                            <Image
                                src={banner}
                                alt="Banner"
                                layout="responsive"
                                style={{
                                    transition:
                                        'transform 0.3s ease, filter 0.3s ease',
                                    transform: hovered
                                        ? 'scale(1.1)'
                                        : 'scale(1)',
                                    filter: hovered
                                        ? 'brightness(0.7)'
                                        : 'brightness(1)',
                                }}
                            />
                            {hovered && (
                                <Typography
                                    variant="h3"
                                    sx={{
                                        position: 'absolute',
                                        top: isMobile ? '50%' : '80%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        color: '#EFE1CE',
                                        textShadow: '0 0 5px black',
                                        zIndex: 1,
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    NỘI THẤT CỦA BẠN, CÂU CHUYỆN CỦA CHÚNG TÔI
                                </Typography>
                            )}
                        </Grid>
                    </Box>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Box
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        sx={{
                            position: 'relative',
                            overflow: 'hidden',
                            cursor: 'pointer',
                        }}
                    >
                        <Grid xs={12}>
                            <Image
                                src={banner2}
                                alt="Banner"
                                layout="responsive"
                                style={{
                                    transition:
                                        'transform 0.3s ease, filter 0.3s ease',
                                    transform: hovered
                                        ? 'scale(1.1)'
                                        : 'scale(1)',
                                    filter: hovered
                                        ? 'brightness(0.7)'
                                        : 'brightness(1)',
                                }}
                            />
                            {hovered && (
                                <Typography
                                    variant="h3"
                                    sx={{
                                        position: 'absolute',
                                        top: isMobile ? '50%' : '80%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        color: '#EFE1CE',
                                        textShadow: '0 0 5px black',
                                        zIndex: 1,
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    LIÊN HỆ NGAY
                                </Typography>
                            )}
                        </Grid>
                    </Box>
                </CustomTabPanel>
            </Box>
        </ThemeProvider>
    );
}
