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

  cardBlogText: {
    flex: "1 0 auto",
    width: "45em",
  },
  cardBox: {
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    flex: "1 0 auto",
  },
  cardPage: {
    display: "flex",
  },
  cardTextBox: {
    display: "flex",
    flexDirection: "column",
    marginRight: "1.5rem",
    marginLeft: "1.5rem",
  },
  cardText: {
    flex: "1 0 auto",
    width: "30em",
  },
  drawer: {
    width: 240,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: 240,
      boxSizing: "border-box",
    },
  },
  drawerClassifiedsBox: {
    position: "relative",
    zIndex: 1,
    display: "flex",
    marginTop: "1.25rem",
    marginLeft: "0rem",
    marginLRight: "0rem",
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
