import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/navigation";
import * as React from "react";

const mainListItems = [
  { text: "Home", icon: <HomeRoundedIcon />, path: "/" },
  { text: "User", icon: <PeopleRoundedIcon />, path: "/user" },
  { text: "Product", icon: <ProductionQuantityLimitsIcon />, path: "/product" },
  { text: "Category", icon: <AssignmentRoundedIcon />, path: "/category" },
];

const secondaryListItems = [
  { text: "Settings", icon: <SettingsRoundedIcon /> },
  { text: "About", icon: <InfoRoundedIcon /> },
  { text: "Feedback", icon: <HelpRoundedIcon /> },
];

export default function MenuContent() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const router = useRouter();

  const handleListItemClick = (index: number, path: string) => {
    setSelectedIndex(index);
    router.push(path);
  };

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense>
        {mainListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              selected={selectedIndex === index}
              onClick={() => handleListItemClick(index, item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
