'use client';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import getDashboardTheme from '@/app/(admin)/admin/dashboard/theme/getDashboardTheme';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const theme = createTheme(getDashboardTheme('light'));
    return (
        <main>
            <ThemeProvider theme={theme}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <CssBaseline />
                    {children}
                </LocalizationProvider>
            </ThemeProvider>
        </main>
    );
}
