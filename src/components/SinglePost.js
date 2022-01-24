import { Box, Card, CardContent, Typography } from "@material-ui/core";
import styles from "../ui/theme";

function SinglePost(props) {
  const classes = styles();
  return (
    <li className={classes.item}>
      <Card className={classes.cardPage}>
        <Box className={classes.cardBox}>
          <CardContent className={classes.cardText}>
            <img src={props.image} alt={props.title} />
          </CardContent>
        </Box>
        <Box className={classes.cardBox}>
          <CardContent className={classes.cardPictureText}>
            <Typography component="div" variant="h5">
              {props.title}
            </Typography>
            <Typography variant="body1">{props.paragraph1}</Typography>
          </CardContent>
        </Box>
        <Box>
          <CardContent className={classes.cardFullText}>
            <Typography variant="body1">{props.paragraph2}</Typography>
            <Typography variant="body1">{props.remaining}</Typography>
          </CardContent>
        </Box>
      </Card>
    </li>
  );
}

export default SinglePost;
