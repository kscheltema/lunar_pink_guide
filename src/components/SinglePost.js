import { Box, Card, CardContent, Grid, Typography } from "@material-ui/core";
import styles from "../ui/theme";

function SinglePost(props) {
  const classes = styles();
  return (
    <li className={classes.drawerClassifiedsBox}>
      <Box className={classes.drawerClassifiedsBox}>
        <Card className={classes.cardPage}>
          <Grid container spacing={1} className={classes.drawerClassifiedsBox}>
            <Box className={classes.cardBox}>
              <CardContent className={classes.cardText}>
                <img src={props.image} alt={props.imageTitle} />
              </CardContent>
            </Box>
            <Box className={classes.cardBox}>
              <CardContent className={classes.cardBlogText}>
                <Typography component="div" variant="h5">
                  {props.title}
                </Typography>
                <Typography variant="body1">{props.paragraph1}</Typography>
              </CardContent>
            </Box>
            <Box>
              <CardContent className={classes.cardTextBox}>
                <Typography variant="body1">{props.paragraph2}</Typography>
              </CardContent>
              <CardContent className={classes.cardTextBox}>
                <Typography variant="body1">{props.remaining}</Typography>
              </CardContent>
            </Box>
          </Grid>
        </Card>
      </Box>
    </li>
  );
}

export default SinglePost;
