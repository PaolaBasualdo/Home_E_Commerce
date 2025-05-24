import React, { useState } from "react";
import { Box, Chip, Typography, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const categorias = [
  "Verduras",
  "Frutas",
  "Panificación",
  "Huevos",
  "Conservas",
];

function FilterBar() {
  const [filtroActivo, setFiltroActivo] = useState(null);

  const handleSelect = (categoria) => {
    setFiltroActivo(categoria === filtroActivo ? null : categoria);
  };

  return (
    <Box sx={{ mt: 1, px: 2 }}>
      <Paper
        elevation={3}
        sx={{
          bgcolor: "#F5F5DC",
          px: 4,
          py: 3,
          borderRadius: 2,
          border: "1px solid rgba(107, 142, 35, 0.3)",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-evenly"
          flexWrap="wrap"
          gap={1}
        >
          <Box display="flex" alignItems="center" gap={1} mr={10}>
            <SearchIcon sx={{ color: "#6B8E23", fontSize: "40px" }} />
            <Typography
              variant="subtitle1"
              sx={{ color: "#5D4037", fontWeight: "bold", fontSize: "20px" }}
            >
              FILTRAR POR:
            </Typography>
          </Box>
          {categorias.map((cat) => (
            <Chip
              key={cat}
              label={cat}
              onClick={() => handleSelect(cat)}
              variant={filtroActivo === cat ? "filled" : "outlined"}
              sx={{
                bgcolor: filtroActivo === cat ? "#6B8E23" : "transparent",
                color: filtroActivo === cat ? "#fff" : "#6B8E23",
                borderColor: "#6B8E23",
                fontWeight: "500",
                cursor: "pointer",
                fontSize: "20px",
                px: 2, // espacio horizontal interno
                py: 1, // espacio vertical interno
                textAlign: "center",
                flex: "1 1 120px", //  esta línea dice: puede crecer y achicarse, pero con un ancho base de 120px
                maxWidth: "200px", //  evita que un chip se estire demasiado
                "&:hover": {
                  bgcolor:
                    filtroActivo === cat ? "#5e7c1e" : "rgba(107,142,35,0.1)",
                },
              }}
            />
          ))}
        </Box>
      </Paper>
    </Box>
  );
}

export default FilterBar;
