import Button from "@mui/material/Button";

interface ButtonWrapperProps {
  text: string;
}
export const ButtonWrapper: React.FC<ButtonWrapperProps> = ({ text }) => {
  return (
    <Button
      sx={{
        alignItems: "end",
        justifyContent: "flex-end",
        lineHeight: "1.5",
        padding: "10px 20px",
        marginBottom: "50px",
        textAlign: "center",
        backgroundColor: "#ff9800",
        ":hover": { backgroundColor: "#ffc46c" },
      }}
      variant="contained"
      type="submit"
    >
      {text.toUpperCase()}
    </Button>
  );
};
