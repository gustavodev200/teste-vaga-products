import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setName, setEmail, setSexo } from "../../redux/reducers/userReducer";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { ButtonWrapper, TitleComponent } from "..";
import { formatCurrency } from "../../helpers";

const validationSchema = yup.object({
  name: yup.string().required("Campo Obrigatório"),
  email: yup
    .string()
    .email("Digite um e-mail válido!")
    .required("Campo Obrigatório"),
  sexo: yup.string().required("Campo Obrigatório"),
});

export const FormComponent = () => {
  const user = useAppSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalAmount = useAppSelector((state) => state.product.totalValue);

  const formik = useFormik({
    initialValues: {
      name: user.name,
      email: user.email,
      sexo: user.sexo,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(setName(values.name));
      dispatch(setEmail(values.email));
      dispatch(setSexo(values.sexo));
      navigate("/finalize-payment");
    },
  });

  return (
    <div>
      <TitleComponent title="Dados do Cliente" />
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: "20px",
          }}
        >
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Nome"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            label="E-mail"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <FormControl fullWidth>
            <InputLabel id="sexo-label">Sexo</InputLabel>
            <Select
              id="sexo"
              name="sexo"
              labelId="sexo-label"
              value={formik.values.sexo}
              onChange={formik.handleChange}
              error={formik.touched.sexo && Boolean(formik.errors.sexo)}
              label="Sexo"
            >
              <MenuItem value="female">Feminino</MenuItem>
              <MenuItem value="male">Masculino</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box
          sx={{
            marginTop: "50px",
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
          <ButtonWrapper text="Finalizar Compra" />
        </Box>
      </Box>
    </div>
  );
};
