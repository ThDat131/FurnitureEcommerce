"use client";
import {
  createTheme,
  CssBaseline,
  PaletteMode,
  Stack,
  ThemeProvider,
} from "@mui/material";
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import { useState } from "react";
import Header from "./dashboard/components/Header";
import MainGrid from "./dashboard/components/MainGrid";
import Navbar from "./dashboard/components/Navbar";
import SideMenu from "./dashboard/components/SideMenu";
import ToggleCustomTheme from "./dashboard/internals/components/ToggleCustomTheme";
import getDashboardTheme from "./dashboard/theme/getDashboardTheme";

export default function Home() {
  const [mode, setMode] = useState<PaletteMode>("light");
  const [showCustomTheme, setShowCustomTheme] = useState(true);
  const dashboardTheme = createTheme(getDashboardTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  return (
    <main>
      <ThemeProvider theme={showCustomTheme ? dashboardTheme : defaultTheme}>
        <CssBaseline />
        <Box sx={{ display: "flex" }}>
          <SideMenu />
          <Navbar mode={mode} toggleColorMode={toggleColorMode} />
          {/* Main content */}
          <Box
            component="main"
            sx={(theme) => ({
              position: { sm: "relative", md: "" },
              top: { sm: "48px", md: "0" },
              height: { sm: "calc(100vh - 48px)", md: "100vh" },
              flexGrow: 1,
              pt: 2,
              backgroundColor: alpha(theme.palette.background.default, 1),
              overflow: "auto",
            })}
          >
            <Stack
              spacing={2}
              sx={{
                alignItems: "center",
                mx: 3,
                pb: 10,
              }}
            >
              <Header mode={mode} toggleColorMode={toggleColorMode} />
              <MainGrid />
            </Stack>
          </Box>
        </Box>
      </ThemeProvider>
    </main>
  );
}
