import Box from "@mui/material/Box";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
export const ImportantPoints = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "150vh",
        height: "10vh",
        borderLeft: "3px solid red",
        margin: "0 auto",
        textAlign: "justify",
        display: "flex",
        alignItems: "center",
        gap: 1,
        backgroundColor: "#6c6c6cff",
        padding: "10px",
        boxSizing: "border-box",
        color: "white",
      }}
    >
      <ErrorOutlineIcon sx={{ color: "red", fontSize: 50 }} />
      Компонент класса должен включать extends React.Component оператор. Этот
      оператор создает наследование для React.Component и предоставляет вашему
      компоненту доступ к функциям React.Component.
    </Box>
  );
};
