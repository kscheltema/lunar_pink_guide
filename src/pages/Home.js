import MainHeader from "../ui/MainHeader";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import hero from "../assets/same_sex_wedding_female.png";
import styles from "../ui/theme";

function Home() {
  const classes = styles();

  return (
    <section>
      <MainHeader />
      <img src={hero} alt="same sex wedding female" />
      <Card className={classes.cardHome}>
        <Box className={classes.cardBox}>
          <CardContent className={classes.cardContent}>
            <Typography component="div" variant="h5">
              Categories
            </Typography>
            <Button
              className={classes.buttonAppBar}
              // LinkComponent={NavLink}
              // to="home"
              name="engagement venues"
            >
              <Typography variant="subtitle2">engagement venues</Typography>
            </Button>

            <Button
              className={classes.buttonAppBar}
              // LinkComponent={NavLink}
              // to="home"
              name="wedding venues"
            >
              <Typography variant="subtitle2">wedding venues</Typography>
            </Button>
            <Button
              className={classes.buttonAppBar}
              // LinkComponent={NavLink}
              // to="home"
              name="caterers"
            >
              <Typography variant="subtitle2">caterers</Typography>
            </Button>
            <Button
              className={classes.buttonAppBar}
              // LinkComponent={NavLink}
              // to="home"
              name="wedding insurance"
            >
              <Typography variant="subtitle2">wedding insurance</Typography>
            </Button>

            <Button
              className={classes.buttonAppBar}
              // LinkComponent={NavLink}
              // to="home"
              name="wedding pros: planner"
            >
              <Typography variant="subtitle2">wedding pros: planner</Typography>
            </Button>
            <Button
              className={classes.buttonAppBar}
              // LinkComponent={NavLink}
              // to="home"
              name="wedding pros: photographer"
            >
              <Typography variant="subtitle2">
                wedding pros: photographer
              </Typography>
            </Button>
            <Button
              className={classes.buttonAppBar}
              // LinkComponent={NavLink}
              // to="home"
              name="wedding pros: videographer"
            >
              <Typography variant="subtitle2">
                wedding pros: videographer
              </Typography>
            </Button>
            <Button
              className={classes.buttonAppBar}
              // LinkComponent={NavLink}
              // to="home"
              name="wedding pros: caterer"
            >
              <Typography variant="subtitle2">wedding pros: caterer</Typography>
            </Button>
            <Button
              className={classes.buttonAppBar}
              // LinkComponent={NavLink}
              // to="home"
              name="wedding pros: florist"
            >
              <Typography variant="subtitle2">wedding pros: florist</Typography>
            </Button>
            <Button
              className={classes.buttonAppBar}
              // LinkComponent={NavLink}
              // to="home"
              name="wedding pros: musicians"
            >
              <Typography variant="subtitle2">
                wedding pros: musicians
              </Typography>
            </Button>
            <Button
              className={classes.buttonAppBar}
              // LinkComponent={NavLink}
              // to="home"
              name="wedding dress"
            >
              <Typography variant="subtitle2">wedding dress</Typography>
            </Button>
            <Button
              className={classes.buttonAppBar}
              // LinkComponent={NavLink}
              // to="home"
              name="wedding outfit"
            >
              <Typography variant="subtitle2">wedding outfit</Typography>
            </Button>
            <Button
              className={classes.buttonAppBar}
              // LinkComponent={NavLink}
              // to="home"
              name="premarital counseling"
            >
              <Typography variant="subtitle2">premarital counseling</Typography>
            </Button>
            <Button
              className={classes.buttonAppBar}
              // LinkComponent={NavLink}
              // to="home"
              name="invites"
            >
              <Typography variant="subtitle2">invites</Typography>
            </Button>
            <Button
              className={classes.buttonAppBar}
              // LinkComponent={NavLink}
              // to="home"
              name="healthy skin and wellness"
            >
              <Typography variant="subtitle2">
                healthy skin and wellness
              </Typography>
            </Button>
            <Button
              className={classes.buttonAppBar}
              // LinkComponent={NavLink}
              // to="home"
              name="honeymoon destinations"
            >
              <Typography variant="subtitle2">
                honeymoon destinations
              </Typography>
            </Button>
          </CardContent>
        </Box>
      </Card>
    </section>
  );
}

export default Home;
