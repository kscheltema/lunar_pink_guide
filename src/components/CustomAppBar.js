import { Fragment } from "react";
import { AppBar, Grid, Toolbar } from "@material-ui/core";
import styles from "../ui/theme";

function Home() {
  const classes = styles();
  return (
    <Fragment>
      <Grid container md={12} justify="center" direction="row">
        <AppBar position="static" variant="contained">
          <Toolbar className={classes.appBar}>
            <p>blah</p>
          </Toolbar>
        </AppBar>
      </Grid>
    </Fragment>
  );
}

export default Home;
