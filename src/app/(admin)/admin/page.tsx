'use client';
import {
    PaletteMode,
    Stack,
    Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import { useState } from 'react';
import Header from './dashboard/components/Header';
import Navbar from './dashboard/components/Navbar';
import SideMenu from './dashboard/components/SideMenu';

export default function Home() {
    const [mode, setMode] = useState<PaletteMode>('light');

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
                    <Typography variant="h4">
                        Chào mừng đến với trang Quản trị
                    </Typography>
                </Stack>
            </Box>
        </Box>
    );
}
