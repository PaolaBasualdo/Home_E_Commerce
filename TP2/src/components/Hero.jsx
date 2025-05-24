import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import ciruelasImg from "../assets/ciruelas.jpg";

function Hero() {
  return (
    <Box sx={{ backgroundColor: "#DDEAC3", py: { xs: 4, md: 8 } }}>
      <Container
        sx={{
          border: "2px solid #6B8E23",
          borderRadius: "8px",
          px: { xs: 2, sm: 4, md: 6 },
          py: { xs: 4, md: 6 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 3, md: 4 },
          }}
        >
          {/* Imagen */}
          <Box
            component="img"
            src={ciruelasImg}
            alt="Ciruelas frescas"
            sx={{
              width: { xs: "100%", sm: "80%", md: "300px" },
              borderRadius: 4,
              boxShadow: 3,
              maxWidth: "100%",
              objectFit: "cover",
            }}
          />

          {/* Texto y botones */}
          <Box
            sx={{
              maxWidth: 500,
              display: "flex",
              flexDirection: "column",
              gap: { xs: 2, md: 3 },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#5D4037",
                fontSize: { xs: "1.8rem", md: "2.5rem" },
              }}
              gutterBottom
            >
              Fruta de Estación: Ciruelas
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" } }}
              gutterBottom
            >
              Disfrutá la dulzura natural de nuestras ciruelas recién cosechadas,
              cultivadas en casa sin agroquímicos. Frescas, sabrosas y llenas de vida.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: { xs: "center", md: "flex-start" },
                gap: 2,
                mt: 1,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#6B8E23",
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  px: 3,
                  py: 1.2,
                  "&:hover": { backgroundColor: "#557A1F" },
                }}
              >
                Comprar
              </Button>
              <Button
                variant="outlined"
                sx={{
                  color: "#6B8E23",
                  borderColor: "#6B8E23",
                  fontSize: { xs: "0.9rem", sm: "1rem" },
                  px: 3,
                  py: 1.2,
                  "&:hover": {
                    borderColor: "#557A1F",
                    color: "#557A1F",
                  },
                }}
              >
                Saber más
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;
