import { Box, Container } from "@mui/material";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "@/assets/logo.svg";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

const Layout = () => {
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
        <Box display="flex" alignItems="center" gap="2rem">
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#000" : "rgba(0, 0, 0, 0.56)",
              fontWeight: isActive ? "700" : "500",
              letterSpacing: "0.00125rem",
              textDecoration: "none", // Removes underline from links
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
        <Link to="/submit">
          <PrimaryButton variant="outlined" sx={{ fontWeight: "medium" }}>
            Submit
          </PrimaryButton>
        </Link>
      </Box>
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
