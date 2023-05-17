import {
  ButtonWrapper,
  InputComponent,
  ProductCard,
  SelectComponent,
  TitleComponent,
} from "../components";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useAppSelector } from "../redux/hooks/useAppSelector";
import { useDispatch } from "react-redux";
import { setEmail, setName } from "../redux/reducers/userReducer";
import { formatCurrency } from "../helpers/formatCurrency";
import { Link } from "react-router-dom";

export const Products = () => {
  const user = useAppSelector((state) => state.user);
  const products = useAppSelector((state) => state.product);
  const totalAmount = useAppSelector((state) => state.product.totalValue);
  const dispatch = useDispatch();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <TitleComponent title="Produtos" />
        <Box
          sx={{
            flexGrow: 1,
          }}
        >
          <Grid
            container
            spacing={{ xs: 12, md: 8 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {products.produtos.map((product) => (
              <Grid item key={product.id}>
                <ProductCard
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  alt={product.alt}
                  productId={product.id}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <TitleComponent title="Dados do Cliente" />
        <Box
          component={"form"}
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "20px",
          }}
        >
          <InputComponent
            label="Nome"
            placeholder="Nome do cliente aqui"
            onChange={handleNameChange}
            value={user.name}
          />
          <InputComponent
            label="Email"
            placeholder="Digite seu email aqui"
            onChange={handleEmailChange}
            value={user.email}
          />
          <SelectComponent text="Sexo" />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "flex-end",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              textAlign: "right",
              width: "100%",
              fontWeight: "bold",
              color: "#455a64",
              marginBottom: "10px",
            }}
          >
            Total: {formatCurrency(totalAmount)}
          </Typography>

          <Link to="/finalize-payment">
            <ButtonWrapper text="Finalizar Compra" />
          </Link>
        </Box>
      </Container>
    </>
  );
};
