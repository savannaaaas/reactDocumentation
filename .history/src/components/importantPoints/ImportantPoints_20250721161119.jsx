import Box from "@mui/material/Box";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import "./index.scss";
export const ImportantPoints = () => {
  return (
    <Box component="section" className="importantBox">
      <ErrorOutlineIcon sx={{ color: "red", fontSize: 50 }} />
      Компонент класса должен включать extends React.Component оператор. Этот
      оператор создает наследование для React.Component и предоставляет вашему
      компоненту доступ к функциям React.Component.
    </Box>
  );
};
