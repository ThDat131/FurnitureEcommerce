'use client';
import Banner from '@/app/(client)/home/component/Banner';
import EditIcon from '@mui/icons-material/Edit';
import {
    alpha,
    Box,
    Button,
    createTheme,
    Grid,
    PaletteMode,
    Stack,
    Typography,
} from '@mui/material';
import { useState } from 'react';
import Header from '../dashboard/components/Header';
import Navbar from '../dashboard/components/Navbar';
import SideMenu from '../dashboard/components/SideMenu';
import getDashboardTheme from '../dashboard/theme/getDashboardTheme';
import BannerDialog from './component/BannerDialog';

export default function BannerEdit() {
    const [mode, setMode] = useState<PaletteMode>('light');
    const [open, setOpen] = useState(false);
    const [reload, setReload] = useState(true);
    const dashboardTheme = createTheme(getDashboardTheme(mode));

    const toggleColorMode = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <SideMenu />
            <Navbar mode={mode} toggleColorMode={toggleColorMode} />
            {/* Main content */}
            <Box
                component="main"
                sx={(theme) => ({
                    position: { sm: 'relative', md: '' },
                    top: { sm: '48px', md: '0' },
                    height: {
                        sm: 'calc(100vh - 48px)',
                        md: '100vh',
                    },
                    flexGrow: 1,
                    pt: 2,
                    backgroundColor: alpha(theme.palette.background.default, 1),
                    overflow: 'auto',
                })}
            >
                <Stack
                    spacing={2}
                    sx={{
                        alignItems: 'center',
                        mx: 3,
                        pb: 10,
                    }}
                >
                    <Header mode={mode} toggleColorMode={toggleColorMode} />
                    <Typography variant="h4">Quản lý Banner</Typography>
                    {/* <MainGrid /> */}
                    <Box>
                        <Grid
                            container
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid xs={11} item>
                                <Banner />
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        mt: 2,
                                    }}
                                >
                                    <Button
                                        variant="outlined"
                                        startIcon={<EditIcon />}
                                        onClick={() => setOpen(true)}
                                    >
                                        Edit banner
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                        <BannerDialog
                            open={open}
                            reload={reload}
                            setOpen={setOpen}
                            setReload={setReload}
                        />
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
}
