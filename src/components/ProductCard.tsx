import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { formatCurrency } from "../helpers";
import Box from "@mui/material/Box";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
  alt: string;
}

export const ProductCard = ({ image, name, price, alt }: ProductCardProps) => {
  return (
    <Card sx={{ maxWidth: 320 }}>
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
      </CardContent>
    </Card>
  );
};
