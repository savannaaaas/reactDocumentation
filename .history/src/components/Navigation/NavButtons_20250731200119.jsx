import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { data } from "../../data/data";
import "./index.scss";
export const NavButtons = ({ title }) => {
  const topics = data.map((e) => {
    const { title, path } = e;
    return { title, path };
  });
  // const navigate = useNavigate();
  // const handleGoBack = () => {
  //   navigate(-1);
  // };
  // const handleGoNext = () => {
  //   navigate(1);
  // };
  //<Grid
  //   sx={{
  //     display: "flex",
  //     flexDirection: "row",
  //     justifyContent: "center",
  //     alignItems: "center",
  //     gap: "20px",
  //     margin: "30px",
  //   }}
  // >
  //   <Grid>
  //     <Button
  //       variant="contained"
  //       onClick={handleGoBack}
  //       className="navigate-button"
  //       startIcon={<ArrowBackIosNewIcon />}
  //     >
  //       Back
  //     </Button>
  //   </Grid>
  //   <Grid>
  //     <Button
  //       variant="contained"
  //       onClick={handleGoNext}
  //       className="navigate-button"
  //       endIcon={<ArrowForwardIosIcon />}
  //     >
  //       Next
  //     </Button>
  //   </Grid>
  // </Grid>

  return <></>;
};
