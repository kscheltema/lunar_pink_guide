import styles from "../ui/theme";

function SinglePost(props) {
  const classes = styles();
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
        <p>{props.paragraph1}</p>
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <p>{props.paragraph2}</p>
        <p>{props.remaining}</p>
      </div>
      {/* <div className={classes.actions}>
        <button>To Favorites</button>
      </div> */}
    </li>
  );
}

export default SinglePost;
