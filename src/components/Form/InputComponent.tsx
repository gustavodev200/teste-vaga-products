import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

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
        id="outlined-basic"
        label={label}
        variant="outlined"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </Box>
  );
};
