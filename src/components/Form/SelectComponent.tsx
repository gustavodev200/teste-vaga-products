import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

interface SelectComponentProps {
  text: string;
}
export const SelectComponent: React.FC<SelectComponentProps> = ({ text }) => {
  return (
    <Box sx={{ width: { xs: "100%", md: "50%" }, marginBottom: "100px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{text}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
        >
          <MenuItem value="female">Feminino</MenuItem>
          <MenuItem value="male">Masculino</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
