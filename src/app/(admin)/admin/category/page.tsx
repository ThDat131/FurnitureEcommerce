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
import SideMenu from "../dashboard/components/SideMenu";
import Navbar from "../dashboard/components/Navbar";
import Header from "../dashboard/components/Header";
import { useState } from "react";
import getDashboardTheme from "../dashboard/theme/getDashboardTheme";
import AddIcon from '@mui/icons-material/Add';
import CategoryDialog from "./component/CategoryDialog";
import { ICategory } from "@/types/categories/categories.interface";
import MainCategory from "./component/MainCategory";

export default function User() {
  const [mode, setMode] = useState<PaletteMode>("light");
  const [open, setOpen] = useState(false);
  const [reload, setReload] = useState(true);
  const [type, setType] = useState<'CREATE' | 'UPDATE'>('CREATE')
  const [selectedCategory, setSelectedCategory] = useState<ICategory>()
  const [showCustomTheme, setShowCustomTheme] = useState(true);
  const dashboardTheme = createTheme(getDashboardTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
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
              <Typography
                variant="h4"
                color={mode === "light" ? "black" : "white"}
              >
                Quản lý danh mục
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<AddIcon />}
                  color="info"
                  onClick={() => {
                    setOpen(true);
                    setType('CREATE')
                  }}
                >
                  Danh mục mới
                </Button>
              </Box>
              <MainCategory reload={reload} setReload={setReload} setType={setType} setSelectedCategory={setSelectedCategory} setOpen={setOpen} />
            </Stack>
          </Box>
        </Box>
      </ThemeProvider>
      <CategoryDialog reload={reload} open={open} setOpen={setOpen} type={type} category={selectedCategory} setReload={setReload} />
    </main>
  );
}
