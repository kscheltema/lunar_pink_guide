import MainHeader from "../ui/MainHeader";
import { Box, Button, Card, CardContent, Typography } from "@material-ui/core";
import hero from "../assets/same_sex_wedding_female.png";
import styles from "../ui/theme";

function Home() {
  const classes = styles();

  return (
    <section>
      <MainHeader />
      <div className={classes.imageContainerHero}>
        <img src={hero} alt="same sex wedding female" />
        <div className={classes.imageTextHero}>Top Left</div>
      </div>
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
              name="invitations"
            >
              <Typography variant="subtitle2">invitations</Typography>
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
        <Box className={classes.cardBox}>
          <CardContent className={classes.cardText}>
            <Typography variant="h5">Live From Space</Typography>
            <Typography variant="body1">
              Attack feet behind the couch destroy couch flop over give attitude
              hide when guests come over hopped up on goofballs, hunt anything
              that moves all of a sudden go crazy intently sniff hand need to
              chase tail why must they do that inspect anything brought into the
              house, shake treat lick butt leave dead animals as gifts intrigued
              by the shower make muffins. Inspect anything brought into the
              house flop over shake treat stand in front of the computer screen
              claw drapes hunt anything that moves intrigued by the shower lick
              butt hide when guests come over leave dead animals as gifts,
              hopped up on goofballs give attitude all of a sudden go crazy
              intently sniff hand attack feet why must they do that need to
              chase tail destroy couch make muffins flop over, swat at dog
              behind the couch hunt anything that moves make muffins all of a
              sudden go crazy intently sniff hand inspect anything brought into
              the house hopped up on goofballs. Hunt anything that moves leave
              dead animals as gifts intrigued by the shower lick butt stand in
              front of the computer screen inspect anything brought into the
              house swat at dog make muffins claw drapes need to chase tail all
              of a sudden go crazy hopped up on goofballs, flop over destroy
              couch hide when guests come over flop over behind the couch shake
              treat give attitude attack feet why must they do that intently
              sniff hand . Need to chase tail hide when guests come over why
              must they do that all of a sudden go crazy shake treat hopped up
              on goofballs flop over swat at dog hunt anything that moves make
              muffins intrigued by the shower, leave dead animals as gifts lick
              butt attack feet destroy couch claw drapes behind the couch stand
              in front of the computer screen intently sniff hand flop over,
              inspect anything brought into the house give attitude swat at dog
              leave dead animals as gifts claw drapes hopped up on goofballs
              give attitude lick butt stand in front of the computer screen .
              Behind the couch flop over intrigued by the shower swat at dog
              attack feet shake treat hide when guests come over need to chase
              tail, all of a sudden go crazy hunt anything that moves leave dead
              animals as gifts hopped up on goofballs stand in front of the
              computer screen give attitude lick butt destroy couch, why must
              they do that flop over intently sniff hand claw drapes make
              muffins inspect anything brought into the house.
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </section>
  );
}

export default Home;
