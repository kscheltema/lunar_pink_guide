import { createTheme, makeStyles } from "@material-ui/core/styles";

export const theme = createTheme();

const styles = makeStyles((theme) => ({
  buttonAppBar: {
    backgroundColor: "#ff94c2",
    color: "#fff",
    "&:hover": {
      boxShadow: "3px 3px 3px #ba2d65",
      backgroundColor: "#ff94c2",
      textDecoration: "underline",
    },
  },
  appBar: {
    backgroundColor: "#ff94c2",
    color: "#fff",
  },
}));

export default styles;
