"use client";
import {
  createTheme,
  CssBaseline,
  PaletteMode,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import { useEffect, useState } from "react";
import Header from "./dashboard/components/Header";
import MainGrid from "./dashboard/components/MainGrid";
import Navbar from "./dashboard/components/Navbar";
import SideMenu from "./dashboard/components/SideMenu";
import getDashboardTheme from "./dashboard/theme/getDashboardTheme";

export default function Home() {
  const [mode, setMode] = useState<PaletteMode>("light");
  const dashboardTheme = createTheme(getDashboardTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <main>
      <ThemeProvider theme={dashboardTheme}>
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
              <Typography
                variant="h4"
              >
                Chào mừng đến với trang Quản trị
              </Typography>
              {/* <MainGrid /> */}
            </Stack>
          </Box>
        </Box>
      </ThemeProvider>
    </main>
  );
}
