import matter from "gray-matter";
import RecipeList from "../../components/recipelist";

const Recipe = ({ recipes, title, description, ...props }) => {
  return (
    <>
      <div className=" bg-blue-800 flex flex-col h-screen text-green-300 font-semibold place-items-center  ">
        <div className="text-4xl   mb-8">RECIPES</div>

        <RecipeList recipes={recipes} />

        <div className="mt-auto mb-5">Fooot</div>
      </div>
    </>
  );
};

export default Recipe;

export async function getStaticProps() {
  const configData = await import(`../../siteconfig.json`);

  const recipes = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value = values[index];
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context("../../recipes", true, /\.md$/));

  return {
    props: {
      recipes,
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
