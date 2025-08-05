import Box from "@mui/material/Box";
export const ImportantPoints = () => {
  return (
    <Box
      component="section"
      sx={{ width: "100vh", height: "15vh", borderBlockStart: "red" }}
    >
      Компонент класса должен включать extends React.Component оператор. Этот
      оператор создает наследование для React.Component и предоставляет вашему
      компоненту доступ к функциям React.Component.
    </Box>
  );
};
