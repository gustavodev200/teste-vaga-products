import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { FormHelperText } from "@mui/material";

interface InputProps {
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
export const InputComponent: React.FC<InputProps> = ({
  label,
  placeholder,
  onChange,
  value,
}) => {
  return (
    <Box component="div" sx={{ width: "100%" }}>
      <TextField
        sx={{ width: "100%" }}
        label={label}
        variant="outlined"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required
      />
    </Box>
  );
};
