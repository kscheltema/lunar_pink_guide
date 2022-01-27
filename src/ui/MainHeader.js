import { NavLink } from "react-router-dom";
import { AppBar, Button, Grid, Toolbar } from "@material-ui/core";
import styles from "../ui/theme";

function MainHeader() {
  const classes = styles();
  return (
    <header className="App-header">
      <AppBar
        position="absolute"
        color="primary"
        className={classes.drawerAppBar}
      >
        <Toolbar className={classes.appBar}>
          <Grid container justifyContent="space-between">
            <Button
              className={classes.buttonAppBar}
              linkcomponent={NavLink}
              href="/home"
              name="the pink guide"
            >
              the pink guide
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default MainHeader;
