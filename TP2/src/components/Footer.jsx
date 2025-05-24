import React from "react";
import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  Stack,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import CloseIcon from "@mui/icons-material/Close";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#A3604D",
        color: "#F5F5DC",
        py: 4,
       }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          spacing={4}
          alignItems="center"
        >
          {/* Contacto */}
          <Box>
            <Typography variant="h6" gutterBottom>
              Contacto
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column" },
                gap: 2,
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <PhoneIcon color="primary" />
                <Typography>+54 9 1234 5678</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <WhatsAppIcon color="success" />
                <Typography>+54 9 9876 5432</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <MailIcon color="#F5F5DC" />
                <Typography>info@tierraviva.com</Typography>
              </Box>
            </Box>
            {/*} <Typography>Tel: +54 3571 69 2146</Typography>*/}
            
          </Box>

          {/* Enlaces útiles */}
          <Box>
            <Typography variant="h6" gutterBottom>
              Enlaces útiles
            </Typography>
            <Stack spacing={1}>
              <Link href="#" color="inherit" underline="hover">
                Inicio
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Productos
              </Link>
              <Link href="#" color="inherit" underline="hover">
                Contacto
              </Link>
            </Stack>
          </Box>

          {/* Redes sociales */}
          <Box>
            <Typography variant="h6" gutterBottom>
              Redes sociales
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                aria-label="Facebook"
                href="https://facebook.com"
                target="_blank"
                sx={{ color: "#F5F5DC" }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                aria-label="Instagram"
                href="https://instagram.com"
                target="_blank"
                sx={{ color: "#F5F5DC" }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                aria-label="X"
                href="https://x.com"
                target="_blank"
                sx={{ color: "#F5F5DC" }}
              >
                <CloseIcon />
              </IconButton>
              
              
            </Stack>
          </Box>
        </Stack>

        <Typography variant="body2" align="center" sx={{ mt: 4 }}>
          &copy; {new Date().getFullYear()} Tierra Viva. Todos los derechos
          reservados.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
