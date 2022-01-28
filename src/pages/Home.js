import MainHeader from "../ui/MainHeader";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import ListPost from "../components/ListPost";
import hero from "../assets/same_sex_wedding_female.png";
import styles from "../ui/theme";

const DUMMY_DATA = [
  {
    id: "d1",
    title: "Example Post",
    paragraph1:
      "Attack feet behind the couch destroy couch flop over give attitude hide when guests come over hopped up on goofballs hunt anything that moves sweet beast under the bed  stand in front of the computer screen , inspect anything brought into the house  intently stare at the same spot  rub face on everything need to chase tail shake treat  make muffins all of a sudden go crazy chase mice, chew ipad power cord  flop over chase imaginary bugs intently stare at the same spot flop over attack feet chase mice flop over. Give attitude inspect anything brought into the house all of a sudden go crazy hide when guests come over flop over hopped up on goofballs chase imaginary bugs flop over need to chase tail make muffins,  stand in front of the computer screen  chase mice shake treat  hunt anything that moves behind the couch sweet beast under the bed   rub face on everything destroy couch intently stare at the same spot, attack feet chew ipad power cord  attack feet destroy couch flop over  hunt anything that moves shake treat . Make muffins inspect anything brought into the house shake treat  hide when guests come over flop over behind the couch hunt anything that moves intently stare at the same spot, destroy couch need to chase tail flop over attack feet sweet beast under the bed  stand in front of the computer screen  all of a sudden go crazy, chew ipad power cord  give attitude  rub face on everything chase imaginary bugs hopped up on goofballs .",
  },
];

function Home() {
  const classes = styles();

  return (
    <section>
      <MainHeader />
      <div className={classes.imageContainerHero}>
        <img src={hero} alt="same sex wedding female" />
        {/* <div className={classes.imageTextHero}>Top Left</div> not working */}
      </div>
      <Grid container spacing={1}>
        <Grid item xs={4} flexDirection="column" justifyContent="center">
          <Paper className={classes.paperContainer}>
            <Typography variant="h5">Categories</Typography>
            <Button className={classes.buttonAppBar} name="engagement venues">
              <Typography variant="subtitle2">engagement venues</Typography>
            </Button>
            <Button className={classes.buttonAppBar} name="wedding venues">
              <Typography variant="subtitle2">wedding venues</Typography>
            </Button>
            <Button className={classes.buttonAppBar} name="caterers">
              <Typography variant="subtitle2">caterers</Typography>
            </Button>
            <Button className={classes.buttonAppBar} name="wedding insurance">
              <Typography variant="subtitle2">wedding insurance</Typography>
            </Button>
            <Button
              className={classes.buttonAppBar}
              name="wedding pros: planner"
            >
              <Typography variant="subtitle2">wedding pros: planner</Typography>
            </Button>
            <Button
              className={classes.buttonAppBar}
              name="wedding pros: photographer"
            >
              <Typography variant="subtitle2">
                wedding pros: photographer
              </Typography>
            </Button>
            <Button
              className={classes.buttonAppBar}
              name="wedding pros: videographer"
            >
              <Typography variant="subtitle2">
                wedding pros: videographer
              </Typography>
            </Button>
            <Button
              className={classes.buttonAppBar}
              name="wedding pros: caterer"
            >
              <Typography variant="subtitle2">wedding pros: caterer</Typography>
            </Button>
            <Button
              className={classes.buttonAppBar}
              name="wedding pros: florist"
            >
              <Typography variant="subtitle2">wedding pros: florist</Typography>
            </Button>
            <Button
              className={classes.buttonAppBar}
              name="wedding pros: musicians"
            >
              <Typography variant="subtitle2">
                wedding pros: musicians
              </Typography>
            </Button>
            <Button className={classes.buttonAppBar} name="wedding dress">
              <Typography variant="subtitle2">wedding dress</Typography>
            </Button>
            <Button className={classes.buttonAppBar} name="wedding outfit">
              <Typography variant="subtitle2">wedding outfit</Typography>
            </Button>
            <Button
              className={classes.buttonAppBar}
              name="premarital counseling"
            >
              <Typography variant="subtitle2">premarital counseling</Typography>
            </Button>
            <Button className={classes.buttonAppBar} name="invitations">
              <Typography variant="subtitle2">invitations</Typography>
            </Button>
            <Button
              className={classes.buttonAppBar}
              name="healthy skin and wellness"
            >
              <Typography variant="subtitle2">
                healthy skin and wellness
              </Typography>
            </Button>
            <Button
              className={classes.buttonAppBar}
              name="honeymoon destinations"
            >
              <Typography variant="subtitle2">
                honeymoon destinations
              </Typography>
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={8} justifyContent="center">
          <Paper className={classes.paperContainer}>
            <ListPost posts={DUMMY_DATA} />
          </Paper>
        </Grid>
      </Grid>
    </section>
  );
}

export default Home;
