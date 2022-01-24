import MainHeader from "../ui/MainHeader";
import SinglePost from "../components/SinglePost";
import styles from "../ui/theme";

const DUMMY_DATA = [
  {
    id: "d1",
    title: "Example Post",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    paragraph1:
      "Attack feet behind the couch destroy couch flop over give attitude hide when guests come over hopped up on goofballs hunt anything that moves sweet beast under the bed  stand in front of the computer screen , inspect anything brought into the house  intently stare at the same spot  rub face on everything need to chase tail shake treat  make muffins all of a sudden go crazy chase mice, chew ipad power cord  flop over chase imaginary bugs intently stare at the same spot flop over attack feet chase mice flop over. Give attitude inspect anything brought into the house all of a sudden go crazy hide when guests come over flop over hopped up on goofballs chase imaginary bugs flop over need to chase tail make muffins,  stand in front of the computer screen  chase mice shake treat  hunt anything that moves behind the couch sweet beast under the bed   rub face on everything destroy couch intently stare at the same spot, attack feet chew ipad power cord  attack feet destroy couch flop over  hunt anything that moves shake treat . Make muffins inspect anything brought into the house shake treat  hide when guests come over flop over behind the couch hunt anything that moves intently stare at the same spot, destroy couch need to chase tail flop over attack feet sweet beast under the bed  stand in front of the computer screen  all of a sudden go crazy, chew ipad power cord  give attitude  rub face on everything chase imaginary bugs hopped up on goofballs .",
    paragraph2:
      "Why must they do that destroy couch intently stare at the same spot inspect anything brought into the house chase mice bag stretch flop over  rub face on everything, hunt anything that moves sweet beast under the bed hopped up on goofballs flop over shake treat   claw drapes need to chase tail give attitude, leave dead animals as gifts chase imaginary bugs attack feet behind the couch all of a sudden go crazy hide when guests come over. Sweet beast under the bed hide when guests come over hunt anything that moves behind the couch flop over give attitude chase imaginary bugs,  rub face on everything destroy couch all of a sudden go crazy intently stare at the same spot shake treat , chase mice why must they do that flop over hopped up on goofballs need to chase tail. Flop over  rub face on everything need to chase tail hopped up on goofballs why must they do that bag stretch attack feet intently stare at the same spot,  claw drapes chase imaginary bugs chase mice shake treat  destroy couch behind the couch hide when guests come over hunt anything that moves, flop over inspect anything brought into the house sweet beast under the bed all of a sudden go crazy leave dead animals as gifts give attitude. Destroy couch flop over give attitude hunt anything that moves  claw drapes sweet beast under the bed behind the couch bag stretch chase mice inspect anything brought into the house, leave dead animals as gifts  rub face on everything need to chase tail intently stare at the same spot why must they do that attack feet shake treat  all of a sudden go crazy, hopped up on goofballs flop over hide when guests come over chase imaginary bugs need to chase tail attack feet intently stare at the same spot chase imaginary bugs. Why must they do that leave dead animals as gifts inspect anything brought into the house chase mice chase imaginary bugs  rub face on everything, destroy couch give attitude bag stretch behind the couch attack feet, flop over sweet beast under the bed intently stare at the same spot need to chase tail.  claw drapes chase mice shake treat  destroy couch behind the couch  rub face on everything all of a sudden go crazy give attitude why must they do that bag stretch need to chase tail, intently stare at the same spot flop over chase imaginary bugs inspect anything brought into the house attack feet hunt anything that moves hopped up on goofballs hide when guests come over leave dead animals as gifts, flop over sweet beast under the bed attack feet hopped up on goofballs hide when guests come over sweet beast under the bed hunt anything that moves intently stare at the same spot why must they do that.",
    remaining:
      "Attack feet behind the couch destroy couch flop over give attitude hide when guests come over hopped up on goofballs hunt anything that moves inspect anything brought into the house, sweet beast under the bed need to chase tail  rub face on everything flop over leave dead animals as gifts  claw drapes why must they do that, shake treat  all of a sudden go crazy intently stare at the same spot chase imaginary bugs chase mice bag stretch destroy couch.  rub face on everything bag stretch flop over sweet beast under the bed hunt anything that moves need to chase tail hopped up on goofballs  claw drapes destroy couch inspect anything brought into the house behind the couch leave dead animals as gifts, give attitude attack feet intently stare at the same spot why must they do that chase mice shake treat  all of a sudden go crazy chase imaginary bugs flop over. Hunt anything that moves all of a sudden go crazy  claw drapes chase imaginary bugs sweet beast under the bed hopped up on goofballs attack feet flop over give attitude hide when guests come over inspect anything brought into the house, why must they do that behind the couch flop over chase mice need to chase tail destroy couch intently stare at the same spot  rub face on everything.  claw drapes  rub face on everything leave dead animals as gifts inspect anything brought into the house flop over shake treat  hide when guests come over need to chase tail flop over attack feet, intently stare at the same spot bag stretch give attitude chase imaginary bugs hunt anything that moves all of a sudden go crazy hopped up on goofballs behind the couch, why must they do that chase mice destroy couch sweet beast under the bed all of a sudden go crazy intently stare at the same spot bag stretch hopped up on goofballs.  rub face on everything chase mice attack feet hopped up on goofballs why must they do that give attitude leave dead animals as gifts chase imaginary bugs, flop over all of a sudden go crazy bag stretch need to chase tail hunt anything that moves flop over, hide when guests come over destroy couch intently stare at the same spot  claw drapes behind the couch sweet beast under the bed. Sweet beast under the bed bag stretch chase imaginary bugs inspect anything brought into the house hopped up on goofballs destroy couch flop over leave dead animals as gifts why must they do that hide when guests come over give attitude flop over, hunt anything that moves shake treat  behind the couch  rub face on everything all of a sudden go crazy chase mice attack feet intently stare at the same spot  claw drapes need to chase tail flop over,  claw drapes behind the couch shake treat  give attitude chase imaginary bugs intently stare at the same spot inspect anything brought into the house sweet beast under the bed hunt anything that moves hide when guests come over.",
  },
];

function Blog() {
  const classes = styles();
  return (
    <article>
      <MainHeader />
      <div>
        <h1>Blog Files</h1>
        <ul className={classes.list}>
          {DUMMY_DATA.map((post) => (
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
      </div>
    </article>
  );
}

export default Blog;
