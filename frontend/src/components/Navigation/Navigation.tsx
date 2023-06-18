import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/f1_logo.svg";
import { Divider, List, ListItem, ListItemButton } from "@mui/material";

// const pages: string[] = [
//   "Home",
//   "Drivers",
//   "Teams",
//   "Races Results",
//   // "Contructors",
//   // "Circuits",
//   // "Qualifying",
//   // "DHL Fastest Lap Award",
// ];
const pages = [
  { name: "Home", path: "/" },
  { name: "Drivers", path: "/drivers-ranking" },
  { name: "Teams", path: "/teams" },
  { name: "Races Results", path: "/races-result" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function Navigation() {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [drawerMenu, setDrawerMenu] = React.useState<boolean>(false);

  const handleOpenNavMenu = () => {
    setDrawerMenu(true);
  };
  const handleCloseNavMenu = () => {
    setDrawerMenu(false);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#e10600" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              py: 2,
              display: { xs: "none", sm: "none", md: "none", lg: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              src={logo}
              height={40}
              width={160}
              className="App-logo"
              alt="logo"
            />
          </Typography>
          <Box
            component="div"
            sx={{ flexGrow: 1, display: { md: "flex", lg: "none" } }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <div>
              <SwipeableDrawer
                anchor="top"
                open={drawerMenu}
                onClose={handleCloseNavMenu}
                onOpen={handleOpenNavMenu}
              >
                <List>
                  {pages.map((el, index) => {
                    return (
                      <div key={index}>
                        <ListItem>
                          <ListItemButton
                            sx={{ display: "flex", justifyContent: "center" }}
                            onClick={() => navigate(el.path)}
                          >
                            <Typography fontFamily="fontRegular">
                              {el.name}
                            </Typography>
                          </ListItemButton>
                        </ListItem>
                        {index + 1 !== pages.length && <Divider />}
                      </div>
                    );
                  })}
                </List>
              </SwipeableDrawer>
            </div>
          </Box>
          <Box
            component="div"
            sx={{
              flexGrow: 1,
              display: { md: "flex", lg: "none" },
              mr: 1,
            }}
          >
            <img
              src={logo}
              height={40}
              width={160}
              className="App-logo"
              alt="logo"
            />
          </Box>
          <Box
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "none", md: "none", lg: "flex" },
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={() => navigate(page.path)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  fontFamily: "fontRegular",
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box component="div" sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
