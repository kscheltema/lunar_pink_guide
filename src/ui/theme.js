import { createTheme, makeStyles } from "@material-ui/core/styles";

export const theme = createTheme();

const styles = makeStyles((theme) => ({
  buttonAppBar: {
    backgroundColor: "#ba2d65",
    color: "#fff",
    "&:hover": {
      boxShadow: "0.25rem 0.25rem 0.25rem #ba2d65",
      backgroundColor: "#ba2d65",
      textDecoration: "none",
    },
  },
  appBar: {
    backgroundColor: "#ff94c2",
    color: "#fff",
  },
}));

export default styles;
