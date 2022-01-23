import { AppBar, Grid, Toolbar } from "@material-ui/core";
import styles from "../ui/theme";

function MainHeader() {
  const classes = styles();
  return (
    <header>
      <AppBar position="static" variant="contained" color="primary">
        {/* <Container maxWidth="xl"> */}
        {/* <Grid container md={12} justify="center" direction="row"> */}
        <Toolbar className={classes.appBar}>
          <Grid container justifyContent="space-between">
            <p>blah</p>
          </Grid>
        </Toolbar>
        {/* </Grid> */}
        {/* </Container> */}
      </AppBar>
    </header>
  );
}

export default MainHeader;
