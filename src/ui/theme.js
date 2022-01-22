import { createTheme, makeStyles } from "@material-ui/core/styles";

export const theme = createTheme();

const styles = makeStyles((theme) => ({
  //   title: {
  //     padding: "2em",
  //   },
  //   rootCard: {
  //     display: "flex",
  //   },
  //   rootMedium: {
  //     flexGrow: 1,
  //     paddingTop: "1rem",
  //     paddingLeft: "1rem",
  //   },
  //   rootSmall: {
  //     flexGrow: 1,
  //   },
  //   menuButtonMD: {
  //     backgroundColor: "inherit",
  //   },
  //   menuButtonSM: {
  //     backgroundColor: "inherit",
  //   },
  //   details: {
  //     display: "flex",
  //     flexDirection: "column",
  //   },
  //   buttonStyle: {
  //     backgroundColor: "#019cde",
  //     color: "#fff",
  //     "&:hover": {
  //       boxShadow: "none",
  //       backgroundColor: "#019cde",
  //       textDecoration: "underline",
  //     },
  //   },
  //   buttonStyleSM: {
  //     backgroundColor: "#019cde",
  //     color: "#fff",
  //     "&:hover": {
  //       boxShadow: "none",
  //       backgroundColor: "#019cde",
  //       textDecoration: "underline",
  //     },
  //   },
  appBar: {
    backgroundColor: "#fff",
    color: "#019cde",
  },
  appBarSM: {
    backgroundColor: "#fff",
    color: "#019cde",
    minHeight: "15vh",
  },
  cover: {
    width: 590,
    height: 575,
  },
}));

export default styles;
