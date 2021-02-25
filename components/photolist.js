import Link from "next/link";

export default function PhotoList({ photos }) {
  if (photos === "undefined") return null;

  return (
    <div>
      {!photos && <div>No photos -sad- !</div>}
      <ul>
        {photos &&
          photos.map((photo) => {
            return (
              <li key={photo.slug}>
                <Link href={{ pathname: `/photography/${photo.slug}` }}>
                  <a>{photo.frontmatter.title}</a>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
