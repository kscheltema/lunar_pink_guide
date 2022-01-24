import { createTheme, makeStyles } from "@material-ui/core/styles";

export const theme = createTheme();

const styles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#ff94c2",
    color: "#fff",
  },
  blogList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  buttonAppBar: {
    backgroundColor: "#ba2d65",
    margin: "0.4rem",
    color: "#fff",
    "&:hover": {
      boxShadow: "0.25rem 0.25rem 0.25rem #ba2d65",
      backgroundColor: "#ba2d65",
      textDecoration: "none",
    },
  },
  cardPage: {
    display: "flex",
  },
  cardBox: {
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    flex: "1 0 auto",
  },
  cardPictureText: {
    flex: "1 0 auto",
    width: "45em",
  },
  cardFullText: {
    flex: "1 0 auto",
  },
  cardPostContainer: {
    flex: "1 0 auto",
  },
  cardText: {
    flex: "1 0 auto",
    width: "30em",
  },
  imageContainerHero: {
    position: "relative",
    textAlign: "center",
  },
  imageTextHero: {
    position: "absolute",
    top: "8px",
    left: "16px",
  },
}));

export default styles;
