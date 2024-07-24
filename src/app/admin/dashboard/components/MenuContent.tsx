import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import { usePathname, useRouter } from "next/navigation";
import * as React from "react";

const mainListItems = [
  { text: "Home", icon: <HomeRoundedIcon />, path: "/admin" },
  { text: "User", icon: <PeopleRoundedIcon />, path: "/admin/user" },
  { text: "Product", icon: <ProductionQuantityLimitsIcon />, path: "/admin/product" },
  { text: "Category", icon: <AssignmentRoundedIcon />, path: "/admin/category" },
];

export default function MenuContent() {
  const router = useRouter();
  const pathname = usePathname();

  const handleListItemClick = (path: string) => {
    router.push(path);
  };

  const selectedIndex = React.useMemo(() => {
    const matchingItem = mainListItems.find((item) => item.path === pathname);
    return matchingItem ? mainListItems.indexOf(matchingItem) : 0;
  }, [pathname]);

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              selected={selectedIndex === index}
              onClick={() => handleListItemClick(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
