import {
  ButtonWrapper,
  InputComponent,
  ProductCard,
  SelectComponent,
  TitleComponent,
} from "./components";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useAppSelector } from "./redux/hooks/useAppSelector";
import { useDispatch } from "react-redux";

function App() {
  const products = useAppSelector((state) => state.product);

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
              <Grid item>
                <ProductCard
                  key={product.id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  alt={product.alt}
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
          <InputComponent label="Nome" placeholder="Nome do cliente aqui" />
          <InputComponent label="Email" placeholder="Digite seu email aqui" />
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
            Total: R$ 299,00
          </Typography>
          <ButtonWrapper text="Finalizar Compra" />
        </Box>
      </Container>
    </>
  );
}

export default App;
