import { NavLink } from "react-router-dom";
import { AppBar, Button, Grid, Toolbar, Typography } from "@material-ui/core";
import styles from "../ui/theme";

function MainHeader() {
  const classes = styles();
  return (
    <header className="App-header">
      <AppBar position="static" variant="contained" color="primary">
        <Toolbar className={classes.appBar}>
          <Grid container justifyContent="space-between">
            <Button
              className={classes.buttonAppBar}
              LinkComponent={NavLink}
              to="home"
              name="the pink guide"
            >
              <Typography variant="h7">the pink guide</Typography>
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default MainHeader;
