import Box from "@mui/material/Box";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
export const ImportantPoints = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100vh",
        height: "10vh",
        borderLeft: "5px solid red",
        margin: "0 auto",
        textAlign: "justify",
        display: "flex",
        alignItems: "center",
        gap: 1,
        backgroundColor: "#ffff",
      }}
    >
      <ReportGmailerrorredIcon sx={{ color: "red", fontSize: 50 }} />
      Компонент класса должен включать extends React.Component оператор. Этот
      оператор создает наследование для React.Component и предоставляет вашему
      компоненту доступ к функциям React.Component.
    </Box>
  );
};
