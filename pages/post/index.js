import Link from "next/link";
import Image from "next/image";

import matter from "gray-matter";
import PostList from "../../components/postlist";

const Post = ({ posts, title, description, ...props }) => {
  return (
    <>
      <div className=" bg-blue-800 flex flex-col h-screen text-green-300 font-semibold place-items-center  ">
        <div className="text-4xl   mb-8">Posts</div>

        <PostList posts={posts} />

        <div className="mt-auto mb-5">Fooot</div>
      </div>
    </>
  );
};

export default Post;

export async function getStaticProps() {
  const configData = await import(`../../siteconfig.json`);

  const posts = ((context) => {
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
  })(require.context("../../posts", true, /\.md$/));

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
