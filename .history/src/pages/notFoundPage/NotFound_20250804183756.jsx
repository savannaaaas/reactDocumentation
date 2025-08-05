import { Typography } from "@mui/material";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
export const NotFound = () => {
  return (
    <div className="not-found">
      <p>Page not found</p>
      <SentimentVeryDissatisfiedIcon
        sx={{ backgroundColor: "rgb(227, 153, 153)" }}
      />
    </div>
  );
};
