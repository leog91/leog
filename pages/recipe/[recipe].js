import Link from "next/link";
import Image from "next/image";

import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export default function Recipe({ frontmatter, markdownBody }) {
  if (!frontmatter) return <></>;

  return (
    <>
      <div className="bg-gray-300">
        <article className="  flex flex-col place-items-center">
          <div className="text-gray-700 text-xl font-bold">
            {frontmatter.title}
          </div>
          <p>By {frontmatter.author}</p>
          <div>
            <ReactMarkdown source={markdownBody} />
          </div>
        </article>
        <Image
          className="p-0"
          src={frontmatter.image}
          alt={frontmatter.title}
          unsized
        />
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
