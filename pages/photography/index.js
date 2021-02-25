import Link from "next/link";
import Image from "next/image";

import matter from "gray-matter";
import PhotoList from "../../components/photolist";

// import Header from "../../components/header";

// import styles from "../styles/About.module.css";

const Photography = ({ photos, title, description, ...props }) => {
  return (
    <>
      <div className=" bg-blue-800 flex flex-col h-screen text-green-300 font-semibold place-items-center  ">
        <div className="text-4xl   mb-8">PHOTOS</div>

        <PhotoList photos={photos} />

        <div className="mt-auto mb-5">Fooot</div>
      </div>
    </>
  );
};

export default Photography;

export async function getStaticProps() {
  const configData = await import(`../../siteconfig.json`);

  const photos = ((context) => {
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
  })(require.context("../../photos", true, /\.md$/));

  return {
    props: {
      photos,
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
