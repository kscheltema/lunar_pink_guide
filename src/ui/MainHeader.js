import { NavLink } from "react-router-dom";
import { AppBar, Button, Grid, Toolbar, Typography } from "@material-ui/core";
import styles from "../ui/theme";

function MainHeader() {
  const classes = styles();
  return (
    <header className="App-header">
      <AppBar position="static" variant="contained" color="primary">
        {/* <Container maxWidth="xl"> */}
        {/* <Grid container md={12} justify="center" direction="row"> */}
        <Toolbar className={classes.appBar}>
          <Grid container justifyContent="space-between">
            <Button
              className={classes.buttonAppBar}
              LinkComponent={NavLink}
              to="home"
              name="the pink guide"
            >
              <Typography variant="h6">
                <strong>the pink guide</strong>
              </Typography>
            </Button>
          </Grid>
        </Toolbar>
        {/* </Grid> */}
        {/* </Container> */}
      </AppBar>
    </header>
  );
}

export default MainHeader;
