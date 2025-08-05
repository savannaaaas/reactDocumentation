import Box from "@mui/material/Box";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
export const ImportantPoints = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "100vh",
        height: "15vh",
        borderBlockStart: "red",
        backgroundColor: "blue",
      }}
    >
      <ReportGmailerrorredIcon sx={{ color: "red" }} />
      Компонент класса должен включать extends React.Component оператор. Этот
      оператор создает наследование для React.Component и предоставляет вашему
      компоненту доступ к функциям React.Component.
    </Box>
  );
};
