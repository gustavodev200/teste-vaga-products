import { formatCurrency } from "../helpers";
import { useAppSelector } from "../redux/hooks/useAppSelector";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { ButtonWrapper } from "../components";

export const FinalizePayment = () => {
  const totalAmount = useAppSelector((state) => state.product.totalValue);
  const user = useAppSelector((state) => state.user);
  return (
    <>
      <Box
        component={"div"}
        sx={{
          width: "100%",
          height: "100vh",
          background: "#eceff1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          component={"div"}
          sx={{
            minWidth: "320px",
            height: "450px",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: "column",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              width: "90%",
              color: "#546e7a",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {user.name},
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{
              width: "90%",
              color: "#546e7a",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "-20px",
            }}
          >
            Sua compra no valor de{" "}
            <span style={{ fontWeight: "bold", color: "#2a7bf5" }}>
              {formatCurrency(totalAmount)}
            </span>{" "}
            foi realizada com sucesso
          </Typography>
          <img
            src="/public/assets/images/purchase.png"
            loading="lazy"
            width={"60%"}
          />
          <Link to="/" style={{ textDecoration: "none", marginTop: "20px" }}>
            <ButtonWrapper text="INICIAR NOVA COMPRA" />
          </Link>
        </Box>
      </Box>
    </>
  );
};
