import SinglePost from "./SinglePost";
import styles from "../ui/theme";

function ListPost(props) {
  const classes = styles();
  return (
    <ul className={classes.blogList}>
      {props.posts.map((post) => (
        <SinglePost
          key={post.id}
          id={post.id}
          image={post.image}
          title={post.title}
          paragraph1={post.paragraph1}
          paragraph2={post.paragraph2}
          remaining={post.remaining}
        />
      ))}
    </ul>
  );
}

export default ListPost;
