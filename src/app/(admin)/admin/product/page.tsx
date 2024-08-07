"use client";
import {
  alpha,
  Box,
  Button,
  createTheme,
  CssBaseline,
  PaletteMode,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Header from "../dashboard/components/Header";
import Navbar from "../dashboard/components/Navbar";
import SideMenu from "../dashboard/components/SideMenu";
import getDashboardTheme from "../dashboard/theme/getDashboardTheme";
import MainProduct from "./component/MainProduct";
import AddIcon from '@mui/icons-material/Add';

export default function User() {
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
                color={mode === "light" ? "black" : "white"}
              >
                Product Management
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<AddIcon />}
                  color="info"
                >
                  New product
                </Button>
              </Box>
              <MainProduct />
            </Stack>
          </Box>
        </Box>
      </ThemeProvider>
    </main>
  );
}
