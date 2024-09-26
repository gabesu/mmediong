import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Works from "./components/Works";

const workDetails = [
  {
    id: 1,
    title: "Piggyvest",
    description: "Designing beginner friendly savings and investments",
    image: "/piggyvest_cover.png",
    url: "/piggyvest",
  },
  {
    id: 2,
    title: "Pocket App",
    description: "Designing beginner friendly savings and investments",
    image: "/pocketapp_cover.svg",
    url: "/pocketapp",
  },
  {
    id: 3,
    title: "Patronize",
    description: "Designing beginner friendly savings and investments",
    image: "/patronize_cover.png",
    url: "/patronize",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <div id="works"></div>
      {workDetails.map((workDetail) => (
        <Works key={workDetail.id} {...workDetail} />
      ))}
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
