import Link from "next/link";

import styles from "../styles/About.module.css";

function About() {
  return (
    <>
      <Link href="/">
        <a>Back to home!</a>
      </Link>

      <div className={styles.main}>About page</div>
    </>
  );
}

export default About;
