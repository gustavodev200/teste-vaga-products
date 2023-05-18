import React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { formatCurrency } from "../helpers";
import Box from "@mui/material/Box";
import { FiPlus } from "react-icons/fi";
import { GrFormSubtract } from "react-icons/gr";
import { useDispatch } from "react-redux";
import {
  addAmount,
  removeAmount,
  totalPrice,
} from "../redux/reducers/productReducer";
import { useAppSelector } from "../redux/hooks/useAppSelector";
import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/material";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  alt: string;
  productId: number;
}

export const ProductCard = ({
  image,
  name,
  price,
  alt,
  productId,
}: ProductCardProps) => {
  const product = useAppSelector((state) =>
    state.product.produtos.find((produto) => produto.id === productId)
  );
  const productAmount = product ? product.amount : 0;
  const [isHovered, setIsHovered] = React.useState(false);

  const dispatch = useDispatch();

  const handleAddAmount = () => {
    dispatch(addAmount(productId));
  };

  const handleRemoveAmount = () => {
    dispatch(removeAmount(productId));
  };

  const handleUpdateTotalValue = () => {
    dispatch(totalPrice());
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "20px",
        minWidth: 310,
        maxWidth: 310,
        minHeight: 400,
        cursor: "pointer",
        boxShadow: "none",
        marginTop: "20px",
        transition: "transform 0.3s ease",
        ":hover": {
          transform: "scale(1.1)",
          boxShadow:
            "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);",
        },
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Box
        component="div"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={alt}
          sx={{
            width: "60%",
            zIndex: 0,
          }}
        />
      </Box>

      <CardContent
        sx={{
          position: "absolute",
          top: isHovered ? "60%" : "75%",
          left: "0",
          right: "0",
          transform: "translateY(-50%)",
          background: "rgba(255, 255, 255, 0.7)",
          width: "100%",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          sx={{ color: "text.secondary", fontWeight: "400" }}
        >
          {name}
        </Typography>
        <Typography
          variant="subtitle2"
          gutterBottom
          sx={{ color: "#455a64", fontWeight: "bold", fontSize: "24px" }}
        >
          {formatCurrency(price)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Em até 12x de R$ 124,92
        </Typography>
        <Typography variant="body2" color="text.secondary">
          R$ 1.349 à vista(10% de desconto)
        </Typography>
        {isHovered && (
          <Box
            component="div"
            sx={{
              width: "100%",
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10px",
              flexDirection: "column",
            }}
          >
            <Box
              component="div"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              <IconButton
                color="primary"
                sx={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "100%",
                  background: "#dbe3eb",
                  ":hover": {
                    background: "#c5e0ec",
                  },
                }}
                onClick={handleRemoveAmount}
              >
                <GrFormSubtract />
              </IconButton>
              <Box
                component={"input"}
                sx={{
                  width: "120px",
                  height: "35px",
                  padding: "0px 10px",
                  outline: "none",
                  border: "1px solid #dbe3eb",
                  borderRadius: "5px",
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
                type="number"
                value={productAmount}
              />

              <IconButton
                sx={{
                  marginBottom: "10px",
                  width: "40px",
                  height: "40px",
                  background: "#dbe3eb",
                  ":hover": {
                    background: "#c5e0ec",
                  },
                }}
                onClick={handleAddAmount}
              >
                <FiPlus />
              </IconButton>
            </Box>

            <Button
              disableElevation
              sx={{ width: "80%", background: "#4a9ff3" }}
              variant="contained"
              onClick={handleUpdateTotalValue}
            >
              ADICIONAR
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};
