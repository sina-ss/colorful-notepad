import {
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "@/assets/logo.svg";
import { PrimaryButton } from "@/components/ui/PrimaryButton";
import {
  IoMenu,
  IoHomeOutline,
  IoInformationCircleOutline,
  IoDocumentTextOutline,
} from "react-icons/io5";
import { useState } from "react";

const Layout = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const menuItems = [
    { text: "Home", icon: <IoHomeOutline />, link: "/" },
    {
      text: "About Us",
      icon: <IoInformationCircleOutline />,
      link: "/about-us",
    },
    {
      text: "Terms and Conditions",
      icon: <IoDocumentTextOutline />,
      link: "/terms",
    },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.link}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider sx={{ width: "80%", mx: "auto" }} />
        <ListItem>
          <Link to="/submit" style={{ marginInline: "auto" }}>
            <PrimaryButton
              variant="outlined"
              sx={{ fontWeight: "medium", mt: 1 }}
            >
              Submit
            </PrimaryButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px="5%"
        mt={{ xs: "2rem", md: "3rem", lg: "5.3125rem" }}
      >
        <img src={logo} alt="logo" />
        <Box
          display={{ xs: "none", md: "flex" }}
          alignItems="center"
          gap="2rem"
        >
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#000" : "rgba(0, 0, 0, 0.56)",
              fontWeight: isActive ? "700" : "500",
              letterSpacing: "0.00125rem",
              textDecoration: "none",
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            style={({ isActive }) => ({
              color: isActive ? "#000" : "rgba(0, 0, 0, 0.56)",
              fontWeight: isActive ? "700" : "500",
              letterSpacing: "0.00125rem",
              textDecoration: "none",
            })}
          >
            About Us
          </NavLink>
          <NavLink
            to="/terms"
            style={({ isActive }) => ({
              color: isActive ? "#000" : "rgba(0, 0, 0, 0.56)",
              fontWeight: isActive ? "700" : "500",
              letterSpacing: "0.00125rem",
              textDecoration: "none",
            })}
          >
            Terms and Conditions
          </NavLink>
        </Box>
        <Link to="/submit" style={{textDecoration: "none"}}>
          <PrimaryButton
            variant="outlined"
            sx={{ fontWeight: "medium", display: { xs: "none", md: "block" } }}
          >
            Submit
          </PrimaryButton>
        </Link>
        <IconButton
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={toggleDrawer(true)}
        >
          <IoMenu />
        </IconButton>
        <Drawer open={open} anchor="left" onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </Box>
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
