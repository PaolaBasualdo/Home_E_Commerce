import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";

function ProductCard({ title, price, image }) {
  return (
    <Card sx={{ maxWidth: 250, borderRadius: 3, boxShadow: 3 }}>
      {/* Imagen del producto */}
      <CardMedia
        component="img"
        height="160"
        image={image}
        alt={title}
        sx={{ objectFit: "cover" }}
      />

      <CardContent>
        {/* Título y botón de favorito */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", color: "#5D4037" }}
          >
            {title}
          </Typography>
          <IconButton>
            <FavoriteBorderIcon sx={{ color: "#A3604D" }} />
          </IconButton>
        </Box>

        {/* Precio */}
        <Typography variant="body1" sx={{ color: "#6B8E23", fontWeight: 500 }}>
          ${price}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#6B8E23",
              "&:hover": { backgroundColor: "#557A1F" },
            }}
          > 
            Comprar
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
export default ProductCard;
