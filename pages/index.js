import Head from "next/head";
import Link from "next/link";

const colors = {
  darkRed: "text-red-800",
  green: "text-green-500",
  lightBlue: "text-blue-300",
  lightYellow: "text-yellow-200",
  slate: "text-slate-300",
  orange: "text-orange-500",
};

const pages = [
  { name: null, url: "admin", textColor: colors.darkRed },
  { name: null, url: "dash" },
  { name: "WHATA--DISH", url: "dish", textColor: colors.green },
  { name: null, url: "dough", textColor: colors.lightYellow },
  { name: null, url: "folder", textColor: colors.lightBlue },
  { name: null, url: "formy" },
  { name: null, url: "fridge" },

  { name: null, url: "jukebox", textColor: colors.slate },
  { name: null, url: "matrox" },
  { name: null, url: "mongtest" },
  { name: null, url: "phone", textColor: colors.orange },
  { name: null, url: "play" },
  { name: null, url: "player" },
  { name: null, url: "producer" },
  { name: null, url: "stash", textColor: colors.darkRed },
  { name: null, url: "tasker", textColor: colors.lightBlue },
  { name: null, url: "test" },
  { name: null, url: "train", textColor: colors.slate },
  { name: null, url: "tree" },
  { name: null, url: "trick", textColor: colors.lightYellow },
  { name: null, url: "urlate" },
  { name: null, url: "walker", textColor: colors.lightBlue },
  { name: null, url: "recipe" },
  { name: null, url: "post" },
  { name: null, url: "photography" },
];

export default function Home({ title, description, ...props }) {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-800 text-white">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>index 😃 {pages.length.toString()}</h1>

        <h1 className="text-lg font-extrabold  text-red-800">
          <Link href="/stash">
            <a>
              {"<"}Stash !{">"}
            </a>
          </Link>
        </h1>

        <h1 className="text-lg font-extrabold  text-green-500">
          <Link href="/play">
            <a>
              {"<"}Play !{">"}
            </a>
          </Link>
        </h1>
        <h1 className="text-lg font-extrabold  text-blue-700">
          <Link href="/player">
            <a>
              {"<"}Player !{">"}
            </a>
          </Link>
        </h1>

        {/* //remove <a> link,> check semantic */}
        {pages.map((p) => (
          <div
            key={p.url}
            className={`text-lg font-extrabold ${
              p.textColor ? p.textColor : "text-green-500"
            } `}
          >
            <Link href={`/${p.url}`}>
              <a>
                {"<"}
                {p.name ? p.name : p.url}
                {">"}
              </a>
            </Link>
          </div>
        ))}

        <div>{description}</div>
        <div>{title}</div>

        <h1 className="text-lg font-extrabold  text-purple-700">
          <Link href="/friendActivity">
            <a>
              {"<"}Friend Activity !{">"}
            </a>
          </Link>
        </h1>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
