import MainHeader from "../ui/MainHeader";
import ClassifiedsDrawer from "../ui/ClassifiedsDrawer";
import ListClassified from "../components/SingleClassified";
import blog from "../assets/same_sex_blog.png";

const DUMMY_DATA = [
  {
    id: "d1",
    title: "Example Post",
    image: blog,
    paragraph1:
      "Attack feet behind the couch destroy couch flop over give attitude hide when guests come over hopped up on goofballs hunt anything that moves sweet beast under the bed  stand in front of the computer screen , inspect anything brought into the house  intently stare at the same spot  rub face on everything need to chase tail shake treat  make muffins all of a sudden go crazy chase mice, chew ipad power cord  flop over chase imaginary bugs intently stare at the same spot flop over attack feet chase mice flop over. Give attitude inspect anything brought into the house all of a sudden go crazy hide when guests come over flop over hopped up on goofballs chase imaginary bugs flop over need to chase tail make muffins,  stand in front of the computer screen  chase mice shake treat  hunt anything that moves behind the couch sweet beast under the bed   rub face on everything destroy couch intently stare at the same spot, attack feet chew ipad power cord  attack feet destroy couch flop over  hunt anything that moves shake treat . Make muffins inspect anything brought into the house shake treat  hide when guests come over flop over behind the couch hunt anything that moves intently stare at the same spot, destroy couch need to chase tail flop over attack feet sweet beast under the bed  stand in front of the computer screen  all of a sudden go crazy, chew ipad power cord  give attitude  rub face on everything chase imaginary bugs hopped up on goofballs .",
  },
];

function Classifieds() {
  return (
    <article>
      <MainHeader />
      <ClassifiedsDrawer />
      <ListClassified posts={DUMMY_DATA} />
    </article>
  );
}

export default Classifieds;
