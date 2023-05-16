import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { SexoType } from "../../@types/selectType";
import { useDispatch } from "react-redux";
import { setSexo } from "../../redux/reducers/userReducer";

interface SelectComponentProps {
  text: string;
}
export const SelectComponent: React.FC<SelectComponentProps> = ({ text }) => {
  const dispatch = useDispatch();
  const sexo = useAppSelector((state) => state.user.sexo);

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const selectedValue = event.target.value;
    dispatch(setSexo(selectedValue));
  };

  return (
    <Box sx={{ width: { xs: "100%", md: "50%" }, marginBottom: "100px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{text}</InputLabel>
        <Select
          name="sexo"
          label="Sexo"
          value={sexo}
          onChange={handleSelectChange}
        >
          <MenuItem value="">Selecione</MenuItem>
          <MenuItem value={SexoType.FEMALE}>Feminino</MenuItem>
          <MenuItem value={SexoType.MALE}>Masculino</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
