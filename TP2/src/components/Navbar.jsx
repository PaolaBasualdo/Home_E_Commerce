import React from "react";
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

//AGREGADAS PARA EL CARRITO Y EL CONTADOR
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";

//IMPORTO LA FOTO DE PERFIL

import fotoPerfil from "../assets/fotoPerfil.jpg";

//CAMBIO ICONO LOGO
import NatureIcon from "@mui/icons-material/Nature";

const pages = ["Inicio", "Productos", "Contacto"];
const settings = ["Prerfil", "Mi Cuenta", "Mis Pedidos", "Salir"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#A3604D" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/*pantalla grande*/}
          {/*<NatureIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />*/}
          <Box
            sx={{
              backgroundColor: "rgba(232, 221, 203, 0.9)",
              borderRadius: "50%",
              width: 50,
              height: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 4px 10px rgba(93, 64, 55, 0.2)",
              border: "2px solid #6B8E23",
              mr: 2, // margen a la derecha
              display: { xs: "none", md: "flex" }, // se muestra solo en md+
            }}
          >
            <i
              className="fas fa-seedling"
              style={{ fontSize: 24, color: "#6B8E23" }}
            ></i>
          </Box>

          <Typography
            variant="h4"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 6,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".01rem",
              color: "#5D4037",
              textDecoration: "none",
            }}
          >
            TIERRA VIVA
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#5D4037"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/*pantalla celu*/}
          {/*<NatureIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />*/}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              flexGrow: 1,
              mr: 3,
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgba(232, 221, 203, 0.9)",
                borderRadius: "50%",
                width: 40,
                height: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 4px 10px rgba(93, 64, 55, 0.2)",
                border: "2px solid #6B8E23",
                mr: 1.5, // separa el ícono del texto
              }}
            >
              <i
                className="fas fa-seedling"
                style={{ fontSize: 18, color: "#6B8E23" }}
              ></i>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".01rem",
                color: "#5D4037",
                textDecoration: "none",
              }}
            >
              TIERRA VIVA
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#F5F5DC", display: "block", fontSize: "20px"}}
              >
                {page}
              </Button>
            ))}
          </Box>
          {/*SE AGREGA EL ICONO DEL CARRITO Y EL CONTADOR*/}
          <Box
            sx={{ flexGrow: 0, display: "flex", alignItems: "center", gap: 2 }}
          >
            {/*Se usa IconButton por estética, accesibilidad y consistencia.*/}
            <IconButton
              size="large"
              aria-label="show cart items"
              color="inherit"
            >
              <Badge badgeContent={1} color="error">
                {/*UN NUMERO FIJO , DESPUES SE PONE UNA VARIABLE*/}
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            {/*Muestra un mensaje flotante*/}
            <Tooltip title="Configuracion">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="PB" src={fotoPerfil} />
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
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
