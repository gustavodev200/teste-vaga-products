import {
  InputComponent,
  ProductCard,
  SelectComponent,
  TitleComponent,
} from "./components";
import image_01 from "./assets/images/produto-01.jpeg";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function App() {
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
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item>
              <ProductCard
                image={image_01}
                name="AirPods Apple Fones de ouvido"
                price={1499}
                alt="Product 1"
              />
            </Grid>
            <Grid item>
              <ProductCard
                image={image_01}
                name="AirPods Apple Fones de ouvido"
                price={1499}
                alt="Product 1"
              />
            </Grid>
            <Grid item>
              <ProductCard
                image={image_01}
                name="AirPods Apple Fones de ouvido"
                price={1499}
                alt="Product 1"
              />
            </Grid>
            <Grid item>
              <ProductCard
                image={image_01}
                name="AirPods Apple Fones de ouvido"
                price={1499}
                alt="Product 1"
              />
            </Grid>
            <Grid item>
              <ProductCard
                image={image_01}
                name="AirPods Apple Fones de ouvido"
                price={1499}
                alt="Product 1"
              />
            </Grid>
            <Grid item>
              <ProductCard
                image={image_01}
                name="AirPods Apple Fones de ouvido"
                price={1499}
                alt="Product 1"
              />
            </Grid>
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
          <InputComponent label="Nome" placeholder="Nome do cliente aqui" />
          <SelectComponent />
        </Box>
      </Container>
    </>
  );
}

export default App;
