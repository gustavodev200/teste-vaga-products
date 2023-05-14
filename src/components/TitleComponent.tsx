import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TitleComponentProps {
  title: string;
}
export const TitleComponent: React.FC<TitleComponentProps> = ({ title }) => {
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        borderBottom: "1px solid #e0e0e0",
        paddingTop: "30px",
        marginBottom: "30px",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "500",
          color: "#455a64",
          marginBottom: "10px",
          fontSize: "32px",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};
