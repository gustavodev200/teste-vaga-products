import React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { formatCurrency } from "../helpers";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { FiPlus } from "react-icons/fi";
import { GrFormSubtract } from "react-icons/gr";
import { useDispatch } from "react-redux";
import {
  addAmount,
  removeAmount,
  totalPrice,
} from "../redux/reducers/productReducer";
import { useAppSelector } from "../redux/hooks/useAppSelector";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  alt: string;
}

export const ProductCard = ({ image, name, price, alt }: ProductCardProps) => {
  const products = useAppSelector((state) => state.product);
  const dispatch = useDispatch();
  const [index, setIndex] = React.useState(0);
  const [quantity, setQuantity] = React.useState(
    products.produtos[index].amount
  );

  const handleOnChangeInput = (index: number) => {
    dispatch(addAmount(index));
  };

  return (
    <Card
      sx={{
        marginTop: "20px",
        marginBottom: "20px",
        maxWidth: 320,
        minHeight: 400,
        cursor: "pointer",
        boxShadow: "none",
        transition: "transform 0.3s ease",
        ":hover": {
          transform: "scale(1.15)",
          boxShadow:
            "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);",
        },
      }}
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
          sx={{ width: "60%" }}
        />
      </Box>

      <CardContent>
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
        <Box
          component="div"
          sx={{
            width: "100%",
            display: "flex",
            gap: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              width: "30px",
              height: "50px",
              borderRadius: "50%",
              background: "#849da8",
              ":hover": {
                background: "#c5e0ec",
              },
            }}
            onClick={() => {
              dispatch(removeAmount(index)); // Dispatch para ação removeAmount
              handleOnChangeInput(index); // Chamar a função handleOnChangeInput para atualizar o valor do input
            }}
          >
            <GrFormSubtract />
          </Button>
          <Box
            component={"input"}
            sx={{ width: "120px" }}
            type="number"
            value={quantity}
          />
          <Button
            variant="contained"
            sx={{
              width: "30px",
              height: "50px",
              borderRadius: "50%",
              background: "#849da8",
              ":hover": {
                background: "#c5e0ec",
              },
            }}
            onClick={() => {
              dispatch(addAmount(index)); // Dispatch para ação addAmount
              handleOnChangeInput(index); // Chamar a função handleOnChangeInput para atualizar o valor do input
            }}
          >
            <FiPlus />
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
