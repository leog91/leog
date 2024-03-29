import Link from "next/link";
import Image from "next/image";

import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Nutrition from "../../components/cook/nutrition";
import Ingredients from "../../components/cook/ingredients";

export default function Recipe({ frontmatter, markdownBody }) {
  if (!frontmatter) return <></>;

  return (
    <>
      <div className="bg-gray-300">
        <article className="  flex flex-col place-items-center">
          <div className="text-4xl font-bold text-gray-700">
            {frontmatter.title}
          </div>

          <div className="flex items-center">
            <div className="h-7 w-7">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <path
                  d="M89.9 34.3c-1-8.6-7.6-15.7-16.1-17.4-4.5-.9-8.7-.2-12.3 1.5-3.1-5.1-8.6-8.5-15-8.5-7.3 0-13.5 4.5-16.1 10.8-2.8-.7-5.9-.7-9.1.5-6.8 2.5-11.4 8.7-11.3 15.9.2 8.9 7.4 16.1 16.3 16.2v32.3c0 2.4 2 4.4 4.4 4.4h36.4c2.4 0 4.4-2 4.4-4.4V56.9C82.7 56 91.2 46 89.9 34.3zM34 51.5c-2.2 1.1-4.8 1.8-7.5 1.8"
                  fill="#fff"
                  stroke="#333"
                  strokeWidth="3.5"
                  strokeMiterlimit="10"
                />
                <path
                  d="M62.5 55.6c2.3.9 4.7 1.4 7.3 1.4.6 0 1.1 0 1.7-.1"
                  fill="#fff"
                  stroke="#333"
                  strokeWidth="3.5"
                  strokeMiterlimit="10"
                />
                <path
                  fill="none"
                  stroke="#333"
                  strokeWidth="3.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  d="M40 66.2v13.9M57.2 66.2v13.9"
                />
              </svg>
            </div>
            {frontmatter.author}
          </div>

          {!!frontmatter.ingredients && (
            <Ingredients ingredients={frontmatter.ingredients} />
          )}

          {!!frontmatter.nutrition && (
            <Nutrition nutrition={frontmatter.nutrition} />
          )}

          <div className="max-w-4xl">
            <ReactMarkdown source={markdownBody} />
          </div>
        </article>
        <div className="flex flex-col place-items-center">
          <img width={400} src={frontmatter.image} alt={frontmatter.title} />
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { recipe } = ctx.params;

  const content = await import(`../../recipes/${recipe}.md`);
  const config = await import(`../../siteconfig.json`);
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);

      return slug;
    });
    return data;
  })(require.context("../../recipes", true, /\.md$/));

  const paths = blogSlugs.map((slug) => `/recipe/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
