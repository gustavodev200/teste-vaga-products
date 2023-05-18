import { FormComponent, ProductCard, TitleComponent } from "../components";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useAppSelector } from "../redux/hooks/useAppSelector";

export const Products = () => {
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
        <FormComponent />
      </Container>
    </>
  );
};
