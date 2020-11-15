import Link from "next/link";
import Image from "next/image";

import Header from "../components/header";

import styles from "../styles/About.module.css";

function About() {
  return (
    <>
      <Header />
      <Image
        src="/fruit/pineapple.jpg"
        alt="Picture of the author"
        width={100}
        height={100}
        // unsized
      />

      <div className="p-4 shadow rounded bg-white">
        <h1 className="text-purple-500 leading-normal">Next.js</h1>
        <p className="text-gray-500">with Tailwind CSS</p>
      </div>
      <Link href="/">
        <a>Back to home!</a>
      </Link>
      <div className="box-border h-20 w-32 p-4 border-4 border-gray-400 bg-gray-200">
        <div className="h-full w-full bg-gray-400"></div>
      </div>
      <div className={styles.main}>About page</div>

      <div className="flex justify-center">
        <div className="bg-gray-400">s</div>w
        <div className="bg-gray-600 visible sm:invisible md:visible lg:invisible xl:visible">
          d
        </div>
        w<div className="bg-gray-400">w</div>
      </div>
    </>
  );
}

export default About;
