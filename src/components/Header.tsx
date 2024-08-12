"use client";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import MenuIcon from "@mui/icons-material/Menu";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import PhoneIcon from "@mui/icons-material/Phone";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import WorkIcon from "@mui/icons-material/Work";
import {
  AppBar,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LanguageButton from "./LanguageButton";
import theme from "@/app/(client)/theme";

const StyledAppBar = styled(AppBar)({
  width: "100%",
  backgroundColor: theme.palette.primary.main,
  padding: "16px",
  zIndex: 1,
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  height: "113px",
});

const MenuItem = styled(Typography)({
  color: "white",
  fontWeight: "bold",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
  cursor: "pointer",
  "&.selected": {
    color: "#3F0071",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "10px",
  },
  fontSize: "1.5rem",
  "@media (max-width: 1010px)": {
    fontSize: 0,
  },
});

// Side menu
const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const sideMenu = [
  {
    name: "TRANG CHỦ",
    icon: <HomeIcon />,
    path: "/home",
  },
  {
    name: "SẢN PHẨM",
    icon: <ProductionQuantityLimitsIcon />,
    path: "/products",
  },
  {
    name: "DỊCH VỤ",
    icon: <MiscellaneousServicesIcon />,
    path: "/service",
  },
  {
    name: "TUYỂN DỤNG",
    icon: <WorkIcon />,
    path: "/recruitment",
  },
  {
    name: "HOẠT ĐỘNG",
    icon: <LocalActivityIcon />,
    path: "/activity",
  },
  {
    name: "LIÊN HỆ",
    icon: <PhoneIcon />,
    path: "/contact",
  },
];

const Header = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const isScreenLarge = useMediaQuery("(min-width:1010px)");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSideMenuItemClick = (path: any) => {
    router.push(path);
    handleDrawerClose();
  };

  if (!mounted) return null;

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          flexWrap={"nowrap"}
          xs={12}
        >
          <Grid item xs={6} md={1}>
            <Typography variant="h6">LOGO</Typography>
          </Grid>
          <Grid
            item
            container
            spacing={5}
            alignItems={"center"}
            justifyContent={"center"}
            xs={9}
          >
            <Grid item>
              <MenuItem
                className={
                  usePathname() === "/home" && isScreenLarge ? "selected" : ""
                }
                onClick={() => router.push("/home")}
                variant="body1"
              >
                TRANG CHỦ
              </MenuItem>
            </Grid>
            <Grid item>
              <MenuItem
                className={
                  usePathname() === "/products" && isScreenLarge
                    ? "selected"
                    : ""
                }
                onClick={() => router.push("/products")}
                variant="body1"
              >
                SẢN PHẨM
              </MenuItem>
            </Grid>
            <Grid item>
              <MenuItem
                className={
                  usePathname() === "/service" && isScreenLarge
                    ? "selected"
                    : ""
                }
                onClick={() => router.push("/service")}
                variant="body1"
              >
                DỊCH VỤ
              </MenuItem>
            </Grid>
            <Grid item>
              <MenuItem
                className={
                  usePathname() === "/recruitment" && isScreenLarge
                    ? "selected"
                    : ""
                }
                onClick={() => router.push("/recruitment")}
                variant="body1"
              >
                TUYỂN DỤNG
              </MenuItem>
            </Grid>
            <Grid item>
              <MenuItem
                className={
                  usePathname() === "/activity" && isScreenLarge
                    ? "selected"
                    : ""
                }
                onClick={() => router.push("/activity")}
                variant="body1"
              >
                HOẠT ĐỘNG
              </MenuItem>
            </Grid>
            <Grid item>
              <MenuItem
                className={
                  usePathname() === "/contact" && isScreenLarge
                    ? "selected"
                    : ""
                }
                onClick={() => router.push("/contact")}
                variant="body1"
              >
                LIÊN HỆ
              </MenuItem>
            </Grid>
          </Grid>
          <Grid
            item
            xs={6}
            md={!isScreenLarge && !open ? 2 : 1}
            container
            justifyContent={!open ? "space-between" : "right"}
            alignItems={"center"}
          >
            <Grid item xs={!isScreenLarge && !open ? 6 : 12}>
              <LanguageButton />
            </Grid>
            <Grid item xs={4}>
              {!isScreenLarge && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerOpen}
                  sx={{ ...(open && { display: "none" }), marginLeft: 2 }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Grid>
          </Grid>
        </Grid>
        {!isScreenLarge && open && (
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
              },
            }}
            variant="persistent"
            anchor="right"
            open={open}
          >
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              {sideMenu.map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton
                    onClick={() => handleSideMenuItemClick(item.path)}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
        )}
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;
