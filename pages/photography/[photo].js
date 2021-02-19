import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

export default function PhotoPost({ frontmatter, markdownBody }) {
  if (!frontmatter) return <></>;

  return (
    <>
      <article>
        <h1>{frontmatter.title}</h1>
        <p>By {frontmatter.author}</p>
        <div>
          <ReactMarkdown source={markdownBody} />
        </div>
      </article>
    </>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { photo } = ctx.params;

  const content = await import(`../../photos/${photo}.md`);
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
  })(require.context("../../photos", true, /\.md$/));

  const paths = blogSlugs.map((slug) => `/photography/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
