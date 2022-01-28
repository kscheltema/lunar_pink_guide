import { Typography } from "@material-ui/core";

function SinglePost(props) {
  return (
    <li>
      <Typography variant="h5">{props.title}</Typography>
      <Typography variant="body1">{props.paragraph1}</Typography>
      <Typography variant="body1">{props.paragraph2}</Typography>
      <Typography variant="body1">{props.remaining}</Typography>
    </li>
  );
}

export default SinglePost;
