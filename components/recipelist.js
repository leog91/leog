import Link from "next/link";

export default function RecipeList({ recipes }) {
  if (recipes === "undefined") return null;

  return (
    <div>
      {!recipes && <div>No recipes -sad- !</div>}
      <ul>
        {recipes &&
          recipes.map((recipe) => {
            return (
              <li key={recipe.slug}>
                <Link href={{ pathname: `/recipe/${recipe.slug}` }}>
                  <a>{recipe.frontmatter.title}</a>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
