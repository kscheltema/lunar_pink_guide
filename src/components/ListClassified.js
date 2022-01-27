import SingleClassified from "./SingleClassified";
import styles from "../ui/theme";

function ListClassified(props) {
  const classes = styles();
  return (
    <ul className={classes.blogList}>
      {props.posts.map((post) => (
        <SingleClassified
          key={post.id}
          id={post.id}
          image={post.image}
          imageTitle={post.imageTitle}
          title={post.title}
          paragraph1={post.paragraph1}
          paragraph2={post.paragraph2}
          remaining={post.remaining}
        />
      ))}
    </ul>
  );
}

export default ListClassified;
